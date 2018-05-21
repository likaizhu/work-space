<template>
	<div id='menuNav'>
		<div class="border">
			<div class="box">
				<router-link to='/home' active-class='active_clo'>首页</router-link>
				<router-link to='/follow' active-class='active_clo'>关注</router-link>
				<router-link to='/column' active-class='active_clo'>栏目</router-link>
			</div>
		</div>

	</div>
</template>
<style type="text/css" media="screen" scoped>
	.border{
		font-size: .5rem;
		background: white;
	}
	.box{
		display: flex;
		justify-content: space-between;
		width: 9.2rem;
		margin: auto;
	}

	a{
		text-decoration: none;
		color:#666;
		cursor: pointer;
	}
	.active_clo{
		color:red;
	}
</style>