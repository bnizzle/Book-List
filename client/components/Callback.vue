<template>

</template>

<script>
import { setIdToken, setAccessToken } from '../services/auth';
export default {
  mounted() {
    this.$nextTick(() => {
      setIdToken();
      setAccessToken();
      window.location.href = '/';
    })
  }
}
</script>
