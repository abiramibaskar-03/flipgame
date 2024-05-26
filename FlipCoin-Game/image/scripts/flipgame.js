const html=`
<button class="btn js-btn1"><img  class="headsidecoin" src="image/headside.jpg"></button>
<button class="btn js-btn2"><img class="tailsidecoin" src="image/tailside.jpg"></button>
<button class="reset-button" 
onclick="localStorage.removeItem('score')">RESET</button>
`;

document.querySelector('.alignment').innerHTML=html;
// also use this method to do EVENTLISTENER -->simple method


/*let coinName='HEAD'--> we can also use this method
const btn1=document.querySelector('.js-btn1')
btn1.addEventListener('click',()=>{
  //flipcoingame(`${coinName}`);
  flipcoingame('HEAD');
});


const btn2=document.querySelector('.js-btn2')
btn2.addEventListener('click',()=>{
  //flipcoingame(`${coinName}`);
  flipcoingame('TAIL');
  //play();
});*/

const btnElement=document.querySelectorAll('.btn');
btnElement.forEach((btnitem,index)=>{
  btnitem.addEventListener('click',()=>{
    if(index===0){
     flipcoingame('HEAD');
    }
     if(index===1){
      flipcoingame('TAIL');
    }
  });
});

let result='';
  
function flipcoin(){

  const randomCoin=Math.random();
  if(randomCoin<0.5){
   result='HEAD';
  }
  else{
    result='TAIL'
  }
  return result;
}
let score= JSON.parse(localStorage.getItem('score'))
if(score===null){
  score={
    win:0,
    loss:0
  };
}

function flipcoingame(coin){
  const coins=flipcoin();
  if(coin==='HEAD'){      
    if(coins==='HEAD'){
      score.win+=1;
    }
    else{
      score.loss+=1;
    }
  }
 else if(coin==='TAIL'){
      if(coins==='TAIL'){
       score.win+=1;
     }
     else{
       score.loss+=1;
     }
  }
 localStorage.setItem('score',JSON.stringify(score));
 
 document.querySelector('.js-score').innerHTML=`<p class="coin-title">you pick:${coin}   computer pick:${result} <br>
  <p>win: ${score.win} losses:${score.loss}</p>
  </p> `
}
  