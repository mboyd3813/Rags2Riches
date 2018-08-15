
var commandsIKnow = ["go", "pickup","examine","talk", "take", "runaway", "attack"];
var commands ="";
var itemsIKnow = ["gun", "phone", "cigs" ];
var items = [];
var backpack = [];
var objects = ["alarm clock","Tv","window"];
var objectLocation = ["start"];
var gameMessage = "";
var currentRoom = "start,";

// Rooms/Spaces
function changeRoom(dir) {
    if (rooms[currentRoom].directions[dir] !== undefined) {
        currentRoom = rooms[currentRoom].directions[dir]
        $('#game-text').append("<p>" + rooms[currentRoom].description.objects + "</p>");
    } else {
        $('#game-text').append("<p>You cannot go that way!</p>");
    }


}
// Command Help
function showHelp(){
    $('#game-text').append("<p>Here are all the possible commands:</p>");
    $('#game-text').append("<p><ul>");
    for(var i = 0; i < commandsIKnow.length; i++) {
        $('#game-text').append("<li>" + commandsIKnow[i] + "</li>");
    }
    $('#game-text').append("</ul>");
}
// Backpack Inventort 
function showBackPack(){
    if (backpack.length === 0){
        $('#game-text').append("<p>Your backpack is empty:</p>");
        return;
    }
    $('#game-text').append("<p>Here is everything in your backpack:</p>");
    $('#game-text').append("<p><ul>");
    for(var i = 0; i < backpack.length; i++) {
        $('#game-text').append("<li>" + backpack[i] + "</li>");
    }
    $('#game-text').append("</ul>");
}
// Player input
function playerInput(input) {
    var command = input.split(" ")[0];
    switch (command) {
        case "go":
            var dir = input.split(" ")[1];
            changeRoom(dir);
            break;
        case "help":
            showHelp();
            break;
        case "backpack":
            showBackPack();
            break;
        default:
            $('#game-text').append("<p>Invalid command!</p>");
    }
}      
// Keypress 
$(document).ready(function() {
    $('#game-text').append("<p>" + rooms.start.description + "</p>");

    $(document).keypress(function(key) {
        if (key.which === 13 && $('#user-input').is(':focus')) {
            var value = $('#user-input').val().toLowerCase();
            $('#user-input').val("");
            playerInput(value);
}})})