//CUSTOM JS

//RESPONSIVE TAB JS STARTS
//	<!--Plug-in Initialisation-->
    $(document).ready(function() {
		
		var winHeight = $( window ).height();
		
		$(".fn_winHeight").css({'height': (winHeight - 76) + 'px'});
		
        //Horizontal Tab
        $('#parentHorizontalTab').easyResponsiveTabs({
            type: 'default', //Types: default, vertical, accordion
            width: 'auto', //auto or any width like 600px
            fit: true, // 100% fit in a container
            tabidentify: 'hor_1', // The tab groups identifier
            activate: function(event) { // Callback function if tab is switched
                var $tab = $(this);
                var $info = $('#nested-tabInfo');
                var $name = $('span', $info);
                $name.text($tab.text());
                $info.show();
            }
        });
		
		$('#parentHorizontalTab1').easyResponsiveTabs({
            type: 'default', //Types: default, vertical, accordion
            width: 'auto', //auto or any width like 600px
            fit: true, // 100% fit in a container
            tabidentify: 'hor_1', // The tab groups identifier
            activate: function(event) { // Callback function if tab is switched
                var $tab = $(this);
                var $info = $('#nested-tabInfo');
                var $name = $('span', $info);
                $name.text($tab.text());
                $info.show();
            }
        });
     
    });
	
	
//RESPONSIVE TAB JS ENDS

$(document).ready(function() {
	
	 $("#tcr_carousal").owlCarousel({
		  navigation : false,
		  slideSpeed : 300,
		  paginationSpeed : 400,
		  autoHeight : true,
		  singleItem:true,
		  autoPlay:true,
		  navigationText : ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>']
});

$("#industry-expertise").owlCarousel({
		  navigation : false,
		  autoPlay:true,
		  slideSpeed : 300,
		  paginationSpeed : 400,
		  autoHeight : false,
		  singleItem:true,
		  navigationText : ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>']
});

	 $("#enterprise_carousal").owlCarousel({
		  navigation : true,
		  slideSpeed : 300,
		  paginationSpeed : 400,
		  autoHeight : true,
		  singleItem:true,
		  navigationText : ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>']
	  });
  
	  $("#paymenloyalty_carousal").owlCarousel({
		  navigation : true,
		  slideSpeed : 300,
		  paginationSpeed : 400,
		  autoHeight : true,
		  singleItem:true,
		  navigationText : ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>']
	  });
	  
});

// GOT TO TOP /
 $(function()
 {
  $.fn.scrollToTop=function(){
   $("#toTop").hide().removeAttr("href");
   if($(window).scrollTop()!="0"){
    $(this).fadeIn("slow")
   }
   var scrollDiv=$(this);
   $(window).scroll(function(){
    if($(window).scrollTop()=="0"){
     $(scrollDiv).fadeOut("slow")
    }else{
     $(scrollDiv).fadeIn("slow")
    }
   });
   $(this).click(function(){
    $("html, body").animate({scrollTop:0},"slow");
   });
  }
 });
 $(function() {
  $("#toTop, #toFavourites").scrollToTop();
});


// POP UP /
$(document).ready(function(){
		
		$( ".service_segment_box" ).click(function() {
			$("body").css("overflow","hidden");
		  $( ".popup_overlay" ).fadeIn();
		  var showPopupContent = $(this).attr('id');
          //alert(('.'+showPopupContent+'_detail'));
		  $( ".popup_container" ).animate({bottom: "0"}, 500, function() {});
		  $('.popup_content').hide();
		  $('.'+showPopupContent+'_detail').fadeIn();
		});
				
		$(".popup_overlay").hide();
		
		var active = 0;
    	var numberOfSlides = $('div.popup_content').length; // number of divs...
		
		showElement(1);
        $(".next").click(function(){
            if (active < numberOfSlides) showElement(active + 1);
        });
        $(".prev").click(function(){
            if (active > 1) showElement(active - 1);
        });
		
		function showElement(id) {
			$('div.popup_content').hide();
			$('#' + id).fadeIn();
			active = id;
    	}
		
		$(".down_button").click(function(){
			$("body").css("overflow","auto");
			$(".popup_overlay").fadeOut();
			$('.popup_content').fadeOut();
			$( ".popup_container" ).animate({bottom: "-500"}, 500, function() {});
		});
	});
        
 $(function () {
        $('#supported').text('Supported/allowed: ' + !!screenfull.enabled);

        if (!screenfull.enabled) {
            return false;
        }
        $('#toggle').click(function () {
            screenfull.toggle($('#container')[0]);
        });
    });       

