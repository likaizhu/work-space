<template>
	<div>
		<div class="banner" id="b">
		    <ul>
		        <li><img class="sliderimg" src="src/assets/img/banner01.png" alt="" width="100%" ></li>
		        <li><img class="sliderimg" src="src/assets/img/banner02.png" alt="" width="100%" ></li>
		    </ul>
		</div>
	</div>
</template>
<script type="text/javascript">
	export default{
		mounted(){
		  this.banner()
		},
		methods:{
		    banner(){
		      //轮播图部分
		      	
		      	var index=0;
		      	var imgWid=$("body").width();
		      	var imgNum=$("#b ul li").length;
		      	$("#b img").width(imgWid+"px");
		      	$("#b img").height("5.333333rem");
		      	$("#b li").width(imgWid+"px");
		      	$("#b li").height("5.333333rem");
		      	$("#b ul").width(imgWid*imgNum);
		      	setInterval(star,3000);
		      	function star(){
		      		index++;
		      		if(index<imgNum){
		      			$("#b").animate({
		      				marginLeft:-imgWid*index+"px"	
		      				},2000);

		      		}else{
		      			index=0;
		      			$("#b").animate({
		      				marginLeft:"0px"
		      			},2000)
		      		}
		      	}

		    	
		     	// function imgReload(){
		     	//     var imgHeight = 0;
		     	//     var wtmp = $("body").width();
		     	//     console.log(typeof $(".top").css('marginLeft'))
		     	//     $("#b ul li").each(function(){
		     	//           $(this).css({width:wtmp + "px"});
		     	//       });
		     	//     $(".sliderimg").each(function(){
		     	//       $(this).css({width:wtmp + "px"});
		     	//       imgHeight = $(this).height('4.533333rem');
		     	//     });
		     	    
		     	//   }
		     	//   $(window).resize(function(){imgReload();});
		     	//   $(document).ready(function(e) {
		     	//     imgReload();
		     	//       var unslider = $('#b').unslider({
		     	//       dots: false,
		     	//       fluid: true
		     	//     }),
		     	//     data = unslider.data('unslider');
		     	//     $('.unslider-arrow').click(function() {
		     	//           var fn = this.className.split(' ')[1];
		     	//           data[fn]();
		     	//       });
		     	//   });
		     	// }
		  	}	

		}
	}
</script>
<style type="text/css" media="screen">
	#b ul{
		overflow: hidden;
	}
	#b li{
		float: left;
	}
	.banner{
		overflow: hidden;
	}	
</style>