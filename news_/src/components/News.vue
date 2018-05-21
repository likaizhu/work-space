<template>
	<div id='news'>
		<Banner></Banner>
		<ul>
			<li v-for='leng in newsArr'>
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
</style>
<script type="text/javascript">
	import Banner from './Banner.vue'
	import Map from './Map.vue'
	import Search from './Search.vue'
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
				name:'<h1>likaizhu</h1>'
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
			}
		},
		components:{
			Banner,
			Map,
			Search

		}
	}

</script>