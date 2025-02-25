document.addEventListener("DOMContentLoaded", function () {
    const menuList = document.getElementById("menu-list");
    const productList = document.getElementById("product-list");

   
    fetch('http://localhost:5500/menu')
        .then(response => response.json())
        .then(categories => {
            menuList.innerHTML = ""; 
            categories.forEach(category => {
                let li = document.createElement("li");
                li.textContent = category;
                li.style.cursor = "pointer";
                li.addEventListener("click", () => loadProducts(category));
                menuList.appendChild(li);
            });
        })
        .catch(error => console.error('Error:', error));

   
    function loadProducts(category) {
        fetch(`http://localhost:5500/menu/${category}`)
            .then(response => response.json())
            .then(products => {
                productList.innerHTML = ""; 
                products.forEach(product => {
                    let li = document.createElement("li");
                    li.textContent = `${product.name} - ₱${product.price}`;
                    li.style.cursor = "pointer";
                    li.addEventListener("click", () => {
                        alert(`You selected: ${product.name} - ₱${product.price}`);
                    });
                    productList.appendChild(li);
                });
            })
            .catch(error => console.error('Error:', error));
    }
});
