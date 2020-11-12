let select = function () {
    let selectHeader = document.querySelectorAll('.select__header');
    let selectItem = document.querySelectorAll('.select__item');

    selectHeader.forEach(item => {
        item.addEventListener('click', selectToggle)
    });

    selectItem.forEach(item => {
        item.addEventListener('click', selectChoose)
    });

    function selectToggle() {
        this.parentElement.classList.toggle('is-active');
    }

    function selectChoose() {
        let select = this.closest('.select'),
            currentText = select.querySelector('.select__current');
        currentText.innerText = this.innerText;
        select.classList.remove('is-active');

    }

};
//
// $(document).mouseup(function (e) {
//     let z=0;
//     var container = $("#selectActive");
//     if (container.has(e.target).length === 0){
//         container.hide();
//     }
// });


select()

