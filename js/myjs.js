//设置周期执行
var int;  //用于设置和取消定时操作
var intervalTime = 200;

$(document).ready(function () {
    v = document.getElementById("testmp4");
    c = document.getElementById("testcanvas");
    ctx = c.getContext('2d');
    $("#btn_start").click(function () {
        var val = $("#fpsInput").val();
        if (val === '')
            val = 5;
        intervalTime = 1000 / val;
        int = setInterval('screenShot()', intervalTime)
    });
    $("#btn_stop").click(function () {
        clearInterval(int);
    });
    $("#test_btn").click(function () {
       screenShot();
       // upload();
    });
});
function screenShot() {
    ctx.drawImage(v, 0, 0, c.width, c.height);
    image = c.toDataURL("image/jpeg");
    var text = $("<img></img>").attr({
        "src": image,
        "class":"img-rounded",
        "alt":"截屏"
    });
    $("#simgshow").prepend(text);
    $.post("server.php",{img:image});
}
function upload() {
    $.post("server.php",{img:image});
}



