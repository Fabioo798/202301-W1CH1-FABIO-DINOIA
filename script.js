
const questions = [
  {
    letter: "a",
    answer: "abducir",
    status: 0,
    question:
      "CON LA A. Dicho de una supuesta criatura extraterrestre: Apoderarse de alguien",
  },
  {
    letter: "b",
    answer: "bingo",
    status: 0,
    question:
      "CON LA B. Juego que ha sacado de quicio a todos los 'Skylabers' en las sesiones de precurso",
  },
  {
    letter: "c",
    answer: "churumbel",
    status: 0,
    question: "CON LA C. Niño, crío, bebé",
  },
  {
    letter: "d",
    answer: "diarrea",
    status: 0,
    question:
      "CON LA D. Anormalidad en la función del aparato digestivo caracterizada por frecuentes evacuaciones y su consistencia líquida",
  },
  {
    letter: "e",
    answer: "ectoplasma",
    status: 0,
    question:
      "CON LA E. Gelatinoso y se encuentra debajo de la membrana plasmática. Los cazafantasmas medían su radiación",
  },
  {
    letter: "f",
    answer: "facil",
    status: 0,
    question: "CON LA F. Que no requiere gran esfuerzo, capacidad o dificultad",
  },
  {
    letter: "g",
    answer: "galaxia",
    status: 0,
    question:
      "CON LA G. Conjunto enorme de estrellas, polvo interestelar, gases y partículas",
  },
  {
    letter: "h",
    answer: "harakiri",
    status: 0,
    question: "CON LA H. Suicidio ritual japonés por desentrañamiento",
  },
  {
    letter: "i",
    answer: "iglesia",
    status: 0,
    question: "CON LA I. Templo cristiano",
  },
  {
    letter: "j",
    answer: "jabali",
    status: 0,
    question:
      "CON LA J. Variedad salvaje del cerdo que sale en la película 'El Rey León', de nombre Pumba",
  },
  {
    letter: "k",
    answer: "kamikaze",
    status: 0,
    question:
      "CON LA K. Persona que se juega la vida realizando una acción temeraria",
  },
  {
    letter: "l",
    answer: "licantropo",
    status: 0,
    question: "CON LA L. Hombre lobo",
  },
  {
    letter: "m",
    answer: "misantropo",
    status: 0,
    question:
      "CON LA M. Persona que huye del trato con otras personas o siente gran aversión hacia ellas",
  },
  {
    letter: "n",
    answer: "necedad",
    status: 0,
    question: "CON LA N. Demostración de poca inteligencia",
  },
  {
    letter: "ñ",
    answer: "señal",
    status: 0,
    question:
      "CONTIENE LA Ñ. Indicio que permite deducir algo de lo que no se tiene un conocimiento directo.",
  },
  {
    letter: "o",
    answer: "orco",
    status: 0,
    question:
      "CON LA O. Humanoide fantástico de apariencia terrible y bestial, piel de color verde creada por el escritor Tolkien",
  },
  {
    letter: "p",
    answer: "protoss",
    status: 0,
    question:
      "CON LA P. Raza ancestral tecnológicamente avanzada que se caracteriza por sus grandes poderes psíonicos del videojuego StarCraft",
  },
  {
    letter: "q",
    answer: "queso",
    status: 0,
    question:
      "CON LA Q. Producto obtenido por la maduración de la cuajada de la leche",
  },
  { letter: "r", answer: "raton", status: 0, question: "CON LA R. Roedor" },
  {
    letter: "s",
    answer: "stackoverflow",
    status: 0,
    question: "CON LA S. Comunidad salvadora de todo desarrollador informático",
  },
  {
    letter: "t",
    answer: "terminator",
    status: 0,
    question:
      "CON LA T. Película del director James Cameron que consolidó a Arnold Schwarzenegger como actor en 1984",
  },
  {
    letter: "u",
    answer: "unamuno",
    status: 0,
    question:
      "CON LA U. Escritor y filósofo español de la generación del 98 autor del libro 'Niebla' en 1914",
  },
  {
    letter: "v",
    answer: "vikingos",
    status: 0,
    question:
      "CON LA V. Nombre dado a los miembros de los pueblos nórdicos originarios de Escandinavia, famosos por sus incursiones y pillajes en Europa",
  },
  {
    letter: "w",
    answer: "sandwich",
    status: 0,
    question:
      "CONTIENE LA W. Emparedado hecho con dos rebanadas de pan entre las cuales se coloca jamón y queso",
  },
  {
    letter: "x",
    answer: "botox",
    status: 0,
    question: "CONTIENE LA X. Toxina bacteriana utilizada en cirujía estética",
  },
  {
    letter: "y",
    answer: "peyote",
    status: 0,
    question:
      "CONTIENE LA Y. Pequeño cáctus conocido por sus alcaloides psicoactivos utilizado de forma ritual y medicinal por indígenas americanos",
  },
  {
    letter: "z",
    answer: "zen",
    status: 0,
    question:
      "CON LA Z. Escuela de budismo que busca la experiencia de la sabiduría más allá del discurso racional",
  },
];
let questionsIndex = 0;
let indexLetters = 0;
let score = 0;
let isFinished = 0;
let round = 1;
let tableRanking = document.getElementsByTagName("td");
let ranking = [
  {nickName: 'Sora', points: 22, rounds: 1},
  {nickName: 'Yorik', points: 16, rounds: 1},
  {nickName: 'ninefinger', points: 13, rounds: 1},
];






