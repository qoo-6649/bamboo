//$(function(){
    //フォームID初期値
    var captionId = 0;
    var columnId = 0;
    var img_columnId = 0;
    
    //世界エリアプルダウン
    function areaSelect(obj){
        select = obj.value;
        console.log('選択中⇒',select);
        
        //"その他"を選んだらテキストエリア
        if (select == 'other'){
            console.log('その他を選択!');
            document.getElementById("countryNamePull").style.display="none"; document.getElementById("countryNameText").style.display="block";
            document.getElementById("countryPointPull").style.display="none"; document.getElementById("countryPointText").style.display="block";
        }else if(select == 'default'){
            document.getElementById("countryNamePull").style.display="none"; document.getElementById("countryNameText").style.display="none";
            document.getElementById("countryPointPull").style.display="none"; document.getElementById("countryPointText").style.display="none";
        //それ以外はプルダウン
        }else{
            document.getElementById("countryNameText").style.display="none"; document.getElementById("countryNamePull").style.display="block";
            document.getElementById("countryPointText").style.display="none"; document.getElementById("countryPointPull").style.display="block";
        }
    }
    //見出しフォーム
    function caption(){
        //押したときに見出しフォームを表示
        var to = document.getElementById("column_form");
        
        var newDiv = document.createElement("div");
            newDiv.id = "caption" + ++captionId;
            newDiv.classList.add("caption");
            newDiv.innerHTML = "<div class=label>見出し<span id=button class=close onClick=column_close(this)>×</span><span id=button class=down onClick=column_down(this)>↓</span><span id=button class=up onClick=column_up(this)>↑</span></div><br><span class=column>見出し文</span><input type=text name=\"captionText" +captionId+ "\" class=column style=\"width:560px;height:18px;\"></text>";
        
        to.appendChild(newDiv);
    }
    //本文フォーム
    function column(){
        //押したときに本文だけのフォームを"記事内容"エリアに表示する
        var to = document.getElementById("column_form");
        
        var newDiv = document.createElement("div");
            newDiv.id = "column" + ++columnId;
            newDiv.classList.add("column");
            newDiv.innerHTML = "<div class=label>本文<span id=button class=close onClick=column_close(this)>×</span><span id=button class=down onClick=column_down(this)>↓</span><span id=button class=up onClick=column_up(this)>↑</span></div><br><span class=column>サブタイトル</span><input type=text class=column name=\"columnSub" +columnId+ "\" style=\"width:560px;height:18px;\"></input><br><span class=column>本文</span><textarea id=textarea name=\"columnText" +columnId+ "\" class=column style=\"width:560px;height:90px;\"></textarea>";
        
        to.appendChild(newDiv);
    }
    //画像＋本文フォーム
    function img_column(){
        //押したときに画像+本文のフォームを"記事内容"エリアに表示する
        var to = document.getElementById("column_form");
        
        var newDiv = document.createElement("div");
            newDiv.id = "img_column" + ++img_columnId;
            newDiv.classList.add("img_column");
            newDiv.innerHTML = "<div class=label>画像＋本文<span id=button class=close onClick=column_close(this)>×</span><span id=button class=down onClick=column_down(this)>↓</span><span id=button class=up onClick=column_up(this)>↑</span></div><br><span class=column>サブタイトル</span><input type=text class=column name=\"imgColumnSub" +img_columnId+ "\" style=\"width:560px;height:18px;\"></input><br><div id=\"column_left\"><span class=caption>画像</span><input type=\"file\" name=\"imgColumnFile" +img_columnId+ "\"><br><br><br><span class=caption>画像ALT文</span><input type=text name=\"imgColumnAlt" +img_columnId+ "\" class=\"img_column\" style=\"width:149px; height:16px;\"></input></div><div id=\"column_right\"><span class=\"img_column\">本文</span><textarea id=textarea name=\"imgColumnText" +img_columnId+ "\"class=\"img_column_text\" style=\"width:395px; height:90px; margin-right:13px;\"></textarea></div>";
        
        to.appendChild(newDiv);
    }
    //×消す
    function column_close(obj){
        //押されたフォームのIDを読み取り、削除する
        var remDiv = obj.parentNode.parentNode;
        remDiv.parentNode.removeChild(remDiv);
    }
    //↑へ
    function column_up(obj){
        var parents = obj.parentNode.parentNode;
        var copyCurrent = parents.cloneNode(true);
        
        //コピー元のtekitarea入力内容
        //var copy = obj.parentNode.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling;
        //var taObjPre = copy.value;
        
        var target = parents.previousSibling;
        //コピー先のtextarea入力内容
        //var paste = target.childNodes;
        //var taObjNex = paste[6].value;
        
          if(target != null){
            var copyPrev = target.cloneNode(true);
            
            parents.parentNode.replaceChild(copyPrev, parents);
            target.parentNode.replaceChild(copyCurrent, target);
            
            //taObjPre = taObjNex;
            //taObjNex = taObjPre;
            
            //console.log(taObjPre);
            //console.log(taObjNex);
        }
    }
    //↓へ
    function column_down(obj){
        var parents = obj.parentNode.parentNode;
        var copyCurrent = parents.cloneNode(true);
        //console.log("[↓]カラムID：",copyCurrent);
        
        var target = parents.nextSibling;
        if(target != null){
            var copyNext = target.cloneNode(true);
            //console.log("[↓]兄弟要素：",copyNext);
        
            parents.parentNode.replaceChild(copyNext, parents);
            target.parentNode.replaceChild(copyCurrent, target);
        }
    }
//});