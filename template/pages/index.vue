<template>
  <section class="container">
    <div>
      <logo/>
      <h1 class="title">
        {{msg}}
      </h1>
      <h2 class="subtitle">
        My  posh Nuxt.js project demo
      </h2>
      <nuxt-child />
    </div>
  </section>
</template>
<script>
  import Logo from '~/components/Logo.vue'
  import Axios from 'axios'
  export default {
   async asyncData(){
     let {data}=await Axios.get('http://order.luckydd.cn/api/Commodity/classly')
      return {
         msg:data.message
      }
    },
    components: {
      Logo
    },
   async created(){
//     let {data}=await Axios.get('http://order.luckydd.cn/api/Commodity/classly')
    }
  }
</script>

<style lang="scss">
  .container {
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  .title {
    font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
    display: block;
    font-weight: 300;
    font-size: 100px;
    color: #35495e;
    letter-spacing: 1px;
  }

  .subtitle {
    font-weight: 300;
    font-size: 42px;
    color: #526488;
    word-spacing: 5px;
    padding-bottom: 15px;
  }

  .links {
    padding-top: 15px;
  }
</style>
