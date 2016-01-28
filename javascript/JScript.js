$(function () {
    $('.abgne-yahoo-carousel').each(function () {
        // 先取得相關的元素及寬度等資料
        var $this = $(this),
			$page = $this.find('.page'),
			$btn = $this.find('.btn'),
			_frameWidth = $this.find('.frame').width(),
			$carousel = $this.find('ul'),
			$items = $carousel.find('li'),
			_itemLength = $items.length,
			_set = Math.ceil(_frameWidth / $items.outerWidth(true)),
			_count = _itemLength / _set,
			_width = _set * $items.outerWidth(true) * -1,
			_speed = 400, _opacity = 0.75, _index = 0;

        // 用來顯示目前已顯示及總資料筆數資訊
        $page.html('1 - ' + _set + ' / ' + _itemLength);

        // 幫每一個 li 加上標題及遮罩
        $items.each(function () {
            var $this = $(this),
				_href = $this.find('a').attr('href'),
				_title = $this.find('img').attr('title');

            $this.append('<div class="ovrly"></div>' +
				'<h3>' +
					'<a href="' + _href + '" alt="' + _title + '" title="' + _title + '">' + _title + '</a>' +
				'</h3>').find('.ovrly').css('opacity', _opacity);
        });

        // 當按了上下頁的按鈕時
        $btn.find('.prev, .next').click(function (e) {
            // 計算要顯示第幾組
            _index = (e.target.className == 'prev' ? _index - 1 + _count : _index + 1) % _count;
            $page.html((_set * _index + 1) + ' - ' + (_set * (_index + 1)) + ' / ' + _itemLength);

            // 進行動畫
            $carousel.stop().animate({
                left: _index * _width
            }, _speed);

            e.preventDefault();
        }).focus(function () {
            this.blur();
        });
    })
}); 