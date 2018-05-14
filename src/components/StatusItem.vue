<template>
<div class="list-status">
  <h2 @click="setCurrentStatus ({ id: item.id , active: true })">{{ item.text }}</h2>
</div>
</template>
<script>
import {
  mapActions
} from 'vuex'

export default {
  props: ['item'],
  methods: {
    ...mapActions([
      'setCurrentStatus'

    ])
  }
}
</script>
<style>
.list-status h2 { background: #ccc; width: 200px; padding: 10px; clear: both; font-size: 12px}
</style>
