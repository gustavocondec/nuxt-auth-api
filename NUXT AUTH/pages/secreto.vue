<template>
  <div>
    Pagina Secreto: {{ secreto }}
  </div>
</template>
<script>
export default {
  middleare: 'auth',
  data () {
    return {
      secreto: ''
    }
  },
  async created () {
    const res = await this.$axios({
      method: 'get',
      url: process.env.VUE_APP_API + '/secreto'
    })

    console.log('secreto pagina', res.data.mensaje)
    this.secreto = res.data.mensaje
  }
}
</script>

<style>
</style>
