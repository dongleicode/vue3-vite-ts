<template>
  <div class="about">
    <van-nav-bar
      title="地图"
      left-text=""
      left-arrow
      @click-left="Utils.goPage('/home', {})"
    />
    <div>
        <Bar :color="'#ff6060'" :type="'bar'" :data="[120, 200, 150, 80, 70, 110, 130]" />
    </div>
    <div>
        <Time />
    </div>
    <div>
        <Country :type="'line'" :data="[120, 200, 150, 80, 70, 110, 130]"/>
    </div>
  </div>
</template>
  <script>
  import Bar from '../components/map/Bar'
  import Time from '../components/map/Time'
  import Country from '../components/map/Country'

export default {
  name: "map",
  components:{
    Bar,
    Time,
    Country
  },
  setup(){
    return {
        Utils
    }
  }
};
</script>
<style>
    .about{
        padding-bottom: 80px;
    }
</style>
  