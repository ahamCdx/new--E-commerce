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