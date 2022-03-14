const navbar = document.querySelector('.container');
const products = document.querySelectorAll('.product-name');
const shoes = document.querySelectorAll('.shoe-name');
const shirts = document.querySelectorAll('.shirt-name');
const dresses = document.querySelectorAll('.dress-name');
const searches = document.querySelectorAll('.search');

window.onscroll = () => {
    if(window.scrollY > 500) {
        navbar.classList.add('top')
    } else {
        navbar.classList.remove('top')
    }
}

searches.forEach(search => {
    if(search.classList.contains('search-shoes')) {
        search.addEventListener('keyup', (e) => {
            const searchItem = search.value.toLowerCase();
            
            shoes.forEach(shoe => {
                const text = shoe.firstElementChild.textContent;
        
                if(text.toLowerCase().indexOf(searchItem) != -1) {
                   shoe.parentElement.parentElement.style.display = 'block';
                } else {
                    shoe.parentElement.parentElement.style.display = 'none';
                }
            })
        })
    } else if(search.classList.contains('search-shirts')) {
        search.addEventListener('keyup', (e) => {
            const searchItem = search.value.toLowerCase();
            console.log(e.target);
            
            shirts.forEach(shirt => {
                const text = shirt.firstElementChild.textContent;
        
                if(text.toLowerCase().indexOf(searchItem) != -1) {
                    shirt.parentElement.parentElement.style.display = 'block';
                } else {
                    shirt.parentElement.parentElement.style.display = 'none';
                }
            })
        })

    } else if(search.classList.contains('search-dresses')) {
        search.addEventListener('keyup', (e) => {
            const searchItem = search.value.toLowerCase();
            console.log(e.target);
            
            dresses.forEach(dress => {
                const text = dress.firstElementChild.textContent;
        
                if(text.toLowerCase().indexOf(searchItem) != -1) {
                    dress.parentElement.parentElement.style.display = 'block';
                } else {
                    dress.parentElement.parentElement.style.display = 'none';
                }
            })
        })
    } else {
        search.addEventListener('keyup', (e) => {
            const searchItem = search.value.toLowerCase();
            console.log(e.target);
            
            products.forEach(product => {
                const text = product.firstElementChild.textContent;
        
                if(text.toLowerCase().indexOf(searchItem) != -1) {
                    product.parentElement.parentElement.style.display = 'block';
                } else {
                    product.parentElement.parentElement.style.display = 'none';
                }
            })
        })
    }
})




// searches.addEventListener('keyup', (e) => {
//     const searchItem = search.value.toLowerCase();
//     console.log(e.target);
    
//     if(e.target.classList.contains('search-shoes')) {
//         console.log('shoes');
//     }
//     products.forEach(product => {
//         const text = product.firstElementChild.textContent;

//         if(text.toLowerCase().indexOf(searchItem) != -1) {
//             product.parentElement.parentElement.style.display = 'block';
//         } else {
//             product.parentElement.parentElement.style.display = 'none';
//         }
//     })
// })