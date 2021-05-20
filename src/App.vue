<template>
  <div class="my-class">
    <messages-list :messages="messages" />
  </div>
</template>

<script>
  import MessagesList from './components/messages/MessageList.vue'

  export default {
    components: {
      MessagesList
    },
    data() {
      return {
        messages: [
          {id: 1, text: 'Купить хлеб'},
          {id: 2, text: 'Купить масло'},
          {id: 3, text: 'Купить пиво'}
        ]

      }
    },
    created: function () {
      // const proxy = require('node-global-proxy').default
      // let PROXY_URL = "localhost:9000"
      // proxy.system()
      // proxy.setConfig(PROXY_URL)
      // proxy.start()

      // `this` указывает на экземпляр vm
/*
      this.$resource('/message').query()
              .then(result => result.json()
                      .then( data => this.messages = result.data)
      )
*/
      // console.log(process.env.BASE_URL + '/message')
      // console.log(process.env.NODE_ENV)

      let url = process.env.VUE_APP_API_ENDPOINT + '/message'
      console.log(url)
      this.$http.get(url).then( result => this.messages = result.data)

      // this.$http.get('/message').then( result => this.messages = result.data)
    }
  }
</script>

<style>
  .my-class {
    color: blue;
  }
</style>
