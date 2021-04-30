const packageListItems = document.querySelectorAll('.package-list-item');
const packages = document.querySelectorAll('.package');
packageListItems.forEach((package)=>{
        
    package.addEventListener('click',showPackage)
})

function showPackage(e) {
    console.log(e.target.id)
    
    // set only target element to active
    packageListItems.forEach((package)=>{
        
        package.className = 'package-list-item'
    })
    e.target.className += ' active'

    // show only the package concerned when clicked
    packages.forEach((package)=>{
        package.id != `${e.target.id}-package`? (package.style.display = 'none') : (package.style.display = 'flex')

    })
}