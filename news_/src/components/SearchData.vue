<template>
	<div id='searchdata'>
		<ul>
			<li v-for='(item,key) in searchArr' @click='deleteItem(key)'>{{item}}</li>
		</ul>
	</div>
</template>
<script type="text/javascript">
	export default {
		data(){
			return {
				searchArr:this.searchData
			}
		},
		props:{
			searchData:Array
		},
		methods:{
			deleteItem(key){
				this.$emit('delete',key)
			}
		}
	}
</script>