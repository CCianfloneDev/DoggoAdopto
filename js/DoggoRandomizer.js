
/*
    Load function
    Using the fetch API, get dataset from the Dog API
*/
async function load() {
    let leftData, rightData;

    let leftFetch = fetch("https://dog.ceo/api/breeds/image/random")
        .then(result => { return result.json(); })
        .then(data => leftData = data);

    let rightFetch = fetch("https://dog.ceo/api/breeds/image/random")
        .then(result => { return result.json() })
        .then(data => rightData = data);

    await leftFetch, rightFetch;

    populateImages(leftData, rightData);
}

/*
    populateImages function
    Using the dog API dataset populate existing image elements
*/
function populateImages(leftData, rightData) {

    let leftDog = document.getElementById("leftDog");
    let rightDog = document.getElementById("rightDog");


    leftDog.src = `${leftData.message}`;
    rightDog.src = `${rightData.message}`;
}

//adds an event listener to execute onLoad method when page finished loading
document.addEventListener("DOMContentLoaded", load);    
