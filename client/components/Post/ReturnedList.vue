<template>
<div>
  <div class="box" v-for="book in this.returnedBooks" :key="book.id">
    <article class="media">
      <div class="media-content">
        <div class="content">
          <p>{{ book.volumeInfo.title }}</p>
        </div>
      </div>
    </article>
  </div>
</div>
</template>

<script>
export default {
  props: ['returnedBooks']
}
</script>
