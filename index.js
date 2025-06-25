const giftBox = document.getElementById('giftBox');
const message = document.getElementById('message');
const birthdayText = document.getElementById("birthdayText");
const birthdayMusic = document.getElementById("birthdayMusic");
const containerLast = document.getElementById("container_last");
const textNext = document.getElementById('text_next');

const texts = [
  "Chúc bạn nhỏ tuổi mới nhiều niềm vui, mãi xinh đẹp, dễ thương... 🥳🔥",
  "Chúc bạn nhỏ có tất cả trừ vất vả 😎✨",
  "Mau ăn chóng lớn nữa nhớ 🎁🎉"
];

containerLast.style.display = "none"
document.getElementById('disagreeButton2').style.display = 'none';
document.getElementById('container_end').style.display = 'none';
giftBox.addEventListener('click', () => {
    giftBox.style.display = 'none';
    document.body.style.background = "linear-gradient(135deg, #ff8488, #f8c5b7)";
    setTimeout(() => {
        message.style.display = 'block';
    
        for (let i = 0; i < 50; i++) {
            const confetti = document.createElement('div');
            confetti.classList.add('confetti');
            confetti.style.left = Math.random() * 100 + 'vw';
            confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 70%, 60%)`;
            confetti.style.animationDelay = `${Math.random() * 5}s`;
            document.body.appendChild(confetti);
        }
    }, 1000);
    birthdayMusic.play();
});

function typeWriter(texts, element, textIndex = 0, i = 0) {
    if (textIndex < texts.length) {
        const text = texts[textIndex];
        if (i < text.length) {
        element.innerHTML += text.charAt(i);
        setTimeout(() => typeWriter(texts, element, textIndex, i + 1), 40);
        } else {
        setTimeout(() => {
            element.innerHTML += '<br>';
            typeWriter(texts, element, textIndex + 1);
        }, 2000);
        }
    } else {
        // Thêm gif
        setTimeout(() =>{
            text_next.style.display = "block";
        },5000);
        setTimeout(() => {
        const imgGift = document.createElement('div');
        imgGift.classList.add('img-gift');
        message.appendChild(imgGift);
        }, 1500);
    }
}

giftBox.addEventListener("click", () => {
  message.classList.remove("hidden");
  message.classList.add("show");

  setTimeout(() => {
    typeWriter(texts, birthdayText);
  }, 3500);
});

text_next.style.display = "none";

text_next.addEventListener("click", () => {
     message.style.display = "none";
     containerLast.style.display = "block";
     showMessage();
});


////// for last


const messages = [
        "Từ lần đầu gặp cậu tớ đã thấy trái tim mình không ổn.",
        "Bên cậu khiến trái tim tớ loạn nhịp.",
        "Tớ cứ nghĩ mãi... là có nên nói ra điều này.",
        "Mình cũng đã biết nhau được một thời gian rồi.",
        "Không phải quá dài nhưng cũng không quá ngắn.",
        "Đủ để tớ hiểu được phần nào con người cậu.",
        "Để tớ thấy được là mình cần cậu.",
        "Điều cuối cùng tớ muốn nói là......",
    ];

    const messageElement = document.getElementById('message2');
    const layoutElement = document.getElementById('layout');

    let index = 0;
    let wordIndex = 0;

    function showMessage() {
        messageElement.style.display = 'block';
        showText();

    }



    function showText() {
        const words = messages[index].split(' ');
        if (wordIndex < words.length) {
            messageElement.innerHTML += words[wordIndex] + ' ';
            wordIndex++;
            setTimeout(showText, 200); // Hiển thị mỗi từ sau mỗi 200ms

        } else {
            index++;
            wordIndex = 0;
            if (index < messages.length) {
                setTimeout(() => {
                    messageElement.innerHTML = '';
                    showText();
                }, 1000); // Hiển thị câu tiếp theo sau 3 giây

            } else {
                setTimeout(() => {

                    layoutElement.style.display = 'block';
//                     messageElement.innerHTML = '';

                }, 1000); // Hiển thị layout sau 3 giây khi hiển thị hết các câu

            }

        }

    }



    function agree() {
        document.getElementById('disagreeButton2').style.display = 'none';
        document.getElementById('container_last').style.display = 'none';
        document.getElementById('container_end').style.display = 'block';
    }

  function disagree() {
    document.getElementById('disagreeButton').style.display = 'none';
    document.getElementById('disagreeButton2').style.display = 'block';
}

  function disagree2() {

      const button = document.getElementById('disagreeButton2');
      const button2 = document.getElementById('agreeButton');
      var currentSize = parseInt(window.getComputedStyle(button2).getPropertyValue('font-size'));
      var newSize = currentSize + 6; // Tăng kích thước font lên 4px

      button2.style.fontSize = newSize + 'px';
      var newTop = Math.floor(Math.random() * (window.innerHeight - 50));
      var newLeft = Math.floor(Math.random() * (window.innerWidth - 50));
      button.style.top = newTop + 'px';
      button.style.left = newLeft + 'px';
  }
