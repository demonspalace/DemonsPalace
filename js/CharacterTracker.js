function CharactersLeft(event, elementID) {

    //Calculates The Number Of Characters Left
    let charactersLeft = 300 - event.target.value.length; 

    //Displays The Number Of Characters Left
    document.getElementById(elementID).innerHTML = "Characters Left: " + charactersLeft;

}