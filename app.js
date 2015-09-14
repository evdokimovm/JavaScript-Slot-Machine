function runSlots() {
    var slotOne, slotTwo, slotThree;
    var images = ["http://i.imgur.com/9H17QFk.png", "http://i.imgur.com/9RmpXTy.png", "http://i.imgur.com/VJnmtt5.png"];

    min = 1
    max = 3
    slotOne = Math.floor(Math.random() * (max - min + 1)) + min;
    slotTwo = Math.floor(Math.random() * (max - min + 1)) + min;
    slotThree = Math.floor(Math.random() * (max - min + 1)) + min;

    $(".logger").html("");
    $(".logger").html("Not A Win");

/*    $($(".slot")[0]).html(slotOne);
    $($(".slot")[1]).html(slotTwo);
    $($(".slot")[2]).html(slotThree);*/

    $($('.slot')[0]).html('<img src = "' + images[slotOne-1] + '">');
    $($('.slot')[1]).html('<img src = "' + images[slotTwo-1] + '">');
    $($('.slot')[2]).html('<img src = "' + images[slotThree-1] + '">');

    if ((slotOne !== slotTwo) || (slotTwo !== slotThree) || (slotThree !== slotOne)) return null;

    if(slotOne !== undefined && slotTwo !== undefined && slotThree !== undefined){
        $(".logger").html(slotOne + " " + slotTwo + " " + slotThree);
    }
    return [slotOne, slotTwo, slotThree];
}

$(document).ready(function(){
    $(".go").click(function(){
        runSlots();
        });
    });
