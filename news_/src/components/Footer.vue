<template>
	<div id='footer'>
		<div>
			<div>
				<router-link to='/home' active-class="active_clo">首页</router-link>
				<router-link to='/follow' active-class="active_clo">发表</router-link>
				<router-link to='/user-info' active-class="active_clo">我的</router-link>
			</div>
		</div>
	</div>
</template>
<style type="text/css" media="screen">
	#footer{
		position: fixed;
		bottom: 0;
		width: 100%;
		font-size: .5rem;
		background: white
	}
	#footer div{
		width: 9.2rem;
		margin: auto
	}
	#footer div div{
		display: flex;
		justify-content: space-between;
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