$(function(){
	$(window).load(function(){
		$('.nav_op').show();
	});
	var ww = $(window).width();
	//クリック連打防止用待ち時間
	var busy = 0;
	
	//開くイベント
	$('.nav_op').click(function(){
		//閉じるイベント中は実行しない
		if(busy == 1)return false;
			$('#navigation div p').hide();
			$('.nav_close').show();
			//アニメーション
			$('li.nav01').animate({left: ww - 230}, 80);
			setTimeout(function(){$('li.nav02').animate({left: ww - 155}, 200);},  0);
			setTimeout(function(){$('li.nav03').animate({left: ww - 80},  200);},  80);
			setTimeout(function(){$('li.nav04').animate({left: ww - 230}, 200);},50);
			setTimeout(function(){$('li.nav05').animate({left: ww - 155}, 200);},100);
			setTimeout(function(){$('li.nav06').animate({left: ww - 80},  200);},150);
			setTimeout(function(){$('li.nav07').animate({left: ww - 230}, 200);},200);
			setTimeout(function(){$('li.nav08').animate({left: ww - 155}, 200);},250);
			setTimeout(function(){$('li.nav09').animate({left: ww - 80},  200);},300);
			// 次のイベントを0.7秒間無効
			busy = 1;
			setTimeout(function() { busy = 0; }, 700);
	});

	//閉じるイベント
	$('.nav_close').click(function(){
		//開くイベント中は実行しない
		if(busy == 1) return false;
			$('#navigation div p').hide();
			$('.nav_op').show();
			//アニメーション
			$('li.nav09').animate({left:'100%'}, 100);
			setTimeout(function(){$('li.nav08').animate({left:'100%'}, 100);}, 50);
			setTimeout(function(){$('li.nav07').animate({left:'100%'}, 100);},100);
			setTimeout(function(){$('li.nav06').animate({left:'100%'}, 100);},150);
			setTimeout(function(){$('li.nav05').animate({left:'100%'}, 100);},200);
			setTimeout(function(){$('li.nav04').animate({left:'100%'}, 100);},250);
			setTimeout(function(){$('li.nav03').animate({left:'100%'}, 100);},300);
			setTimeout(function(){$('li.nav02').animate({left:'100%'}, 100);},350);
			setTimeout(function(){$('li.nav01').animate({left:'100%'}, 100);},400);
			// 次のイベントを0.7秒間無効
			busy = 1;
  			setTimeout(function() { busy = 0; }, 700);
	});
	
});