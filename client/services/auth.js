import decode from 'jwt-decode';
import axios from 'axios';
import auth0 from 'auth0-js';
import Router from 'vue-router';
const ID_TOKEN_KEY = 'id_token';
const ACCESS_TOKEN_KEY = 'access_token';

const CLIENT_ID = 'mTCNsldTXABVdUqwfLoCNQj0zENBtunc';
const CLIENT_DOMAIN = 'sphere.au.auth0.com';
const REDIRECT = 'http://localhost:4000/callback';
const SCOPE = 'openid';
const AUDIENCE = 'https://sphere.au.auth0.com/userinfo';

var auth = new auth0.WebAuth({
  clientID: CLIENT_ID,
  domain: CLIENT_DOMAIN
});

export function login() {
  auth.authorize({
    responseType: 'token id_token',
    redirectUri: REDIRECT,
    audience: AUDIENCE,
    scope: SCOPE
  });
}

var router = new Router({
  mode: 'history',
});

export function logout() {
  clearIdToken();
  clearAccessToken();
  router.go('/');
}

// requireAuth
export function requireAuth(to, from, next) {
  if (!isLoggedIn()) {
    console.log('auth failed ...')
    let path = '/login'
    let result = auth0.parseHash(window.location.hash)
    if (result && result.idToken) {
      // set token in local storage
      localStorage.setItem('id_token', result.idToken)

      // redirect to home page
      path = '/'

      // get user profile data
      auth0.getProfile(result.idToken, function (err, profile) {
        if (err) {
          // handle error
          alert(err)
        }
        let user = JSON.stringify(profile)
        localStorage.setItem('profile', user)
      })
    }
    next({
      path: path
    })
  } else {
    next()
  }
}

export function getIdToken() {
  return localStorage.getItem(ID_TOKEN_KEY)
}

export function getAccessToken() {
  return localStorage.getItem(ACCESS_TOKEN_KEY)
}

function clearIdToken() {
  localStorage.removeItem(ID_TOKEN_KEY)
}

function clearAccessToken() {
  localStorage.removeItem(ACCESS_TOKEN_KEY)
}

// Helper function that will allow us to extract the access_token and id_token
function getParameterByName(name) {
  let match = RegExp('[#&]' + name + '=([^&]*)').exec(window.location.hash);
  return match && decodeURIComponent(match[1].replace(/\+/g, ' '));
}

export function setAccessToken() {
  let accessToken = getParameterByName('access_token');
  localStorage.setItem(ACCESS_TOKEN_KEY, accessToken)
}

export function setIdToken() {
  let idToken = getParameterByName('id_token');
  localStorage.setItem(ID_TOKEN_KEY, idToken)
}

export function isLoggedIn() {
  const idToken = getIdToken();
  return !!idToken && !isTokenExpired(idToken);
}

function getTokenExpirationDate(encodedToken) {
  const token = decode(encodedToken);
  if (!token.exp) { return null }

  const date = new Date(0);
  date.setUTCSeconds(token.exp);

  return date;
}

function isTokenExpired(token) {
  const expirationDate = getTokenExpirationDate(token);
  return expirationDate < new Date();
}
