export function isEmpty(object){
    if(object instanceof Array && object.length === 0 ) return true;
    return false;
}

export function wasAdded(products, id){
    let wasAdded = false;
    products.forEach(element => {
        if(element.id === id){ 
            let quantity = element.quantity;
            element.quantity = element.quantity + 1;
            if(element.quantity > quantity) wasAdded = true;
        }
    })

    return wasAdded;
}

export function decrementQuantity(products, id){
    let wasDecremented = false;
    products.forEach(element => {
        if(element.id === id){ 
            let quantity = element.quantity;
            if(quantity > 0){
                element.quantity = element.quantity - 1;
                if(quantity > element.quantity) wasDecremented = true;
            }
        }
    })
    
    return wasDecremented;
}

export function getTotal(object){
    let total = 0;
    if(object instanceof Object){
        object.forEach(item => {
            total+=item.price*item.quantity
        })
    }
    return total;
}