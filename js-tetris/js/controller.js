/*
 キーボードを入力した時に一番最初に呼び出される処理
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

window.onload = function () {

    document.getElementById("top").onmousedown = function () {
        // セットされたキーの場合はtetris.jsに記述された処理を呼び出す
        keyPress( 38 );
        // 描画処理を行う
        render();
    };

    document.getElementById("left").onmousedown = function () {
        // セットされたキーの場合はtetris.jsに記述された処理を呼び出す
        keyPress( 37 );
        // 描画処理を行う
        render();
    };

    document.getElementById("right").onmousedown = function () {
        // セットされたキーの場合はtetris.jsに記述された処理を呼び出す
        keyPress( 39 );
        // 描画処理を行う
        render();
    };

    document.getElementById("bottom").onmousedown = function () {
        // セットされたキーの場合はtetris.jsに記述された処理を呼び出す
        keyPress( 40 );
        // 描画処理を行う
        render();
    };
}