$(function () {

	$('.select_date').hide();

	//�I�����ꂽ�N�̎擾
	$('.year').change(function () {
		var s_year = $(this).val();
		console.log(s_year);
		$('.select_date .drow_year').html(s_year);
		
		var test = $('.drow_month').val();
		console.log("���F" , test);
		
		//�����I������Ă���Ε\��
		if($('.drow_month').get(0)){
			$('.select_date').show();
		}
	});
	
	//�I�����ꂽ���̎擾
	$('.month').change(function () {
		var s_month = $(this).val();
		console.log(s_month);
		$('.select_date .drow_month').html(s_month);
		
		//�N���I������Ă���Ε\��
		if($('.drow_year').get(0)){
			$('.select_date').show();
		}
	});
});