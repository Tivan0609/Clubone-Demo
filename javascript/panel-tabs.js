
(function(){
// Tabs Widget	
	widget_tabs = function(){
		var tabObj = $(this);
		$(this).find(".tabs").find(".tab").each(function(index){			
			$(this).click(function(){
				showPanel($(this), tabObj, index);
			});			
        });
	}
	
	function showPanel(_tabs, _tabObj, _i){		
		_tabObj.find(".body").each(function(index){
			if(_i === index){
				_tabObj.find(".tabs").find(".tab").each(function(index){
					$(this).removeClass("selected"); //previous tabs.tab un-selected
				});
				
				_tabs.addClass("selected"); // tabs.tab selected
				$(this).addClass("selected"); // body selected
			}else{
				$(this).removeClass("selected"); // previous body un-selected				
			}
			if(_i !== 0){
				$(this).addClass("allRound");
			}else{
				$(this).removeClass("allRound");
			}
		});
	}
	
	$.fn.extend({tabs:widget_tabs});
}());