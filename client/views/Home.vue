<template>
  <div class="page">
    <navbar></navbar>
    <h1 class="title">Bnizzle's Book List</h1>
    <h2 class="subtitle">A list of books that I have read or am planning to read. Feel free
      to add to this if you would like.
    </h2>
    <book-list></book-list>
  </div>
</template>

<script>
import BookList from 'components/BookList'
import Navbar from 'components/Navbar'

export default {
  components: {
    Navbar,
    BookList
  }
}
</script>
