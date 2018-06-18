import My from './components/My.vue'
import Cre from './components/Cre.vue'
import Register from './components/Register.vue' 
import Article from './components/Article.vue'
import Search from './components/Search.vue'
import BaiduSearch from './components/BaiduSearch.vue'
const Home = ()=> import('./components/News.vue')
const Column = ()=> import('./components/Column.vue')
const Follow = ()=> import('./components/Follow.vue')
export default[
	{
		path:'/',
		redirect:'/home'
	},
	{
		path:'*',
		redirect:'/home'
	},
	{
		path:'/home',
		component:Home
	},
	{
		path:'/follow',
		component:Follow
	},
	{
		path:'/column',
		component:Column
	},
	{
		path:'/article/:id',
		component:Article
	},
	{
		path:'/user-info',
		component:My
	},{
		path:'/register',
		component:Register
	},
	{
		path:'/search',
		component:Search
	},
	{
		path:'/baiduSearch',
		component:BaiduSearch
	}
]