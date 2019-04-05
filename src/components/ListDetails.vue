<template>
  <div class="listdetails">
    ListDetails
    <div>route: {{route}}</div>
  </div>
</template>

<script>

// Uncomment this line to reproduce error
//import '@/router'

export default {
  mounted() {
    console.log(this.$route)
  },
  computed: {
    route() {
      return this.$route.name
    }
  }
}
</script>
