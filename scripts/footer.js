// General website JS (start)
let rightsReservedParagraph = document.querySelector('.all-rights-reserved')

let getCurrentYear = new Date().getFullYear();

rightsReservedParagraph.innerHTML = `&copy; ${getCurrentYear} Filip Sjöstrand. All rights reserved.`

// General website JS (end)