//hide rules, button and begin the game
const hideButton = (x) =>{
    x.style.display = 'none';
    document.getElementById('rules').style.display = 'none';
    
 }


//countdown
const countDown = () =>{
        
$(document).ready(function() {
    let counter = 3;

    let timer = setInterval( function() {

    $('#countdown').remove();

    let countdown = $('<span id="countdown">'+
    (counter==0?'PLAY!':counter)+'</span>');
    countdown.appendTo($('.container')); 
    setTimeout(() => {
        if (counter >-2) {
            $('#countdown').css({ 'font-size': '40vw', 'opacity': 0});
        }else{
        $('#countdown').css({ 'font-size': '10vw', 'opacity': 50});
        
        }

    },10);    
counter--;
if(counter == -2){
 clearInterval(timer);
 $('#countdown').remove();

}}, 1000);
});
}


//game interface and syntax;
const showGame = () =>{
  
  
  setTimeout(() => {
    document.getElementById('game').style.display = 'block'
    stopWatch();
}, 5000);

//show question;
const theQuestion = () => {
  let questionDisplayed = questions[questionsIndex].question;
  document.getElementById("question").innerHTML = questionDisplayed;
}

//getting user input;
document.getElementsByClassName("inputField")[0].value = '';
document.body.addEventListener('keyup', (e) => {
  if (e.key === 'Enter') {
    wordInserted(document.querySelector('.inputField').value)
    document.getElementsByClassName("inputField")[0].value = '';
  }
});

//process user answer
const wordInserted = (userAnswer) =>{
  if(userAnswer === '' || userAnswer === undefined){
    theQuestion();
    return;
  }
  switch(userAnswer.toLowerCase()){
    case questions[questionsIndex].answer:
      letters[indexLetters].style.background = ' #05be17';
      let answerCorret = "CORRECT!"
      document.getElementById("question").innerHTML = answerCorret;
      score++;
      let totalScore = "POINTS: " + score;
      document.getElementById("points").innerHTML = totalScore;
      isFinished++;
      questions[questionsIndex].status = 1;
      break;

    default:
      letters[indexLetters].style.background = 'red';
      let answerWrong = "WRONG!"
      document.getElementById("question").innerHTML = answerWrong;
      isFinished++;
      questions[questionsIndex].status = 1;
      break;
    }
  setTimeout(() => {
    nextQuestion();
  }, 250);
}

theQuestion();
}

//pasapalabra button;
const nextQuestion = () => {
  indexLetters = indexLetters +3;
  questionsIndex++;
  if(isFinished === 27){ 
    console.log(`game ended`);
    let gameEnded = "you completed the game!";
    document.getElementById("question").innerHTML = gameEnded;
    endGame();
    return;
  }

  if(questionsIndex > 26){
    round++;
    let nextRound = "ROUND: " + round;
    document.getElementById("round").innerHTML = nextRound;
    console.log("Next round");
    questionsIndex = 0;
    indexLetters = 0;
  }

    while(questions[questionsIndex].status === 1){
      questionsIndex++;
      indexLetters = indexLetters + 3;
    }
    let questionDisplayed = questions[questionsIndex].question;
    document.getElementById("question").innerHTML = questionDisplayed;
}

//pop-ups functions
function openPopup(){
  let popup = document.getElementById("popup");
  popup.classList.add("open-popup");
}

function closePopup(){
  let popup = document.getElementById("popup");
  popup.classList.remove("open-popup");
}

function restartGame(){
  location.reload();
}

//ingame timer
const stopWatch = () =>{
  const startingMinutes = 2;
  let timeGame = startingMinutes * 60;

  const conuntDownEl= document.getElementById('stopwatch');

  let gameSeconds = setInterval( function() {
    
    const minutes = Math.floor(timeGame / 60);
    let seconds = timeGame % 60;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    conuntDownEl.innerHTML = `${minutes} : ${seconds}`;
    timeGame--;

    if(timeGame < 0){
      clearInterval(gameSeconds);
      conuntDownEl.innerHTML = `GAME OVER`;
    endGame();
    }
  }, 1000);
}
    

//endgame screen
const endGame = () =>{
  document.getElementById('game').style.display = '';
  document.getElementById('content-table').style.display = 'block';
  document.getElementById('playagain').style.display = 'block';
  document.getElementById('gameover').style.display = 'block';

  ranking.push({nickName: "tu" , points: score, rounds: round});
  ranking.sort((a, b) => a.points - b.points); 
   tableRanking[1].innerHTML = ranking[3].nickName;
   tableRanking[2].innerHTML = ranking[3].points;
   tableRanking[3].innerHTML = ranking[3].rounds;
   tableRanking[5].innerHTML = ranking[2].nickName;
   tableRanking[6].innerHTML = ranking[2].points;
   tableRanking[7].innerHTML = ranking[2].rounds;
   tableRanking[9].innerHTML = ranking[1].nickName;
   tableRanking[10].innerHTML = ranking[1].points;
   tableRanking[11].innerHTML = ranking[1].rounds;
   tableRanking[13].innerHTML = ranking[0].nickName;
   tableRanking[14].innerHTML = ranking[0].points;
   tableRanking[15].innerHTML = ranking[0].rounds;
}

  
  





