const divsContainer = document.querySelector(".container");
inputButt = document.querySelector(".inputButton");

inputButt.addEventListener('click', function() {
    divsContainer.innerHTML="";
    let divsQuantity = prompt("Enter number no more than 30");
    if (divsQuantity < 31) {
for(i=0; i<divsQuantity*divsQuantity; i++) {
    const newDiv = document.createElement('div');
    divsContainer.append(newDiv);
    newDiv.classList.add("with");
    divsContainer.style.gridTemplateColumns = `repeat(${divsQuantity}, 1fr)`
    divsContainer.style.gridTemplateRows = `repeat(${divsQuantity}, 1fr)`
    const allTheDivs = document.querySelectorAll('.with');
    allTheDivs.forEach(div => div.addEventListener('mouseover', function() {
    div.classList.add('addedClass');
    // If uncomment line bellow color will be changed with styling method
    // div.style.backgroundColor = "red"; 
    rgb  = Math.floor(Math.random() * 256);
    rgb2 = Math.floor(Math.random() * 256);
    rgb3 = Math.floor(Math.random() * 256);
    div.style.backgroundColor = `rgb(${rgb}, ${rgb2}, ${rgb3})`
}));}}})
