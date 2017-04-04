app = angular.module('myApp', []); 
app.controller('signupForm', ['$scope',function signupForm($scope) {
    $scope.signupValidate = function() {
		showTab('#aboutyouWrap');
		showSavedMsg();
	};              
}]);
app.controller('aboutyouForm', ['$scope',function aboutyouForm($scope) {        
    $scope.aboutyouValidate = function() {
		showTab('#yourworkWrap');
		showSavedMsg();
	};
	       
}]);
app.controller('yourworkForm', ['$scope',function yourworkForm($scope) {        
    $scope.yourworkValidate = function() {
		showTab('#whyyouWrap');
		showSavedMsg();
	};              
}]);                                                  
app.controller('whyyouForm', ['$scope',function whyyouForm($scope) {        
    $scope.whyyouValidate = function() {
		showTab('#proposerWrap');
		showSavedMsg();
	};              
}]);
app.controller('proposerForm', ['$scope',function proposerForm($scope) {        
    $scope.proposerValidate = function() {
		showTab('#paymentWrap');
		showSavedMsg();
	};              
}]);
app.controller('paymentForm', ['$scope',function paymentForm($scope) {        
    $scope.paymentValidate = function() {
		showTab('#confirmationWrap');
		$(".tabBreadcrumb").removeClass('active');
	};              
}]);



var mobileWidth = 767;
var oldTabId;
var PrevTabId;

$( document ).ready(function() {
	oldTabId = '#'+$('.tabContainerWrap .tabWrap:first-child').attr('id');
    $('.tabContainerWrap').css({'height':$('.tabContainerWrap .tabWrap:first-child').outerHeight(true)});
	$('.tabContainerWrap .tabWrap').css({'top':$('.tabContainerWrap').height()+100});
	
	
});
var stickyName;
//$( window ).load(function() {
$( document ).ready(function() {	
	
	setMainPages();
		
	$('.tabBreadcrumb li, .restaurantMenu li').append('<span class="crumbMask"></span>');
	
	scrollFunctionSticky();
	$('html, body').stop().animate({
		scrollTop:0
	}, 500,function(){
		$(".pageLoader").fadeOut(1000);
	});
	
});
$( window ).resize(function() {
	
	setMainPages()
	
	var setH = $(".continueMsg").height()/2;
	var setW = $(".continueMsg").width()/2;
	$(".continueMsg").css({'margin-top':-setH,'margin-left':-setW});
	
	scrollFunctionSticky();
});
$( window ).scroll(function() {
	scrollFunctionSticky();
});

function scrollFunctionSticky(){
	if($(window).width() >= mobileWidth){
		if(stickyName){
			if($( window ).scrollTop() > stickyName.top){
				$('.stickyRestaurantName').addClass('stickyName');	
			}else {
				$('.stickyRestaurantName').removeClass('stickyName');	
			}
		}
		if($( window ).scrollTop() >= $(window).height()){
			$('footer').addClass('active');
		}else {
			$('footer').removeClass('active');
		}
		if($( window ).scrollTop() >= ($(window).height()*2)){
			if(!$('.restaurantMenu').hasClass('active')){
				$('.restaurantMenu').addClass('active');
				$('.restaurantMenu li .crumbMask').css({'width':'100%'});
				$('.restaurantMenu li').each(function(index, element) {
					$(this).find('.crumbMask').delay(index*250).animate({
						width: 0,
					}, 700, function() {
					// Animation complete.
					});		
				});
			}
		}else {
			$('.restaurantMenu').removeClass('active');
		}
		
		var setTop = $(window).scrollTop()-($(window).height()/4);
		$(".setRestaurantMenu").each(function(index, element) {
			if(setTop >= ($(this).attr('offsettop'))){
				$('.restaurantMenu li').removeClass('active');
				$('.restaurantMenu li').eq( $(this).attr('rel') ).addClass('active');
			}
		});
	}
	if($( window ).scrollTop() >= $(window).height()){
		$('.landingPage').css({'opacity':0});
	}else {
		$('.landingPage').css({'opacity':1});
	}
	
}

