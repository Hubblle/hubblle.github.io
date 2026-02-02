let content = [];
let max_mid = [];
let max_1 = [];

fetch("https://raw.githubusercontent.com/Hubblle/appreciation/refs/heads/main/data.json")
.then(response => response.json())
.then(data => {
    content = data;
    console.log(content);
    for(i=0; i<3; i++){
        
        max_mid[i] = content[i+1]["mid"].length;
        max_1[i] = content[i+1]["1"].length;
    }
   
    
})
// No catch, yes I'm like this x)



function phrase(n) {
    // get the level
    level_input = document.getElementById("quantity").value;


    // Function which generate the phrases using the provided data, with n parts in second phrase
    let ph="";
    // Random phrase no1
    let randint = Math.floor(Math.random() * max_1[level_input-1]);
    ph += content[level_input]["1"][randint]+" ";

    for(let i=0; i <= n; i++) {

        if(i++ == n){
            randint = Math.floor(Math.random() * max_mid[level_input-1]);
            ph += content[level_input]["mid"][randint]+".";
            break;
        }

        randint = Math.floor(Math.random() * max_mid[level_input-1]);
        ph += content[level_input]["mid"][randint].charAt(0).toUpperCase()+content[level_input]["mid"][randint].slice(1)+", ";

    }

    document.getElementById("test").innerText = ph;

}

function copy() {
    // Function to copy the generated phrases
    let element = document.getElementById("test");
    navigator.clipboard.writeText(element.innerText)
    alert("Texte copié: "+element.innerText)

}