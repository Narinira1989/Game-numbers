gsap.from("#btn", {
    opacity: 0, delay: 3, duration: 2, x: 50
})

gsap.from("#container", {
    x:-150, opacity: 0, delay: 1, duration: 3
})

const button = document.querySelector('#btn');
const input = document.querySelector('#guess');
const answer = Math.floor(Math.random() * 20 + 1);
input.addEventListener('keypress', function(e){
    if (e.keyCode === 13){
        play();
    }
})
button.addEventListener('click', play);

function play(){
    const userNumber = document.querySelector('#guess').value;
    if(userNumber < 1 || userNumber > 20) {
        Swal.fire({
            icon: 'error',
            title: 'Ой...',
            text: 'Введи число от 1 до 20!',
        })

    }
    else if (isNaN(userNumber)){
        Swal.fire({
            icon: 'error',
            title: 'Ой...',
            text: 'Нужно ввести число!',
        })
    }

    else{
        if(userNumber < answer){
            Swal.fire({
                icon: 'error',
                title: 'Попробуй число повыше!',
                text: 'Компьютер пока побеждает!',
            })
        }
        else if (userNumber > answer){
            Swal.fire({
                icon: 'error',
                title: 'Попробуй число пониже!',
                text: 'Компьютер пока побеждает!',
            })
        }

        else{
            Swal.fire({
                title: 'Победа!!!',
                imageUrl: 'https://images.unsplash.com/photo-1531686264889-56fdcabd163f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
                imageWidth: 600,
                imageHeight: 400,
                imageAlt: 'Congratulations',
            })
        }
    }
}

