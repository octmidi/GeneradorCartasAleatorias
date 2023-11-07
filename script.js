window.addEventListener('load',function(){

    addNumeroCard();
    numCardRandom();
    paloCardRandom();
    addPalo();   


 }
)

// agrega numero de carta
function addNumeroCard(){

    let div   = document.getElementById("number");        // obtiene div central de card  
    let new_p = document.createElement("p");              // crear un parrfo  
    let num   = document.createTextNode(numCardRandom()); // crea un texto
    new_p.appendChild(num);                               // se agrega el texto al parrafo
    div.appendChild(new_p);                               // se agrega el parrafo al div
    let element = this.document.getElementsByTagName('p') // se obtiene el elemento parrafo por su tag
    element[0].style.fontSize="55px";                     // se modifica estilo del parrafo 
  }


  // egregar imagen de pinta
  function addPalo() {
    // imagen suerior
    let divTop = document.getElementById("head");
    let newImgTop = document.createElement("div");
    newImgTop.setAttribute("id", "imgTop");
    let palo_color = paloCardRandom();
  
    let image = document.createTextNode(palo_color[0]);
    newImgTop.appendChild(image);
    divTop.appendChild(newImgTop);
    let tag = document.getElementById("imgTop");
    tag.style.color = palo_color[1];
  
    // imagen inferior
    let divBottom = document.getElementById("foot");
    let newImgBottom = document.createElement("div");
    newImgBottom.setAttribute("id", "imgInvert");
    let imgBottom = document.createTextNode(image.textContent);
    newImgBottom.appendChild(imgBottom);
    divBottom.appendChild(newImgBottom); // agrega id a img
    let element = document.getElementById("imgInvert");
    element.style.transform = "rotate(180deg)";
    element.style.color = tag.style.color;
  }
  
//numero aleatorio
function numCardRandom(){

   let NumCard = Math.floor(Math.random() * 13) + 1;

   switch (NumCard){
   case 1: 
     NumCard = 'A';
     break;
   case 11:
     NumCard = 'J';
     break;
   case 12: 
     NumCard = 'Q';
     break;
   case 13:
     NumCard = 'K';
     break;
   }
     return NumCard;

}

//pinta alaeatoria
function paloCardRandom() {
  let palo = "";
  palo = Math.floor(Math.random() * 4) + 1;
  switch (palo) {
    case 1:
      palo = "♦";
      color = "red";
      break;
    case 2:
      palo = "♥";
      color = "red";
      break;
    case 3:
      palo = "♠";
      color = "black";
      break;
    case 4:
      palo = "♣";
      color = "black";
      break;
  }
  let palocolor= [palo, color]
  return palocolor;
}


// button new card
function NewCard(){
    location.reload();
    setTimeout(function(){   //llama la funcion timer para partir de cero al pedir nueva carta
      NewCard();
    }, 10000);

}

// timer
setTimeout(function(){
  NewCard();
  }, 10000);


  let h = 0;
  let m = 0;
  let s = 0;

 // cronometro  
function chronometer(){

     s++;
  if(s > 59){m++;s=0;}
  if(m > 59){h++;m=0;}
  if(h > 23){h=0}

  //format chronometer
  const formattedTime = h.toString().padStart(2, '0') + ':' +
                        m.toString().padStart(2, '0') + ':' +
                        s.toString().padStart(2, '0');

// agrega cronometro al id del label
  document.getElementById("time").innerHTML = formattedTime
}

// ejecuta la funcion cronometro cada 1 segundo
setInterval(chronometer, 1000);


