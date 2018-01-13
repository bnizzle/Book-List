<template>
<div>
  <h2 class="subtitle">Seach for a book</h2>
  <input class="input" type="text" placeholder="Search for a book" v-model="searchInput">
  <button class="button" @click="searchForBook(searchInput)">Search</button>

  <returned-list :returnedBooks="returnedBooks"></returned-list>
</div>
</template>

<script>
import axios from 'axios';
import ReturnedList from './ReturnedList';
export default {
  data () {
    return {
      searchInput: '',
      returnedBooks: {}
    }
  },
  methods: {
    searchForBook() {
      axios.get("https://www.googleapis.com/books/v1/volumes?q=" + this.searchInput)
      .then(res => {
        this.returnedBooks = res.data['items']
        console.log(this.returnedBooks)
      })
      .catch(error => console.log(error))
    }
  },
  components: {
    ReturnedList
  }
}
</script>
