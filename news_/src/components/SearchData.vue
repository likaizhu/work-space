<template>
	<div id='searchdata'>
		<ul>
			<li v-for='(item,key) in searchArr' @click='deleteItem(key)'>{{item}}</li>
		</ul>
		<div>{{personMessage.name}}==={{personMessage.age}}<button @click="copy">复制</button></div>

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
			searchData:Array,
			personMessage:Object
		},
		methods:{
			deleteItem(key){
				this.$emit('delete',key)
			},
			copy(){
				this.bus.$emit('copyData',this.personMessage);
			}
		}
	}
</script>