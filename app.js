const everyDiv = document.querySelectorAll("div")
console.log(everyDiv)
everyDiv.forEach(div =>div.addEventListener('mouseover', function() {
    everyDiv.classList.add('onmo')
}));