function menuOpen(){
    let menuDiv = document.getElementById('menuBar')
    if(menuDiv.style.display==="flex"){
        menuDiv.style.display="none"
    }else{
        menuDiv.style.display="flex"
    }
}

async function showProduct() {
    try {
        let res = await fetch('https://fakestoreapi.com/products')
        let products = await res.json()
        console.log(products)
        products.forEach((product)=>{
            let div = document.getElementById('product')
            let box = document.createElement('div')
            box.innerHTML = `
                <img src="${product.image}" alt="">
                <p>${product.title}</p>
                <h3>₹${product.price}</h3>
            `
            div.appendChild(box)
        })
    } catch (error) {
        console.log(error)
    }
}
showProduct()



let men = document.getElementById('mensWear')
    men.addEventListener('click', ()=>{
        window.location.href="mens.html"
 })


 let women = document.getElementById('WomensWear')
    women.addEventListener('click', ()=>{
        window.location.href="womens.html"
 })


  let electronic = document.getElementById('Electronics')
    electronic.addEventListener('click', ()=>{
        window.location.href="electronics.html"
 })


  let jewelry = document.getElementById('Jewelry')
    jewelry.addEventListener('click', ()=>{
        window.location.href="jwelery.html"
 })