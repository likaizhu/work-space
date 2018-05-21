<template>
	<div id='map'>
		<div :style='color'>
			1111111
		</div>
	</div>
</template>
<script type="text/javascript">
	export default{
		data(){
			return {
				color:{
					color:"red",
					height:this.newsMap+'px'
				}
			}
		},
		props:{
			newsMap:String
		}
	}
</script>