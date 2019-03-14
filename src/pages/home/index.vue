<template>
  <div class="main">
    <div>wwwwwwww</div>
    <p @click="_goRouter('/pages/A/main')">index</p>
    <card :text="testData.name"></card>
  </div>
</template>

<script>
import tool from '@/mixins/tool'
import card from '@/components/card'
import http from '@/api/http_base'
export default {
  components: {
    card
  },
  data () {
    return {
      testData: {
        name: 'yangmi'
      }
    }
  },
  mixins: [tool],
  methods: {},
  mounted () {
    http.get('/journalismApi').then(res => {
      console.log('-----------^^^^^------------邓 紫棋res', res)
    })
  }
}
</script>

<style lang='less' scoped >
 @import '../../less/public.less'; 
.main{
  p{
    color: @mainColor;
  }
}
</style>
