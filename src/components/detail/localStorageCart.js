function localStorageCart(size, buttons,productId,name,price,image) {

    if(!size){
        console.error('NOT size assigned❌');
        throw new Error('NOT size assigned❌')
    }
    
    
    
   

    const carGet = localStorage.getItem('cart')
    const arrayCart = JSON.parse(carGet) || []

    const matched = arrayCart.find((product)=> product.productId === productId && product.size === size) 
    
    if(matched){
       matched.quantity++
    }else{
        arrayCart.push({size,productId,name,price,image,quantity:1})
    }
    
    const arrayJSON = JSON.stringify(arrayCart)
    localStorage.setItem('cart', arrayJSON)
    

    buttons.forEach((btn)=>{
        btn.classList.remove('div__button--active')
    })
}

export default localStorageCart