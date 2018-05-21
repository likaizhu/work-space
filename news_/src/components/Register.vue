<template>
	<div id='register'>
		<!-- <div class="register_draw">
			<span class="title">用户名：</span>
			<span class="content_input"><input type="text" name="" value="请输入用户名"></span>
		</div>
		<div class="register_draw">
			<span class="title">密码：</span>
			<span class="content_input"><input type="password" name="" value="请输入密码"></span>
		</div> -->
		<input type="button" value='按钮' class="btn" @click='fade'>
		<transition name='chuxian'>
			<div class="hezi" v-show='show'></div>
		</transition>
	</div>
</template>
<style type="text/css" media="screen" scoped>
	.register_draw{
		width: 9.2rem;
		margin:auto;
		padding: 0.533333rem 0 0.533333rem 0;
	}
	#register{
		background: gray;
	}
	.title{
		font-size: 0.533333rem;
		width: 2.133333rem;
		display: inline-block;
	}
	.content_input input{
		height: 0.933333rem;
		line-height: 0.933333rem;
		display: inline-block;
		background: #f0f0f0;border:none;
		font-size: 0.533333rem;
		color:#666;
		outline: none;
	}
	.hezi{
		width: 4.0rem;
		height: 4.0rem;
		background: white;
		margin:auto;
		margin-top: 1.333333rem;
		transition: .5s all ease;
		opacity: 1;
	}
	.btn{
		width: 4.0rem;height: 0.933333rem;line-height: 0.933333rem;font-size: 0.533333rem;background: white
	}
	.chuxian-enter-active, .chuxian-leave-active{
		transition: .5s all ease;
	}
	.chuxian-enter{
		opacity: 0;
	}
	.chuxian-enter-active{
		opacity: 0;
	}
	.chuxian-leave{
		opacity: 1;
	}
	.chuxian-leave-active{
		opacity: 0
	}
</style>
<script type="text/javascript">
	export default{
		data(){
			return {
				show:true
			}
		},
		methods:{
			fade(){
				this.show=!this.show
			}
		}
	}
</script>