$(function(){
	$(window).load(function(){
		$('.nav_op').show();
	});
	var ww = $(window).width();
	//�N���b�N�A�Ŗh�~�p�҂�����
	var busy = 0;
	
	//�J���C�x���g
	$('.nav_op').click(function(){
		//����C�x���g���͎��s���Ȃ�
		if(busy == 1)return false;
			$('#navigation div p').hide();
			$('.nav_close').show();
			//�A�j���[�V����
			$('li.nav01').animate({left: ww - 230}, 80);
			setTimeout(function(){$('li.nav02').animate({left: ww - 155}, 200);},  0);
			setTimeout(function(){$('li.nav03').animate({left: ww - 80},  200);},  80);
			setTimeout(function(){$('li.nav04').animate({left: ww - 230}, 200);},50);
			setTimeout(function(){$('li.nav05').animate({left: ww - 155}, 200);},100);
			setTimeout(function(){$('li.nav06').animate({left: ww - 80},  200);},150);
			setTimeout(function(){$('li.nav07').animate({left: ww - 230}, 200);},200);
			setTimeout(function(){$('li.nav08').animate({left: ww - 155}, 200);},250);
			setTimeout(function(){$('li.nav09').animate({left: ww - 80},  200);},300);
			// ���̃C�x���g��0.7�b�Ԗ���
			busy = 1;
			setTimeout(function() { busy = 0; }, 700);
	});

	//����C�x���g
	$('.nav_close').click(function(){
		//�J���C�x���g���͎��s���Ȃ�
		if(busy == 1) return false;
			$('#navigation div p').hide();
			$('.nav_op').show();
			//�A�j���[�V����
			$('li.nav09').animate({left:'100%'}, 100);
			setTimeout(function(){$('li.nav08').animate({left:'100%'}, 100);}, 50);
			setTimeout(function(){$('li.nav07').animate({left:'100%'}, 100);},100);
			setTimeout(function(){$('li.nav06').animate({left:'100%'}, 100);},150);
			setTimeout(function(){$('li.nav05').animate({left:'100%'}, 100);},200);
			setTimeout(function(){$('li.nav04').animate({left:'100%'}, 100);},250);
			setTimeout(function(){$('li.nav03').animate({left:'100%'}, 100);},300);
			setTimeout(function(){$('li.nav02').animate({left:'100%'}, 100);},350);
			setTimeout(function(){$('li.nav01').animate({left:'100%'}, 100);},400);
			// ���̃C�x���g��0.7�b�Ԗ���
			busy = 1;
  			setTimeout(function() { busy = 0; }, 700);
	});
	
});