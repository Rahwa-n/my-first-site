//data format json,
//Async programming /fetch

// const car = {
//     "make": "Honda",
//     "colors": ["White", "Black"]
// };

var apiUrl = 'https://api.tvmaze.com/search/shows?q=batman';
fetch(apiUrl)
    .then(function(response){
        // console.log(response);
        return response.json();//response get
    })
    .then(function(data){
        console.log(data);//to access the object we can make f0, f1...
    });

    //fetch(api)
    //.then(function(response){

    //})
    //.then
