<template>
  <div class="add-message"><input type="text" v-model="msg" /><button  @click="addMessage(msg)">ADD MESSAGE</button></div>
</template>
<script>
import { mapActions } from 'vuex'

export default {
  data () {
    return {
      msg: ''
    }
  },
  mounted(){

  },
  methods: {
    ...mapActions([
      'addMessage',
    ])

  }
}

</script>
<style>
.add-message { position: absolute; bottom: 0; }
.add-message input { width:80%; padding: 10px; font-size: 18px; margin: 20px; float: left }
.add-message button {  float: left}

</style>
