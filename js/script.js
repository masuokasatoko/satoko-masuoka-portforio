$(function () {

  //ページ内スクロール
  var navHeight = $(".header").outerHeight();

  $('a[href^="#"]').on("click", function () {
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? "html" : href);
    var position = target.offset().top - navHeight;
    $("html, body").animate({ scrollTop: position, }, 300, "swing");
    return false;
  });

  //ページトップ
  $("#js-page-top").on("click", function () {
    $("body,html").animate({ scrollTop: 0, }, 300);
    return false;
  });

});

// 100pxを境にTOPに戻るボタンの表示・非表示を切り替える  
$(window).scroll(function () {
  if ($(this).scrollTop() > 100) {
    $('#pagetop').fadeIn();
  } else {
    $('#pagetop').fadeOut();
  }
});