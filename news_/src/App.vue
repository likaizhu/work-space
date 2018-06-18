<template>
  <div id="app">
    <Loading v-show='loadingShow'></Loading>
    <MenuNav v-show='headerShow'></MenuNav>
    <transition name='slide-down'>
      <keep-alive><router-view class='routerclass'></router-view></keep-alive>
    </transition>
    <div style="height:50px;"></div>
    <Footer v-show='menuShow'></Footer>
  </div>
</template>

<script>
import MenuNav from './components/MenuNav.vue'
import Footer from './components/Footer.vue'
import {mapGetters,mapActions} from 'vuex'
export default {
  name: 'app',
  computed:mapGetters([
    'headerShow',
    'loadingShow',
    'menuShow'
  ]),
  data () {
    return {
      
    }
  },
  methods:{

  },
  components:{
    MenuNav,
    Footer
  },
  watch:{
    $route(to,from){
      var id=this.$route.params.id;
      if(to.path=='/user-info'){
        this.$store.dispatch('hideHeader');
      }else if(to.path=='/article/'+id){
        this.$store.dispatch('hideMenu')
      }else if(to.path=='/home'){
        this.$store.dispatch('showMenu');
        this.$store.dispatch('showHeader')
      }
    }
  }
}
</script>

<style>
  img{
      width: 100%;
      height: auto;
  }
  .app{
    position: relative;
  }
  *{
    margin:0;
    padding: 0
  }
  body{
    background: #f0f0f0;
  }
  /*.banner { position: relative; overflow: auto; text-align: center;}

  .banner li { list-style: none; }

  .banner ul li { float: left; }
  #b { width: 100%;}

  #b .arrow { position: absolute; top: 200px;}

  .top-250{
    top: -250px;
  }*/
  .slide-down-enter-active{
    transition:all 1s  ease;
    opacity: 1;
    transform:translate3d(0,.75rem,0);
  }
  .slide-down-enter{
    opacity: 0;
  }
  .slide-down-leave{
    opacity: 0;
  }
 /* .slide-down-leave-active{
    transition:.5s all ease;
    opacity: 0.2;
    transform:translate3d(0,.5rem,0);
  }*/

</style>
