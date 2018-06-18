<template id='search'>
	<div>
		<input type="text" v-model='innerput' placeholder="请添加数据" @keyup.enter='add'>
		<div>
			<SearchData :search-data='arrList' 
						@delete='hindleDelete'
						:person-message="person"
			></SearchData>
			<SearchData2></SearchData2>
		</div>
	</div>
</template>
<script type="text/javascript">
	import SearchData from './SearchData.vue'
	import SearchData2 from './SearchData2.vue'
	export default {
		data() {
			return {
				innerput: '',
				arrList: [],
				person:{
					name:'likaizhu',
					age:24
				}
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
			SearchData,
			SearchData2
		}
	}
</script>
<style type="text/css" media="screen" scoped>
</style>