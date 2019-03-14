<template>
  <div class="main">
    <div>页面A</div>
  </div>
</template>

<script>
import tool from '@/mixins/tool'
export default {
  data () {
    return {}
  },
  mixins: [tool],
  components: {},
  methods: {},
  mounted () {
    console.log('-----------^^^^^------------邓紫棋this', this)
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
