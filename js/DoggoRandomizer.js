
/*
	Load function
	Using the fetch API, get dataset from the Dog API
*/
function load() {

    fetch("https://dog.ceo/api/breeds/image/random")
        .then(function(result){
            return result.json();
        })
        .then(function(data){
            populateImages(data);
        });
}

/*
	populateImages function
	Using the dog API dataset populate existing image elements
*/
function populateImages(data){

    let leftDog = document.getElementById("leftDog");
    let rightDog = document.getElementById("rightDog");


    leftDog.src = `${data.message}`;
    rightDog.src = `${data.message}`;
}

//adds an event listener to execute onLoad method when page finished loading
document.addEventListener("DOMContentLoaded", load);    
