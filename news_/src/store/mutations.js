import getters from './getters'
const state={
	header:true,
	loading:false,
	menu:true,
	tuceng:true
}

const mutations={
	show(state){
		state.header=true
	},
	hide(state){
		state.header=false
	},
	showLoading(state){
		state.loading=true
	},
	hideLoading(state){
		state.loading=false
	},
	hideMenu(state){
		state.menu=false;
	},
	showMenu(state){
		state.menu=true;
	},
	hideTuCeng(state){
		state.tuceng=false;
	}
}

export default{
	state,
	getters,
	mutations
}