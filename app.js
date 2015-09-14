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

    if(slotOne !== undefined && slotTwo !== undefined && slotThree !== undefined){
        $(".logger").html(slotOne + " " + slotTwo + " " + slotThree);
    }
    return [slotOne, slotTwo, slotThree];
}

$(document).ready(function(){
    $(".go").click(function(){
        runSlots();
        });
    );
