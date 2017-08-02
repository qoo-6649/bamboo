    //見出しフォーム
    function caption(){
        var to = document.getElementById("column_form");
        
        var newDiv = document.createElement("div");
            newDiv.id = "caption";
            newDiv.innerHTML = "<span id=button class=close onClick=column_close()>×</span><span id=button class=down onClick=column_down()>↓</span><span id=button class=up onClick=column_up()>↑</span><br><span class=column>見出し</span><textarea class=column style=\"width:25px;height:160px;\"></textarea>";
         alert("[見出し]フォーム");
    }

    //画像＋本文フォーム
    function img_column(){
        //押したときに画像+本文のフォームを"記事内容"エリアに表示する
        var to = document.getElementById("column_form");
        
        var newDiv = document.createElement("div");
            newDiv.id = "img_column";
            newDiv.innerHTML = "<span id=button class=close onClick=img_column_close()>×</span><span id=button class=down onClick=column_down()>↓</span><span id=button class=up onClick=column_up()>↑</span><br><div id=\"column_left\"><input type=\"file\" id=\"file\" style=\"display:none;\" onchange=\"$('#fake_input_file').val($(this).val())\" size=\"15px\"><br><input type=\"button\" value=\"参照\" onClick=\"$('#file').click();\"><input id=\"fake_input_file\" readonly type=\"text\" value=\"\"  onClick=\"$('#file').click();\" size=\"15px\"><br><br><br><span class=\"img_column_alt\">alt</span><textarea class=\"img_column\" style=\"width:135px; height:20px;\"></textarea></div><div id=\"column_right\"><span class=\"img_column\">本文</span><textarea class=\"img_column_text\" style=\"width:410px; height:145px;\"></textarea></div>";
        
        to.appendChild(newDiv);
    }
    //本文フォーム
    function column(){
        //押したときに本文だけのフォームを"記事内容"エリアに表示する
       var to = document.getElementById("column_form");
        
       var newDiv = document.createElement("div");
           newDiv.id = "column";
           newDiv.innerHTML = "<span id=button class=close onClick=column_close()>×</span><span id=button class=down onClick=column_down()>↓</span><span id=button class=up onClick=column_up()>↑</span><br><span class=column>本文</span><textarea class=column style=\"width:560px;height:160px;\"></textarea>";
        
       to.appendChild(newDiv);
    }
    //画像＋本文×消す
    function img_column_close(){
        //押されたフォームのIDを読み取り、削除する
        var remDiv = document.getElementById("img_column");
        remDiv.parentNode.removeChild(remDiv);
    }
    //本文×消す
    function column_close(){
        //押されたフォームのIDを読み取り、削除する
        var remDiv = document.getElementById("column");
        remDiv.parentNode.removeChild(remDiv);
    }
    //↑へ
    function column_up(column1,column2){
        var column1 = document.getElementById("column");
        var column2 = document.getElementById("img_column");
        var swap_column1 = column1.cloneNode(true);
        var swap_column2 = column2.cloneNode(true);
        
        column1.parentNode.replaceChild( swap_column2, column1);
        column2.parentNode.replaceChild( swap_column1, column2);
    }
    //↓へ
    function column_down(){
        alert("[↓]ボタン");
    }