function toast({title = '',
    message = '',
    type = 'success' ,
    duration = 3000
    }) {
    const icons = {
        success : 'fa-solid fa-square-check',
        warning : 'fa-solid fa-bomb',
        error : 'fa-solid fa-triangle-exclamation'
    }
    const main = document.getElementById('toast');
    if (main) {
        const toast = document.createElement('div');

        //auto remove toast
        const removeTime = duration + 1000 ;

        //Nếu remove bằng click rồi thì xóa id của setTimeOut đi để nó không chạy nữa
    
        const idSetTimeOut = setTimeout(() => {
            main.removeChild(toast);
        }, removeTime);  
    
        //remove toast when click
        toast.onclick = function(e) {
            if(e.target.closest('.toast__close')) {
                main.removeChild(toast);
                clearTimeout(idSetTimeOut);
            }
        }

        toast.classList.add('toast', `toast--${type}`);
        const icon = icons[type];
        const delayAnimation = (duration/1000).toFixed(2);
        toast.style.animation = `
               slideInLeft ease .5s ,
               fadeOut linear 1s ${delayAnimation}s forwards
        `;
        toast.innerHTML = `
            <div class="toast__icon">
                    <i class="${icon}"></i>
                </div>
                <div class="toast__body">
                    <h3 class="toast__title">
                        ${title}
                    </h3>
                    <p class="toast__msg">
                        ${message}
                    </p>
                </div>
                <div class="toast__close">
                    <i class="fa-solid fa-xmark"></i>
                </div
        `;
        main.appendChild(toast);
    }

}
function showSuccessToast (){
    toast({
        title : 'Success',
        message : 'Thành công rồi nha ! Chúc mừng cậuuuuuuuuuuuuu',
        type : 'success',
        duration : 5000
    });
}
function showErrorToast (){
    toast({
        title : 'Error',
        message : 'Aw ! Lỗi rồi cậu ơiiiiiiiiiiiiiiiiiiii , làm lại nha',
        type : 'error',
        duration : 4000
    });
}
function showWaringToast (){
    toast({
        title : 'Warning',
        message : 'Huh , cẩn thận cậu nhé !!!!!!!!!, cứ bình tĩnh nào',
        type : 'warning',
        duration : 6000
    });
}

