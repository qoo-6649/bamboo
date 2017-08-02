$(function () {

	$('.select_date').hide();

	//選択された年の取得
	$('.year').change(function () {
		var s_year = $(this).val();
		console.log(s_year);
		$('.select_date .drow_year').html(s_year);
		
		var test = $('.drow_month').val();
		console.log("月：" , test);
		
		//月が選択されていれば表示
		if($('.drow_month').get(0)){
			$('.select_date').show();
		}
	});
	
	//選択された月の取得
	$('.month').change(function () {
		var s_month = $(this).val();
		console.log(s_month);
		$('.select_date .drow_month').html(s_month);
		
		//年が選択されていれば表示
		if($('.drow_year').get(0)){
			$('.select_date').show();
		}
	});
});