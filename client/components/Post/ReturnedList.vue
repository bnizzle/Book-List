<template>
<div>
  <div class="box" v-for="book in this.returnedBooks" :key="book.id" v-if="book.saleInfo.saleability == 'FOR_SALE'">
    <article class="media">
      <div class="media-left">
        <figure class="image is-256x256">
          <img :src="getImageSrc(book)" alt="Image">
        </figure>
      </div>
      <div class="media-content">
        <div class="content">
          <p>
            <strong>{{ book.volumeInfo.title | truncate(40) }}</strong> <span v-if="book.volumeInfo.authors"><small>{{ returnAuthors(book.volumeInfo.authors) }}</small></span>
            <br>
            <span v-if="book.volumeInfo.description" >{{ book.volumeInfo.description | truncate(400) }}</span>
          </p>
        </div>
        <nav class="level is-mobile">
          <div class="level-left">
            <a class="level-item">
              <span class="icon is-small" v-if="book.volumeInfo.averageRating"><i class="fa fa-star"></i>{{ book.volumeInfo.averageRating }}</span>
            </a>
          </div>
        </nav>
      </div>
      <div class="media-right">
        <button class="button is-success">Recommend</button>
      </div>
    </article>
  </div>
</div>
</template>

<script>
import axios from 'axios';
export default {
  props: ['returnedBooks'],
  methods: {
    getImageSrc(book) {
      return String(book.volumeInfo.imageLinks.smallThumbnail);
    },
    returnAuthors(authors) {
      return authors.join(', ');
    }
  },
  filters: {
    truncate: function(string, value) {
      if (string.length >= value) {
        return string.substring(0, value) + '...';
      } else {
        return string
      }
    }
  }
}
</script>

<style>
  .small + .small:before {
    content: ", ";
  }

  .box {
    padding-top: 15px;
  }
</style>
