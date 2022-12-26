<template></template>
<script>
import {saveStorage} from "@/saveStorage";
export default {
  created() {
    saveStorage('token', false)
    saveStorage('auth', false)
    saveStorage('isAdmin', '0')
    this.$router.push({name: 'homePage'})
  }
}
</script>