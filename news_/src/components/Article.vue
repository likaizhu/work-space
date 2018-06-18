<template>
	<div id='article'>
		<div class="article_box">
			<div class="left" onclick='window.history.go(-1)'> < </div>
		</div>
		<template class="article_content">
			<div>{{articleData.title}}</div>
			<div>{{articleData.content}}</div>
			<div>{{articleData.time | normalTime}}</div>
			<div>{{articleData.name}}</div>
		</template>
	</div>
</template>
<script>
	export default{
		data(){
			return {
				articleData:{}
			}
		},
		mounted(){
			var id=this.$route.params.id;
			this.fetchData(id);

		},
		methods:{
			fetchData(id){
				var this_=this;
				this.$http.get('http://localhost:8080/src/data/article.js').then(function(res){
					this_.articleData=res.data[id-1];
					Object.assign(this_.articleData, {
						name:'likaizhu',
						tel:'15344503742'
					});//通过这种方式在数组或者对象中添加新的东西
					console.log(this_.articleData)
				}).catch(function(err){
					console.log(err)
				})
			}
		}
	}
</script>
<style type="text/css" media="screen" scope>
	.article_box{
		display: flex;
		display:-webkit-flex;
		height: 1.066667rem;
		line-height: 1.066667rem;
		background:rgba(0,0,0,0.5);
	}
	.left{
		padding-left: 0.8rem;
		color: #333;
		color:white;
	}
</style>
