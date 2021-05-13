//changing the text to the html element
var para = document.getElementById('detail');
//innerText is browser API and to change the inner text only
para.innerText = "I have been changed";

//this is to change the whole paragraph element
var desc = document.getElementById('description');
desc.innerHTML =  "I have <span> been changed</span>";