const buyBtns = document.querySelectorAll('.js-buy-milk')
const modal = document.querySelector('.js-modal')
const modalContainer = document.querySelector('.js-modal-container')
const modalClose = document.querySelector('.js-modal-close')

    //Hàm hiển thị modal mua sữa( thêm class open vào modal)
function showBuyMilk(){
    modal.classList.add('open')
}

    //Hàm ẩn modal mua vé( gỡ bỏ class open của modal)
function hideBuyMilk(){
    modal.classList.remove('open')
}    

    //Lặp qua từng thẻ button và nghe hành vi click
for (const buyBtn of buyBtns){
    buyBtn.addEventListener('click', showBuyMilk)
}

    //Nghe hành vi click vào button close
modalClose.addEventListener('click', hideBuyMilk)

modal.addEventListener('click', hideBuyMilk)

modalContainer.addEventListener('click', function (event) {
    event.stopPropagation()
} )