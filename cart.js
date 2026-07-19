// ===========================
// ZESTO CART JS
// ===========================

document.addEventListener("DOMContentLoaded", () => {

    const plusBtn = document.querySelector(".plus");
    const minusBtn = document.querySelector(".minus");
    const qty = document.getElementById("qty");

    const itemPrice = 199;
    const deliveryFee = 30;
    const discount = 20;

    let quantity = 1;

    function updateCart() {

        qty.textContent = quantity;

        const itemTotal = itemPrice * quantity;
        const total = itemTotal + deliveryFee - discount;

        const rows = document.querySelectorAll(".bill-row");

        rows[0].children[1].textContent = "₹" + itemTotal;
        rows[1].children[1].textContent = "₹" + deliveryFee;
        rows[2].children[1].textContent = "-₹" + discount;
        rows[3].children[1].textContent = "₹" + total;

    }

    plusBtn.addEventListener("click", () => {
        quantity++;
        updateCart();
    });

    minusBtn.addEventListener("click", () => {

        if (quantity > 1) {
            quantity--;
            updateCart();
        }

    });

    const checkoutBtn = document.querySelector(".checkout-btn");

    checkoutBtn.addEventListener("click", () => {

        checkoutBtn.innerHTML = "Processing...";

        checkoutBtn.disabled = true;

        setTimeout(() => {

            alert("🎉 Order Placed Successfully!");

            window.location.href = "index.html";

        }, 2000);

    });

    updateCart();

});
