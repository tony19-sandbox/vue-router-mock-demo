<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <ListDetails />
  </div>
</template>

<script>
// @ is an alias to /src
import ListDetails from '@/components/ListDetails.vue'

export default {
  name: 'home',
  components: {
    ListDetails
  }
}
</script>
