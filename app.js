function runSlots() {
    var slotOne, slotTwo, slotThree;
    var images = ["http://i.imgur.com/9H17QFk.png", "http://i.imgur.com/9RmpXTy.png", "http://i.imgur.com/VJnmtt5.png"];

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
