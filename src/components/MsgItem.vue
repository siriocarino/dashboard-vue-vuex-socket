<template>
  <div class="list-msg">
    {{  item.msg }}
  </div>
</template>
<script>
import { mapActions } from 'vuex'

export default {
  props: ['item'],
  methods: {
    ...mapActions([
    ])
  }
}

</script>
<style>


</style>
