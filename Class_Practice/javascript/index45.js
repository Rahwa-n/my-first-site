/*Create a new index45.js file
Define a playerName variable with the following value: Darian Durant is lame
Define a teams variable with the following value: BC Lions, Calgary Stampeders, Edmonton Eskimos, Saskatchewan Roughriders & Winnipeg Blue Bombers
Define a message variable with the following value: Regina is the best Canadian city, Go Riders
Use the slice method to get the following words or phrases from the previous variables:
Daran Durant is
riders
the best
, Go
Use a template variable to create the final result
Change the first riders character to be Capitalized
Create all the variables that you might need to accomplish this objective
The final output must be: DARIAN DURANT is the best Riders player, Go Riders!!
*/
var playerName = "Darian Durant is lame";
var team = "BC Lions, Calgary Stampeders, Edmonton Eskimos, Saskatchewan Rough riders & Winnipeg Blue Bombers";
var message = "Rigina is the best Canadian city, Go Riders";

var player = playerName.slice(0 , 16);
console.log(player);

var team2 = team.slice(66 , 74);
console.log(team2);

var message2 = message.slice(10,18);
console.log(message2);

var message3 = message.slice(32,36);
console.log(message3);
/**
 * Darian Durant is
 riders
the best
, Go
 */
function message4(string) {
    newMessage = string.slice(0,1).toUpperCase() + string.slice(1).toLowerCase();
    return newMessage;
}
var message5 = message4(team2); 
message5 = " " + message5;
message3 = " " + message3;
var message6 = message5 + "player";
var message7 = player + " "  +  message2 + message6 +  message3 + message5 + "!!";
console.log(message7);














