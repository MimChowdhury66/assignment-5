
let totalSeat = 8;
let count = 0;
let grandAmount = 0;
let totalAmount = 0;
const allBtn = document.getElementsByClassName('btnText');

for (const btn of allBtn) {
    btn.addEventListener('click', function (e) {


        btn.classList.add('bg-[#1DD100]');
        btn.classList.add('text-white');
        if (btn.classList.contains('bg-[#1DD100]')) {
            btn.disabled = true;
            btn.style.background = '#1DD100';
            btn.style.color = 'white';
            // return btn;
        }


        count = count + 1;
        totalSeat = totalSeat - 1;
        document.getElementById('seat-count').innerText = count;
        document.getElementById('total-seat').innerText = totalSeat;

        if (totalSeat > 4) {




        }
        else {
            document.getElementById('A1').disabled = true
            document.getElementById('A2').disabled = true
            document.getElementById('A3').disabled = true
            document.getElementById('A4').disabled = true
            document.getElementById('B1').disabled = true
            document.getElementById('B2').disabled = true
            document.getElementById('B3').disabled = true
            document.getElementById('B4').disabled = true

        }




        const selectedContainer = document.getElementById('selected-item');
        const li = document.createElement('li');
        const p = document.createElement('p');
        p.innerText = btn.innerText;
        const p2 = document.createElement('p');
        p2.innerText = 'Economy';
        const p3 = document.createElement('p');
        p3.innerText = '550';
        li.appendChild(p)
        li.appendChild(p2)
        li.appendChild(p3)

        selectedContainer.appendChild(li)



        const totalPrice = document.getElementById('total-price').innerText;
        const convertedTotalPrice = parseInt(totalPrice);
        document.getElementById('total-price').innerText = convertedTotalPrice + 550;
        console.log(typeof convertedTotalPrice)

        totalAmount = convertedTotalPrice + 550;

        // totalAmount += totalPrice;
        console.log(totalAmount);


        const grandTotal = document.getElementById('grand-total').innerText;
        const convertedGrandTotal = parseInt(grandTotal);

        document.getElementById('grand-total').innerText = convertedGrandTotal + 550;

    })

}



function continueFunction() {
    window.location.reload();
}

function remove() {
    const deleteCoupon = document.getElementById('coupon-sec');
    deleteCoupon.classList.add('hidden');

    const discountPrice = document.getElementById('discount-sec');
    discountPrice.classList.remove('hidden');
}


const applyBtn = document.getElementById('apply-btn');
applyBtn.addEventListener('click', function () {
    // console.log('click')



    document.getElementById('A1').disabled = true
    document.getElementById('A2').disabled = true
    document.getElementById('A3').disabled = true
    document.getElementById('A4').disabled = true
    document.getElementById('B1').disabled = true
    document.getElementById('B2').disabled = true
    document.getElementById('B3').disabled = true
    document.getElementById('B4').disabled = true



    const inputElement = document.getElementById('input-field').value;
    const couponCode1 = inputElement.split(" ").join("").toUpperCase();
    const couponCode2 = inputElement;

    console.log(couponCode1);
    console.log(couponCode2);
    if (couponCode1 === "NEW15") {
        const discountAmount = document.getElementById('discount-price');
        const discount = totalAmount * 0.15;
        discountAmount.innerText = discount;
        const grand = document.getElementById('grand-total');
        const final = totalAmount - discount;
        grand.innerText = final;

    }
    else if (couponCode2 === "Couple 20") {
        const discountAmount = document.getElementById('discount-price');
        const discount = totalAmount * 0.2;
        discountAmount.innerText = discount;
        const grand = document.getElementById('grand-total');
        const final = totalAmount - discount;
        grand.innerText = final;


    }
    else {
        alert('Invalid Coupon')
    }
})