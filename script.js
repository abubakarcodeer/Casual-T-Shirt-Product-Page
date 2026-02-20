let productImg = document.getElementById("product_Img");
let btn = document.getElementsByClassName("btn");

Array.from(btn).forEach((button, index) => {
    button.addEventListener("click", function() {
        productImg.src = `assets/image${index + 1}.png`;
        for (let bt of btn) {
            bt.classList.remove("active");
        }
        this.classList.add("active");
    });
});
