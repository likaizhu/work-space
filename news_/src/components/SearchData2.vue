<template>
	<div id='searchData2'>
		{{dataMsg.name}}==={{dataMsg.age}}
	</div>
</template>
<script type="text/javascript">
	export default {
		data(){
			return {
				dataMsg:{}
			}
		},
		mounted(){
			var this_=this;
			this.bus.$on('copyData',function(msg){
				this_.dataMsg=msg;
				console.log(this_.dataMsg)
			})
		}
	}
</script>