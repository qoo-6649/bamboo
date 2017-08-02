//------------------------------------------------
// カウントアップ
// id ： 書き込むファイル名（投票につき１つ設定）
// cls ： 投票数を表示するクラス名
//------------------------------------------------

function Vote(id,cls) {
	// 現在表示されている投票数から１カウントアップ
	new_count = Number(document.getElementsByClassName(cls)[0].innerHTML) + 1;
	// Ajaxでvote.phpを呼び出す＜引数にid(ファイル名)とnew_count(カウントアップされた投票数)をセット＞
	$.ajax({
		type: 'post',
		url: 'countup_test2.php',
		data: {
			'file_id': id,
			'count': new_count
		},
		success: function(data){
			// OKが戻ってきたらHTMLにカウントアップした値をセット
			if(data == "OK") {
			document.getElementsByClassName(cls)[0].innerHTML = new_count;
			// OK以外はクッキーの時間指定の範囲内（のはず）
			} else {
			alert("10秒以内は連続投票できません！");
			}
		}
	});
}