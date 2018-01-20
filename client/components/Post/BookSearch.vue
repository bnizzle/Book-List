<template>
<div>
  <h2 class="subtitle">Seach for a book</h2>
  <input class="input" type="text" placeholder="Search for a book" v-model="searchInput">
  <div class="books">
    <returned-list :returnedBooks="returnedBooks"></returned-list>
  </div>
</div>
</template>

<script>
import axios from 'axios';
import ReturnedList from './ReturnedList';
export default {
  data () {
    return {
      searchInput: '',
      returnedBooks: []
    }
  },
  methods: {
    searchForBook() {
      axios.get("https://www.googleapis.com/books/v1/volumes?q=" + this.searchInput + "&projection=full")
      .then(res => {
        this.returnedBooks = res.data['items']
      })
      .catch(error => console.log(error))
    }
  },
  components: {
    ReturnedList
  },
  watch: {
    searchInput() {
      setTimeout(() => {this.searchForBook(this.searchInput)}, 2000)
    }
  }
}
</script>
<style>
  .books {
    padding-top: 15px;
  }
</style>
