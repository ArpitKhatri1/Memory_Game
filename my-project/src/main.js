import "./index.css";

//Starting


function shuffleArray(array) {
  let len = array.length,
    currentIndex;
  for (currentIndex = len - 1; currentIndex > 0; currentIndex--) {
    let randIndex = Math.floor(Math.random() * (currentIndex + 1));
    var temp = array[currentIndex];
    array[currentIndex] = array[randIndex];
    array[randIndex] = temp;
  }
}

let score = 0;


document.getElementById('score').innerHTML = score

let arr = [
  "pizza",
  "fries",
  "icecream",
  "hotdog",
  "pizza",
  "fries",
  "icecream",
  "hotdog",
];

shuffleArray(arr);

//Showing on screen the
for (let i = 0; i < arr.length; i++) {
  let cover = arr[i];
  document.getElementById(`box${i + 1}`).textContent = arr[i];
  document.getElementById(`box${i + 1}`).classList.add("hide");

  document.getElementsByClassName(`box box${i + 1}`)[0].classList.add(arr[i]);
  document
    .getElementsByClassName(`box box${i + 1}`)[0]
    .classList.add("initialcover");
}

let currentValueInside;

let count = 0;

let clickElement = null;
let clickElementparent = null;

document
  .getElementsByClassName("container")[0]
  .addEventListener("click", (event) => {
   if(event.target.classList.contains("box")){
    count++;

    if (count == 1) {
      clickElementparent = event.target;

      clickElementparent.classList.remove("initialcover");
      clickElement = clickElementparent.firstElementChild;
      

      currentValueInside = clickElement.textContent;
    }
    if (count == 2) {
      setTimeout(() => {
        count = 0;
        checkScore();
      }, 500);

      let secondParentElement = event.target;
      let secondElement = secondParentElement.firstElementChild;
      secondParentElement.classList.remove("initialcover");

      if (
        currentValueInside == secondElement.textContent &&
        clickElement.id != secondElement.id
      ) {
        score++;
        checkScore()
        
        setTimeout(() => {
          clickElementparent.classList.add("invi");
          secondParentElement.classList.add("invi");
          document.getElementById("score").innerHTML = score
        }, 500);
      } else {
        setTimeout(() => {
          clickElementparent.classList.add("initialcover");
          secondParentElement.classList.add("initialcover");
        }, 500);
      }
    }
   
   }
    

  });
  
 function checkScore(){
    if(score == 4){
      setTimeout(()=>{
        document.getElementById("win").innerHTML = "Congrats You win"
        document.getElementById('btn').classList.remove("hidden");

        document.getElementById('btn').addEventListener("click",()=>{
          playAgain();
        })

      },500)
    }
  }
  
  function playAgain(){
    location.reload()
  }
