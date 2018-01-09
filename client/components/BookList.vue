<template>
  <table class="table">
    <thead>
      <tr>
        <th>No.</th>
        <th>Book Title</th>
        <th>Finished?</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="book in books" :key="book.id">
        <td>{{ book.id }}</td>
        <td>{{ book.name }}</td>
        <td>{{ book.finished_reading }}</td>
      </tr>
    </tbody>
  </table>
</template>
<script>
import axios from 'axios';
export default {
  data () {
    return {
      books: []
    }
  },
  created () {
    axios.get('http://localhost:5000/api/v1/books')
      .then(res => {
        console.log(res)
        this.books = res.data['books']
      })
      .catch(error => console.log(error))
  }
}
</script>
<style>
.table {
      margin-left: auto;
      margin-right: auto;
    }
</style>
