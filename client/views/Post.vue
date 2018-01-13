<template>
  <div class="page">
    <navbar></navbar>
    <h1 class="title">Add your book recommendation</h1>
    <book-search></book-search>
  </div>
</template>

<script>
import Navbar from 'components/Navbar/Navbar';
import BookSearch from 'components/Post/BookSearch';
export default {
  components: {
    Navbar,
    BookSearch
  }
}
</script>
