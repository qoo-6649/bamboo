/*
 * キーボードを入力した時に一番最初に呼び出される処理
 */
document.body.onkeydown = function( e ) {
  // キーに名前をセットする
  var keys = {
    37: 'left',
    39: 'right',
    40: 'down',
    38: 'rotate'
  };

  if ( typeof keys[ e.keyCode ] != 'undefined' ) {
    // セットされたキーの場合はtetris.jsに記述された処理を呼び出す
    keyPress( keys[ e.keyCode ] );
    // 描画処理を行う
    render();
  }
};

/*
 * コントローラータップでブロックを動かす処理
 * ※画面読み込み後に呼び出す
 */
document.addEventListener("DOMContentLoaded", function() {

    // うえ(回転)
    document.getElementById("top").addEventListener('click', clickTop, false);

    function clickTop() {
        keyPress('rotate');
        render();
    };

    // ひだり
    document.getElementById("left").addEventListener('click', clickLeft, false);

    function clickLeft() {
        keyPress('left');
        render();
    };

    // みぎ
    document.getElementById("right").addEventListener('click', clickRight, false);

    function clickRight() {
        keyPress('right');
        render();
    };

    // した
    document.getElementById("bottom").addEventListener('click', clickBottom, false);

    function clickBottom() {
        keyPress('down');
        render();
    };

}, false);