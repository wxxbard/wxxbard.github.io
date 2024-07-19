//浏览器版本过低 提示升级
(function(w) {
    if (!("WebSocket" in w && 2 === w.WebSocket.CLOSING)) {
        var d = document.createElement("div");
        d.className = "browsehappy";
        d.innerHTML = '<div style="width:100%;height:50px;font-size:20px;line-height:50px;text-align:center;background-color:#E90D24;color:#fff;">您的浏览器版本过低，部分功能无法使用，为了改善您的体验，请升级您的浏览器</strong><a target="_blank" href="http://browsehappy.osfipin.com/" style="background-color:#31b0d5;border-color: #269abc;text-decoration: none;padding: 6px 12px;background-image: none;border: 1px solid transparent;border-radius: 4px;color:#FFEB3B;margin-left:20px;">点击此处升级</a></div>';
        var f = function() {
            var s = document.getElementsByTagName("body")[0];
            if ("undefined" == typeof(s)) {
                setTimeout(f, 10)
            } else {
                s.insertBefore(d, s.firstChild)
            }
        };
        f()
    }
}(window));
//菜单
$('.menu > ul > li').hover(function() {
    $(this).children().addClass('show');
}, function() {
    $(this).children().removeClass('show');
});

$('.menu .tabBtnBox>li>ul>li').hover(function() {
    $(this).parent().children().removeClass('active');
    $(this).addClass('active');
});

$("div.title").click(function(){
    var currentUrl = window.location.href;
    if(currentUrl.indexOf("_en") == -1) {
        window.location.href = "/";
    } else {
        window.location.href = "/index_en";
    }
    
})