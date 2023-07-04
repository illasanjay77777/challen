let final=[];
function sahoo(){
  let kiran = document.getElementById("text").value;
  if(!final.includes(kiran)){
    final.push(kiran);
    if(kiran<=50){
      Calculate();
    }
    else{
        document.getElementById('bat').innerHTML=value;
    }
  }
}
function Calculate(){
  var randNum =  (Math.floor(Math.random() * 10) + 1);
   document.getElementById('bat').innerHTML=randNum;
}
