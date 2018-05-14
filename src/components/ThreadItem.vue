<template>
  <div class="list-threads">
      <div class="item" @click="setThreadsByID ({ id: item.id , sessionID:item.sessionID, active: true })">{{ item.text }}</div>
  </div>
</template>
<script>
import { mapActions } from 'vuex'

export default {
  props: ['item'],
  computed: {
  },
  methods: {
    ...mapActions([
      'getAllThreads',
      'setThreadsByID'
    ])
  }
}

</script>
<style>


</style>
