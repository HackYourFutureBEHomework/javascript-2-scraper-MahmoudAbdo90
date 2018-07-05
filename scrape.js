// Your custom scraping script.
document.addEventListener("keypress", function() {


    let table = document.querySelector("table.cast_list");
    
    let actors = table.querySelectorAll("tr.odd", "tr.even");
    console.clear();

    for (let i = 0; i < actors.length; i++){
        let name = actors[i].querySelector("[itemprop=actor] a span").innerHTML;
        let $character = actors[i].querySelector("td.character");
        let character;

        let linkedCharacter = $character.querySelector("a");

        if (linkedCharacter != null) {
            character = linkedCharacter.innerHTML;
        } else {
        let $character = actors[i].querySelector("td.character");
            character = $character.innerHTML;
        }

        console.log("Actor: " + name + " Caharacter: " + character);
    }
    
    
    
    
})



// Look at https://github.com/HackYourFutureBelgium/JavaScript2/tree/master/Projects/web-scraper
// for the version we showed in class.