function setMainPages(){
	$('.stickyRestaurantName').removeClass('stickyName');
	$('.pages, .tabWrap, .tabContainerWrap, .pageWrap').css({'min-height':$(window).height()});
	$('.tabContainerWrap').css({'height':$(oldTabId).outerHeight(true)});
	if($(window).width() < mobileWidth){
		$('footer').css({'min-height':$(window).height()});
	}
	
	$('.secondPage').css({'margin-top':$(window).height()});
	
	stickyName = $('.stickyRestaurantName').offset();
	
	if($(window).width() >= mobileWidth){
		if($( window ).scrollTop() > stickyName.top){
			$('.stickyRestaurantName').addClass('stickyName');	
		}else {
			$('.stickyRestaurantName').removeClass('stickyName');	
		}
		
		$('.restaurantMenu').css({'margin-top':-($('.restaurantMenu').height()/2)});
	}
	$('.tabBreadcrumb').css({'margin-top':-($('.tabBreadcrumb').height()/2)});
	
	if($(window).width() < mobileWidth){
		$('.restaurantMenuMobile li').each(function(index, element) {
			$('.restaurantMenuMobile').css({'width':$('.restaurantMenuMobile').width()+$(this).outerWidth(true)});
		});
		device_width = $('.restaurantDetailMobileOuterWrap').width();
		$('.restaurantDetailMobileWrap .setRestaurantMenu').css({'width':$('.restaurantDetailMobileOuterWrap').width()})
		$('.restaurantDetailMobileWrap .setRestaurantMenu').each(function(index, element) {
			$('.restaurantDetailMobileWrap').css({'width':$('.restaurantDetailMobileWrap').width()+$(this).outerWidth(true)});
			
		});
		scrollImages_1(device_width * currentImg, speed);
		$('.restaurantDetailMobileWrap').css({'height':$('.restaurantDetailMobileWrap .setRestaurantMenu').eq(currentImg).outerHeight(true)});
	}
}

$('.restaurantMenu li').click(function(){
	if(!$(this).hasClass('active')){
		var scrollToPosition = $($(this).attr('rel')).offset();
		$('html, body').stop().animate({
			scrollTop:scrollToPosition.top,
		}, 500,function(){
		});
		
	}
});
$('.setRestaurantMenu').each(function(index, element) {
	$(this).attr('offsettop',$(this).offset().top).attr('rel',index);    
});



$('.applyMembership').click(function(){
	showMask();
	$('.tabBreadcrumb li .crumbMask').css({'width':'100%'});
	$('.tabContainerWrap .tabWrap:first-child .tabClose, .tabContainerWrap .tabWrap:first-child .backBtn').fadeOut();
	$('html, body').stop().animate({
		scrollTop:0,
	}, 500,function(){
		$('.pages, footer').hide();
		$('.tabContainerWrap').show().css({'margin-top':$(window).height()}).animate({
			marginTop:0,
		}, 1000,function(){
			$('.tabBreadcrumb').addClass('active');
			$('.tabBreadcrumb li').each(function(index, element) {
				$(this).find('.crumbMask').delay(index*250).animate({
					width: 0,
				}, 700, function() {
				// Animation complete.
				});		
			});
			$('.tabContainerWrap .tabWrap:first-child .tabClose, .tabContainerWrap .tabWrap:first-child .backBtn').fadeIn();
			hideMask();
		});
		$('.tabContainerWrap').css({'height':$(oldTabId).outerHeight(true)});
		$('.tabWrap').each(function(index, element) {
			if(!$(this).hasClass('active')){
				$(this).css({'top':$('.tabContainerWrap').height()+100});
			}	
		});
		
	});	
	
});
$('.membershipType').click(function(){
	$('.membershipType').removeClass('active');
	$(this).addClass('active');
	$("#selectetmembershipType").html($(this).find('.membershipTypeDetails').html());
});
$("input[type=text], input[type=email], input[type=password]").focus(function() {
	$(this).addClass('activefield');
});
$("input[type=text], input[type=email], input[type=password]").blur(function() {
	$(this).removeClass('activefield');
});

$('.checkBoxWrap').click(function(){
	if($(this).find('input').is(":checked")){		
		$(this).addClass('active');		
	}else {
		$(this).removeClass('active');		
	}
});

