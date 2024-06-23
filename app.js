document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll(".button");
    const cartValue = document.getElementById("cart-value");
    const arr=[];
    let price=0;
    buttons.forEach(function(button) {
        button.addEventListener('click', function() {
            // Increment the cart value
            let currentValue = parseInt(cartValue.innerText);
            cartValue.innerText = currentValue + 1;

            // Retrieve book details
            let bookContainer = button.parentElement.parentElement;
            // console.log(bookContainer)
            let bookName = bookContainer.querySelector('h3').innerText;
            let bookPrice = parseFloat(bookContainer.querySelector('p').innerText.substring(1));
            price+=bookPrice;
            // Log book details to console
            
            // console.log(`Book Name: ${bookName}, Price: $${bookPrice}`);
            const ami =(`Book Name: ${bookName}, Price: $${bookPrice}`);
            arr.unshift(ami);
            // console.log(arr)
        });
    });
    const cart= document.getElementById("cart")
    cart.addEventListener('click',function(){
    arr.forEach(function(item){
        console.log(item);
    })
    console.log(`The total amount is ${price.toFixed(2)}`)
})
});

