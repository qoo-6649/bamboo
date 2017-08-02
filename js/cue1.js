 (function($){
    //トップページ右上のリンク
    $(function(){
        $("#open_list").on("click", function() {
            $("#acMenu").slideToggle(0);
        });
    });
    
    //トップページのタブ切り替え
    $(function(){
         $("#tab_diary_off").on("click", function() {
            console.log('test');
            $("#tab_diary_on").css("display","block");
            $("#tab_diary_off").css("display","none");
            $("#tab_contents_on").css("display","none");
            $("#tab_contents_off").css("display","block");
            $("#tab_news_on").css("display","none");
            $("#tab_news_off").css("display","block");
            
            $("#diary_ul").css("display","block");
            $("#contents_ul").css("display","none");
            $("#news_ul").css("display","none");
         });
    });
    $(function(){
         $("#tab_contents_off").on("click", function() {
            console.log('test2');
            $("#tab_diary_on").css("display","none");
            $("#tab_diary_off").css("display","block");
            $("#tab_contents_off").css("display","none");
            $("#tab_contents_on").css("display","block");
            $("#tab_news_on").css("display","none");
            $("#tab_news_off").css("display","block");
            
            $("#diary_ul").css("display","none");
            $("#contents_ul").css("display","block");
            $("#news_ul").css("display","none");
         });
    });
    $(function(){
         $("#tab_news_off").on("click", function() {
            $("#tab_diary_on").css("display","none");
            $("#tab_diary_off").css("display","block");
            $("#tab_contents_on").css("display","none");
            $("#tab_contents_off").css("display","block");
            $("#tab_news_on").css("display","block");
            $("#tab_news_off").css("display","none");
            
            $("#diary_ul").css("display","none");
            $("#contents_ul").css("display","none");
            $("#news_ul").css("display","block");
         });
    });
  })(jQuery);