$(".backBtn, .tabClose").click(function(){
	if($(this).hasClass('alertMsg')){
		showContinueMsgPopup();
	}else {
		hideTab($(this).attr('backTab'), $(this).attr('oldId'))	
	}
});
$(".nextPageBtn").click(function(event){
	event.preventDefault();
	showMask();
	$('.pageWrap').css({'min-height':$(window).height()});
	$($(this).attr('href')).addClass('active').css({'top':$(window).height()+10}).animate({
		top:0
	}, 1000,function(){
		$('html, body').css({'overflow-y':'hidden'});
		hideMask();
	});
});
$('.pageClose').click(function(event){
	showMask();
	$($(this).attr('pageid')).animate({
		top:$(window).height()+10,
	}, 1000,function(){
		$('html, body').css({'overflow-y':'visible'});
		$(this).removeClass('active')	
		hideMask();
	});
	
});
$('.okBtn').click(function(event){
	$(".pageLoader").fadeIn(1000,function(){
		location.reload();
	});
});
function showContinueMsgPopup(){
	$(".continueMsgPopup").fadeIn();
	var setH = $(".continueMsg").height()/2;
	var setW = $(".continueMsg").width()/2;
	$(".continueMsg").css({'margin-top':-setH,'margin-left':-setW});
	
}
$('.continueLink').click(function(){
	$(".continueMsgPopup").fadeOut();
});
$('.leaveLink').click(function(){
	$(".pageLoader").fadeIn(1000,function(){
		location.reload();
	});
});

function showTab(tabId){
	showMask();
	$('html, body').stop().animate({
		scrollTop:0
	}, 500,function(){
		$(tabId+' .tabClose, '+tabId+' .backBtn').fadeOut();
		$(tabId).addClass('active');
	
		$(tabId).animate({
			top: 0,
		}, 1000, function() {
			$(".tabContainerWrap").css({'height':$(tabId).outerHeight(true)});
			$('.tabContainerWrap .tabWrap').each(function(index, element) {
				if(!$(this).hasClass('active')){
					$(this).css({'top':$('.tabContainerWrap').height()+100});           	 
				}
			});
		// Animation complete.
			$('.tabBreadcrumb li').removeClass('active');
			$('.tabBreadcrumb li').eq($(this).attr('rel')).addClass('active');
			$(tabId+' .tabClose, '+tabId+' .backBtn').fadeIn();
			oldTabId = tabId;
			hideMask();
			
		});		
	});
}
function hideTab(tabId, oldId){
	showMask();
	$('html, body').stop().animate({
		scrollTop:0
	}, 500,function(){
		if(oldId == 'home'){
	
			$(tabId+' .tabClose, '+tabId+' .backBtn').fadeOut();		
			$('.pages, footer').hide();
			$('.tabBreadcrumb').removeClass('active');
			$('.tabContainerWrap').animate({
				marginTop:$(window).height(),
			}, 1000,function(){
				$(this).hide();
				$('.pages, footer').show();	
				hideMask();		
			});
			
			
		}else {
			$(".tabContainerWrap").css({'height':$(oldId).outerHeight(true)});
			$(tabId+' .tabClose, '+tabId+' .backBtn').fadeOut();
			$(tabId).animate({
				top: $(".tabContainerWrap").outerHeight(true)+100,
			}, 1000, function() {
				$(tabId).removeClass('active');
				$('.tabContainerWrap .tabWrap').each(function(index, element) {
					if(!$(this).hasClass('active')){
						$(this).css({'top':$('.tabContainerWrap').height()+100});           	 
					}
				});
				$('.tabBreadcrumb li').removeClass('active');
				$('.tabBreadcrumb li').eq($(this).attr('rel')-1).addClass('active');
			// Animation complete.
				oldTabId = oldId;
				hideMask();
			});		
		}
	});		
}
function showSavedMsg(){
	$(".saveMsg").delay(1500).fadeIn().delay(3500).fadeOut();
}
$(".saveMsgClose").click(function(e) {
    $(".saveMsg").fadeOut();
});

function showMask(){
	$('.pageMask').show();	
}
function hideMask(){
	$('.pageMask').hide();	
}
function showHideMask(tabId){
	showMask();
	setTimeout(function(){ 
		$(oldTabId).removeClass('active');
		hideMask();
		$(oldTabId).css({'top':$('.tabContainerWrap').height(),'position':'absolute'});
		oldTabId = tabId;	 
	}, 3000);
}

var movePosition = 0;
var oldMovePosition = 0;

var device_width = $('.restaurantDetailMobileOuterWrap').width();

var IMG_WIDTH = 100;
var currentImg = 0;
var maxImages = 5;
var speed = 500;

var imgs;
var imgs_1;

var swipeOptions = {
	triggerOnTouchEnd: true,
	swipeStatus: swipeStatus,
	allowPageScroll: "vertical",
	threshold: 75
};

