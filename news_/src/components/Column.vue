<template>
	<div id='column' class="mar40">
		<ul>
			<li v-for='leng in newsArr'>
				<div class="title">
					{{leng.title}}
				</div>
				<div class="content">
					{{leng.content}}
				</div>
			</li>
		</ul>
	</div>
</template>
<style type="text/css" media="screen">
	#column ul li{
		border-bottom: 1px dashed black;
	}
	.title{
		font-size: .7rem;
	}
	.content{
		font-size: .4rem;
		color:#999;
	}
	.mar40{
		margin-top: 1.066667rem;
	}
</style>
<script type="text/javascript">
	export default{
		methods:{
			fetchData(){
				var this_=this;
				this.$http.get('http://localhost:8080/src/data/column.js').then(function(response){
					this_.newsArr=response.data
				}).catch(function(err){
					console.log(err)
				})
			}
		},
		mounted(){
			this.fetchData()
		},
		data(){
			return{
				newsArr:''
			}
		}
	}

</script>