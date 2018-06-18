<template>
	<div id='chacao'>
		<slot name="header"></slot>
		<div>我是插槽内容</div>
		<slot :person="person" v-for="person of chaCaoData">
			
		</slot>
	</div>
</template>
<style type="text/css" media="screen">
	#chacao{
		border-top: 1px dashed black
	}
</style>
<script type="text/javascript">
	export default {
		data(){
			return {
				chaCaoData:[
					{
						name:'likaizhu',
						age:24
					},
					{
						name:'zhangshaoqi',
						age:22
					}
				]
			}
		}
	}
</script>