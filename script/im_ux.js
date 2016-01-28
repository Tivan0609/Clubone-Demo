// JavaScript Document

var imVar = {};

(function(){
	
	// menu tabs
	imVar.tabs = function(){
		var _showTab = 0;
		var $defaultTab = $(this).find('li').eq(_showTab).addClass('selected');
		$($defaultTab.find('a').attr('href')).siblings().hide();		
		
		$(this).find('li').click(function() {		
			var clickTab = $(this).find('a').attr('href');
			$(this).addClass('selected').siblings('.selected').removeClass('selected');		
			$(clickTab).stop(false, true).fadeIn().siblings().hide();			
			
			$(window).trigger("resize");

			return false;
		})		
	}	
	
	// 清單子選單
	imVar.listSubmenu = function(){		
		$(this).find('.im-item').each(function(){
			$(this).click(function(){
				$(this).css("background", "#484743").find('.im-itemSubmenu').toggle();				
				$(this).siblings().css("background", "#2a2924").find('.im-itemSubmenu').hide();
			});
			
		});
	}
	
	// 內容器動態伸展至 parrent bottom
	imVar.alignToParentBottom = function(){	
		var _parentHeight = $(".playContent").innerHeight();
		var _height = _parentHeight - $(".im-tabsBar").outerHeight(true) - $(".im-listHeader").outerHeight(true) - $(".im-tabsDiv").css("padding-top").replace(/[^-\d\.]/g, '');
		$(this).css("height", _height + "px");
		$(this).css("overflow-y", "auto");
		$(this).css("overflow-x", "hidden");
		
		// 針對訊息內容(對話框父容器)計算高度至 parent bottom
		if($(this).attr('id') == "msg_detail"){
			_parentHeight = $(this).innerHeight();
			_height = _parentHeight - $(this).find(".im-item").outerHeight(true) - $(this).find('#imMessage').css("padding-top").replace(/[^-\d\.]/g, '') -10 - 80;
			
			$(this).find('#imMessage').css({
				"height": _height + "px"
			});
		}
	}
	
}());

$.fn.extend({
	widget_tab:imVar.tabs,
	loadSubmenu:imVar.listSubmenu,
	alignToParentBottom:imVar.alignToParentBottom
});