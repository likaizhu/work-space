<template>
	<div id='baiduSearch'>
		<label v-if="appear == 'a'">
			百度搜索功能：
			<input type="text" v-model="searchValue">
		</label>
		<label v-else>
			百度搜索功能1：
			<input type="text" v-model="searchValue">
		</label>
		<ul>
			<li v-for="item in resultArr">{{item}}</li>
		</ul>
		<template v-if="dis">
			<label>用户名：<input></label>
		</template>
		<template v-else>
			<label>邮箱：<input></label>
		</template>
		<br>
		<input type="button" value="改变" @click="change">
	</div>
</template>
<script type="text/javascript">
	export default {
		data(){
			return {
				resultArr:[],
				appear:'a',
				dis:true,
				inputValue:''
			}
		},
		methods:{
			change(){
				this.dis=!this.dis;
			}
		},
		computed:{
			searchValue:{
				get(){
					return this.inputValue
				},
				set(value){
					var this_=this;
					this.$http.get("/api/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd="+value).then(function(response){
							var star=response.data.indexOf('[');
							var end=response.data.indexOf(']');
							var str=response.data.substring(star,end+1);
							this_.resultArr=JSON.parse(str);
							this_.inputValue=value;
							console.log(this_.resultArr)

					}).catch(function(err){
						console.log(err)
					})
				}
			}
		}
	}
</script>
<style type="text/css" media="screen" scoped>
	label{
		font-size: 0.48rem
	}
</style>