$(function () {
	imgs = $("#restaurantMenuMobile");
	imgs.swipe(swipeOptions);

	imgs_1 = $('.restaurantDetailMobileWrap')
	//imgs_1.swipe(swipeOptions);
	
	
	if($(window).width() < mobileWidth){
		oldMovePosition = ($("#restaurantMenuMobile li:first-child").outerWidth(true)/2);
		scrollImages(oldMovePosition, speed);
	}
});


/**
 * Catch each phase of the swipe.
 * move : we drag the div
 * cancel : we animate back to where we were
 * end : we animate to the next image
 */
function swipeStatus(event, phase, direction, distance) {
	//If we are moving before swipe, and we are going L or R in X mode, or U or D in Y mode then drag.
	if (phase == "move" && (direction == "left" || direction == "right")) {
		var duration = 0;

		if (direction == "left") {
			scrollImages((oldMovePosition) + distance, duration);
			//scrollImages_1((device_width * currentImg) + (distance+(device_width*100)/$("#restaurantMenuMobile li").eq(currentImg).outerWidth(true)), speed);
			scrollImages_1((device_width * currentImg) + (distance+(device_width/$("#restaurantMenuMobile li").eq(currentImg).outerWidth(true))*100), speed);
		} else if (direction == "right") {
			scrollImages((oldMovePosition) - distance, duration);
			//scrollImages_1((device_width * currentImg) - (distance+(device_width*100)/$("#restaurantMenuMobile li").eq(currentImg).outerWidth(true)), speed);
			scrollImages_1((device_width * currentImg) - (distance+(device_width/$("#restaurantMenuMobile li").eq(currentImg).outerWidth(true))*100), speed);
		}

	} else if (phase == "cancel") {
		scrollImages(oldMovePosition, speed);
		scrollImages_1(device_width * currentImg, speed);
	} else if (phase == "end") {
		if (direction == "right") {
			previousImage();
		} else if (direction == "left") {
			nextImage();
		}
		$('.restaurantDetailMobileWrap').css({'height':$('.restaurantDetailMobileWrap .setRestaurantMenu').eq(currentImg).outerHeight(true)});
	}
}

function previousImage() {
	currentImg = Math.max(currentImg - 1, 0);
	//scrollImages(IMG_WIDTH * currentImg, speed);
	movePosition = 0;
	$("#restaurantMenuMobile li").each(function(index, element) {
        if(index < currentImg){
			movePosition = movePosition+$(this).outerWidth(true);
		}
		if(index == currentImg){
			movePosition = movePosition+($(this).outerWidth(true)/2);
		}
    });
	$("#restaurantMenuMobile li").removeClass('active');
	$("#restaurantMenuMobile li").eq(currentImg).addClass('active');
	
	scrollImages(movePosition, speed);
	oldMovePosition = movePosition;
	
	scrollImages_1(device_width * currentImg, speed);
//	console.log(currentImg)
}

function nextImage() {
	currentImg = Math.min(currentImg + 1, maxImages - 1);
	//scrollImages(IMG_WIDTH * currentImg, speed);
	movePosition = 0;
	$("#restaurantMenuMobile li").each(function(index, element) {
        if(index < currentImg){
			movePosition = movePosition+$(this).outerWidth(true);
		}
		if(index == currentImg){
			movePosition = movePosition+($(this).outerWidth(true)/2);
		}
    });
	$("#restaurantMenuMobile li").removeClass('active');
	$("#restaurantMenuMobile li").eq(currentImg).addClass('active');
	scrollImages(movePosition, speed);
	oldMovePosition = movePosition;
	
	scrollImages_1(device_width * currentImg, speed);
	//console.log(movePosition);
}

/**
 * Manually update the position of the imgs on drag
 */
function scrollImages(distance, duration) {
	imgs.css("transition-duration", (duration / 1000).toFixed(1) + "s");
	
	//inverse the number we set in the css
	var value = (distance < 0 ? "" : "-") + Math.abs(distance).toString();
	imgs.css("transform", "translate(" + value + "px,0)");
}
function scrollImages_1(distance, duration) {
	imgs_1.css("transition-duration", (duration / 1000).toFixed(1) + "s");

	//inverse the number we set in the css
	var value = (distance < 0 ? "" : "-") + Math.abs(distance).toString();
	imgs_1.css("transform", "translate(" + value + "px,0)");
}
