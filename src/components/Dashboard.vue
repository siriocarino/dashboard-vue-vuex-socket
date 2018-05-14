<template>

  <div class="container-fluid dashboard">
    <router-link to="/logout">Log out</router-link>
    <div class="row col-sm-12">

      <h2 class="text-center">Agent Panel</h2>

      <div class="content-status text-center">
        <div class="current-status" @click="toggleStatus()">CURRENT STATUS </div>
        <ul class="list-status" v-if="showStatus">
          <status-item  v-for="(status, index) in listStatus" :key="index" :item="status"></status-item>
        </ul>
      </div>

    </div>

    <div class="row">
        <div class="col-sm-3 text-center">
          <ul class="thread-list">
            <thread-item v-for="(thread, index) in listThreads" :key="index" :item="thread"></thread-item>
            <p>Active chat: {{ countThread }} </p>
          </ul>
        </div>
        <div class="col-sm-9">
          <div class="chat-main">
            <chat-main></chat-main>
          </div>
        </div>
    </div>



  </div>
</template>

<script>
import ThreadItem from './ThreadItem'
import StatusItem from './StatusItem'
import ChatMain from './ChatMain'
import { mapActions } from 'vuex'

export default {
  components: { ThreadItem, StatusItem, ChatMain },
  mounted() {



  },
  created () {


   },
  computed: {
    name () {
      return this.$store.state.userName
    },
    listThreads () {
      return this.$store.state.listThreads
    },
    listStatus () {
      return this.$store.state.listStatus
    },
    countThread () {
      return this.$store.state.listThreads.length
    },
    showStatus () {
      return this.$store.state.status
    }
  },
  methods: {
    ...mapActions([
      'toggleStatus',
      'onUserConnect'
    ])
  }
}
</script>

<style>
.dashboard {}
.thread-list,
.chat-main { background: #fff; min-height: 500px;   }
.thread-list { padding-top: 40px}
.thread-list .item { margin: 20px; background: #ccc; padding: 10px; border-radius: 10px}
.content-status { position: absolute; right:20px; z-index: 2; cursor: pointer}
.content-status .current-status { border: 1px solid #999;padding: 10px; background: #f64; width: 200px;}
</style>
