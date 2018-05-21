<template>
	<div id='my'>
		<div class="bg_grow">
			<div class="pic_face"><img src="../assets/img/pic_face.png" height="96" width="94" alt=""></div>
			<div class="regis">
				<router-link class='font16' to='/register'>登陆/注册</router-link>
			</div>
			<div class="box font16">
				<div class="left">
					<div>0</div>
					<div>关注</div>
				</div>
				<div class="right">
					<div>0</div>
					<div>粉丝</div>
				</div>
			</div>
		</div>
		<div class="select font16">
			<div>
				<span>公开博文</span><span> > </span>
			</div>
			<div>
				<span>秘密博文</span><span> > </span>
			</div>
			<div>
				<span>草稿箱</span><span> > </span>
			</div>
			<div>
				<span>收藏夹</span><span> > </span>
			</div>
		</div>
	</div>
</template>
<script type="text/javascript">
	// export default{
	// 	mounted(){
	// 		this.$http.get('').then((response)=>{

	// 		},(response)=>{

	// 		})
	// 	},
	// 	data(){
	// 		return{
	// 			myArr:''
	// 		}
	// 	}
	// }
</script>
<style type="text/css" media="screen" scoped>
	a{
		color:#333;
	}
	#my{
		color:#333;
	}
	.bg_grow{
		/*background:gray; */
	}
	.font16{
		font-size: 0.426667rem;
	}
	.regis{
		text-align: center;
	}
	.pic_face{
		width: 2.506667rem;
		height: 2.56rem;
		margin:auto;
		padding-top: 1.066667rem;
	}
	.box{
		display: flex;
	}
	.box > div{
		width: 50%;
		text-align: center;
	}
	.select{
		color:#333;
		margin-top: 0.533333rem
	}
	.select > div{
		height: 1.066667rem;
		line-height: 1.066667rem;
		background-color: white;
		border-bottom: 1px solid #999;
		padding: 0 0.8rem 0 0.8rem;
		display: flex;
		justify-content: space-between;
	}
</style>