$(document).ready(function() {
    const log = console.log;

    let object = localStorage.getItem("myStyles");
    log(object);
    object = JSON.parse(object);

    $("body").css({
        background: object.bgColor
    })
})