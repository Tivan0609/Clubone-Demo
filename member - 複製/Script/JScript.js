$(function(){
	$('.abgne-yahoo-carousel').each(function(){
		// 先取得相關的元素及寬度等資料
		var $this = $(this), 
			$page = $this.find('.page'), 
			$btn = $this.find('.btnt'), 
			_frameWidth = $this.find('.frame_rank').width(), 
			$carousel = $this.find('ul'), 
			$items = $carousel.find('li'), 
			_itemLength = $items.length, 
			_set = Math.ceil(_frameWidth / $items.outerWidth(true)), 
			_count = Math.ceil(_itemLength / _set), 
			_width = _set * $items.outerWidth(true) * -1, 
			_speed = 400, _opacity = 0.75, _index = 0;
 
		// 用來顯示目前已顯示及總資料筆數資訊
		$page.html('1 - ' + (_set < _itemLength ? _set : _itemLength) + ' / ' + _itemLength);
 

 
		// 當按了上下頁的按鈕時
		$btn.find('.prev, .next').click(function(e){
			// 計算要顯示第幾組
			_index = Math.floor((e.target.className == 'prev' ? _index - 1 + _count : _index + 1) % _count);
			var _lastNum = _set * (_index + 1);
			$page.html((_set * _index + 1) + ' - ' + (_lastNum < _itemLength ? _lastNum : _itemLength) + ' / ' + _itemLength);
 
			// 進行動畫
			$carousel.stop().animate({
				left: _index * _width
			}, _speed);
 
			e.preventDefault();
		}).focus(function(){
			this.blur();
		});
	})
});

$(function(){
     // SyntaxHighlighter.all();
    });
    $(window).load(function(){
      $('.flexslider').flexslider({
        animation: "slide",
        start: function(slider){
          $('body').removeClass('loading');
        }
      });
    });

function MM_swapImgRestore() { //v3.0
  var i,x,a=document.MM_sr; for(i=0;a&&i<a.length&&(x=a[i])&&x.oSrc;i++) x.src=x.oSrc;
}
function MM_preloadImages() { //v3.0
  var d=document; if(d.images){ if(!d.MM_p) d.MM_p=new Array();
    var i,j=d.MM_p.length,a=MM_preloadImages.arguments; for(i=0; i<a.length; i++)
    if (a[i].indexOf("#")!=0){ d.MM_p[j]=new Image; d.MM_p[j++].src=a[i];}}
}

function MM_findObj(n, d) { //v4.01
  var p,i,x;  if(!d) d=document; if((p=n.indexOf("?"))>0&&parent.frames.length) {
    d=parent.frames[n.substring(p+1)].document; n=n.substring(0,p);}
  if(!(x=d[n])&&d.all) x=d.all[n]; for (i=0;!x&&i<d.forms.length;i++) x=d.forms[i][n];
  for(i=0;!x&&d.layers&&i<d.layers.length;i++) x=MM_findObj(n,d.layers[i].document);
  if(!x && d.getElementById) x=d.getElementById(n); return x;
}

function MM_swapImage() { //v3.0
  var i,j=0,x,a=MM_swapImage.arguments; document.MM_sr=new Array; for(i=0;i<(a.length-2);i+=3)
   if ((x=MM_findObj(a[i]))!=null){document.MM_sr[j++]=x; if(!x.oSrc) x.oSrc=x.src; x.src=a[i+2];}
}

function MM_jumpMenu(targ,selObj,restore){ //v3.0
  eval(targ+".location='"+selObj.options[selObj.selectedIndex].value+"'");
  if (restore) selObj.selectedIndex=0;
}

$(function(){
	$('.datetime-carousel').each(function(){
		// 先取得相關的元素及寬度等資料
		var $this = $(this), 
			$page = $this.find('.page_date'), 
			$btn = $this.find('.btnt_s'), 
			_frameWidth = $this.find('.datetime').width(), 
			$carousel = $this.find('ul'), 
			$items = $carousel.find('li'), 
			_itemLength = $items.length, 
			_set = Math.ceil(_frameWidth / $items.outerWidth(true)), 
			_count = Math.ceil(_itemLength / _set), 
			_width = _set * $items.outerWidth(true) * -1, 
			_speed = 400, _opacity = 0.75, _index = 0;
 
		// 用來顯示目前已顯示及總資料筆數資訊
		$page.html('1 - ' + (_set < _itemLength ? _set : _itemLength) + ' / ' + _itemLength);
 

 
		// 當按了上下頁的按鈕時
		$btn.find('.prev, .next').click(function(e){
			// 計算要顯示第幾組
			_index = Math.floor((e.target.className == 'prev' ? _index - 1 + _count : _index + 1) % _count);
			var _lastNum = _set * (_index + 1);
			$page.html((_set * _index + 1) + ' - ' + (_lastNum < _itemLength ? _lastNum : _itemLength) + ' / ' + _itemLength);
 
			// 進行動畫
			$carousel.stop().animate({
				left: _index * _width
			}, _speed);
 
			e.preventDefault();
		}).focus(function(){
			this.blur();
		});
	})
});