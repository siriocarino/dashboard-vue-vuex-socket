<template>
<div class="chat-content">
  <h3 class="text-center">CHAT CONTENT</h3>
  <msg-item v-for="(msgItem, index) in listMessage" :key="index" :item="msgItem"></msg-item>
  <add-message></add-message>

</div>
</template>
<script>

import { mapActions } from 'vuex'
import MsgItem from './MsgItem'
import AddMessage from './AddMessage'


export default {
  components: { MsgItem, AddMessage},
  computed: {
    listMessage () {
      return this.$store.state.listMessage
    },
  },
  mounted() {
    //this.$store.dispatch('getAllThreads')
  },

}
</script>
<style>


</style>
