<template id='search'>
	<div>
		<input type="text" v-model='innerput' placeholder="请添加数据" @keyup.enter='add'>
		<div>
			<SearchData :search-data='arrList' @delete='hindleDelete'></SearchData>
		</div>
	</div>
</template>
<script type="text/javascript">
	import SearchData from './SearchData.vue'
	export default {
		data() {
			return {
				innerput: '',
				arrList: []
			}
		},
		methods:{
			add(){
				this.arrList.push(this.innerput);
				this.innerput = '';
			},
			hindleDelete(key){
				this.arrList.splice(key,1)
			}
		},
		mounted(){

		},
		components:{
			SearchData
		}
	}
</script>
<style type="text/css" media="screen" scoped>
</style>