$(loaded);

function loaded(){
  //ボタンタグをクリックしたときの動作を指定
    $("button").click(change_text);
  
    // $("body").append($("<p>").text("おはよう"));
    // $("body").append($("<p>").text("こんにちは"));
    // $("body").append($("<p>").text("おやすみ"));
};


function change_text(){
  //IDがmessageの要素のテキストを書き換え
    //$("#message").text("こんばんは");
  
    $("#message").remove();


    var messages = ["おはよう", "こんにちは", "こんばんは", "おやすみ"];
    $.each(messages, function(index, value) {
      $("body").append($("<p>").text(value));
    });
    



};
