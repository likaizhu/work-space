<template>
	<div id='news'>
		<Banner></Banner>
		<ul>
			<li v-for='leng in newsArr' :key="leng.id">
				<router-link :to="'/article/'+leng.id">
					<h2 class="title">{{leng.title}}</h2>
					<div class="content">{{leng.content}}</div>
				</router-link>
			</li>
		</ul>
		<Map :news-map="map"></Map>
		<router-link to="/search">搜索功能</router-link>
		<div class="tuceng" :style="hei" @click='disappear' v-show='hide'>
			显示图层
		</div>
		<div v-html='name'></div>
		<router-link to="/baiduSearch">百度搜索功能</router-link>
		<Cha-cao>
			<header slot="header">
				我是头部
			</header>
			<template slot-scope="propSlot">
				<div>{{propSlot.person.name}}=={{propSlot.person.age}}</div>
			</template>	
		</Cha-cao>
		<transition name="fade">
			<component :is="type"></component>
		</transition>
		<input type='button' @click="clickToggle" value="切换组件" />
	</div>
</template>
<style type="text/css" media="screen" scoped>
	#news ul li{
		border-bottom: 1px dashed black;
	}
	.title{
		font-size: .7rem;
	}
	.content{
		font-size: .4rem;
		color:#999;
	}
	.tuceng{
		width: 10.0rem;
		position: fixed;
    	top: 0;
    	background: rgba(0,0,0,0.5);
    	z-index: 100
	}
	.fade-enter {
		opacity: 0;
	}
	.fade-enter-active {
		transition:all 2s ease;
	}
	.fade-leave {
		opacity: 0;
	}
</style>
<script type="text/javascript">
	import Banner from './Banner.vue'
	import Map from './Map.vue'
	import Search from './Search.vue'
	import ChaCao from './ChaCao.vue'
	import One from './One.vue'
	import Two from './Two.vue'
	import {mapGetters,mapActions} from 'vuex'
	export default{
		computed:mapGetters(['hide']),
		data(){
			return{
				newsArr:[],
				map:'20',
				hei:{
					height:'',
					lineHeight:'',
					textAlign:'center'
				},
				name:'<h1>likaizhu</h1>',
				type:'One'
			}
		},
		mounted(){
				
		},
		created(){
			this.getHei();
			this.fetchData();
		},
		methods:{
			fetchData(){
				var this_=this;
				this.$http.get('http://localhost:8080/src/data/news.js').then(function(response){
					this_.newsArr=response.data
				}).catch(function(err){
					console.log(err)
				})
			},
			getHei(){
				this.hei.height=$(window).height()+'px';
				this.hei.lineHeight=$(window).height()+'px';
			},
			disappear(){
				this.$store.dispatch('hideTuCeng')
			},
			clickToggle(){
				this.type = this.type ==='One' ? 'Two' : 'One'
			}
		},
		components:{
			Banner,
			Map,
			Search,
			ChaCao,
			One,
			Two

		}
	}

</script>