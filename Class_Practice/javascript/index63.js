/**
 * Create a new index63.js file
Define year variable and assign a number between 2006 and 2017
Define champion variable and assing a value between 2006 and 2017
Show the following ouptup depending the selected year: %champion% was the %year% NHL Champion
If the value it's not bettwen 2006 and 2017 show the following error: Sorry, please try a differnt year
Use a switch statement to check for the selected year value `` 2017 - Pittsburgh Penguins 2016 - Pittsburgh Penguins 2015 - Chicago Blackhawks 2014 - Los Angeles Kings 2013 - Chicago Blackhawks 2012 - Los Angeles Kings 2011 - Boston Bruins 2010 - Chicago Blackhawks 2009 - Pittsburgh Penguinas 2008 - Detroit Red Wings 2007 - Anaheim Ducks 2006 - Carolina Hurricanes
* Try all the posible cases/scenarios (even the error message) by changing the year value
 */
var year = 2004;//2006 & 2017
var champion = 2015;//2006 & 2017

switch(year){
    case 2006:
        champion = "Carolina Hurricanes";
        break;
    case 2007:
        champion = "Anaheim Ducks";
        break;
    case 2008:
        champion = "Detroit Red Wings";
        break;
    case 2009:
        champion = "Pittsburgh Penguinas";
        break;
    case 2010:
        champion = "Chicago Blackhawks";
        break;
    case 2011:
        champion = "Boston Bruins";
        break;
    case 2012:
        champion = "Los Angeles Kings";
        break;
    case 2013:
        champion = "Chicago Blackhawks";
        break;
    case 2014:
        champion = "Los Angeles Kings ";
        break;
    case 2015:
        champion = "Chicago Blackhawks";
        break;
    case 2016:
        champion = "Pittsburgh Penguins";
        break;
    case 2017:
        champion = "Pittsburgh Penguins";
        break;
        default:
            break;
}
if(typeof champion == "number"){
    console.log('Sorry, please try a differnt year');
} else {
    console.log(`${champion} was the ${year} NHL Champion`);
}

//Pittsburgh Penguinas was the 2009 NHL Champion  
//Sorry, please try a differnt year
