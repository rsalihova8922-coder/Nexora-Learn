console.log("🚀 Nexora Learn іске қосылды");

/* --------------------------
   NEXO CHAT
---------------------------*/

function askNexo() {

    let input = document.getElementById("userQuestion");

    let chat = document.getElementById("chatBox");

    if (!input || input.value.trim() === "") return;

    let question = input.value;

    chat.innerHTML += `
        <div class="user-msg">${question}</div>
    `;

    let answer = "";

    let q = question.toLowerCase();

    if (q.includes("ақпарат")) {

        answer = "Ақпарат — қоршаған орта туралы мәлімет. Ол мәтін, сурет, дыбыс және бейне түрінде беріледі.";

    }

    else if (q.includes("мысал")) {

        answer = "Мысалы: кітап, музыка, сурет, бейнеролик.";

    }

    else if (q.includes("оқу мақсаты")) {

        answer = "Бұл сабақтың оқу мақсаты: 5.2.1.1 Ақпараттың түрлерін ажырату.";

    }

    else {

        answer = "Жақсы сұрақ 👍 Бұл туралы теория бөлімін қайта қарап көр. Қажет болса мұғалімнен сұра немесе келесі сұрағыңды нақтырақ жаз.";

    }

    setTimeout(function(){

        chat.innerHTML += `
            <div class="bot-msg">${answer}</div>
        `;

        chat.scrollTop = chat.scrollHeight;

    },600);

    input.value="";

}

/* --------------------------
   ENTER
---------------------------*/

document.addEventListener("keydown",function(e){

    if(e.key==="Enter"){

        askNexo();

    }

});

/* --------------------------
   10 ҰПАЙЛЫҚ БАҒАЛАУ
---------------------------*/

function calculateScore(){

    let score=0;

    let checks=document.querySelectorAll(".score");

    checks.forEach(function(item){

        if(item.checked){

            score++;

        }

    });

    score=score+6;

    if(score>10){

        score=10;

    }

    document.getElementById("resultScore").innerHTML="Ұпай : "+score+" / 10";

    if(score==10){

        alert("🏆 Өте жақсы! Сен 10 ұпай жинадың!");

    }

}
