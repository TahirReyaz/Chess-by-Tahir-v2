//Assigning variable to images and canvases by calling through IDs
var gr=document.getElementById("myCanvas");//For getting the canvas for game
var bsqi=document.getElementById("bsq");//Blue square cursor
var rsqi=document.getElementById("rsq");//Red square cursor
var img=document.getElementById("bo");//Chess board
//Now the chess peices
var wpi=document.getElementById("wp");
var wri=document.getElementById("wr");
var wbi=document.getElementById("wb");
var wkni=document.getElementById("wkn");
var wki=document.getElementById("wk");
var wqi=document.getElementById("wq");
var bpi=document.getElementById("bp"); 
var bri=document.getElementById("br");
var bbi=document.getElementById("bb");
var bkni=document.getElementById("bkn");
var bki=document.getElementById("bk");
var bqi=document.getElementById("bq");
var tr=document.getElementById("trs");//Trash

var ctx=gr.getContext("2d");
ctx.fillStyle='#FFFFFF';

var chpx=new Array(32);//For storing the x coordinate of the chess peices
var chpy=new Array(32);//For storing the y coordinate of the chess peices
var i, a=8, b=8, p, q, w, enterCounter=2, p1, p2, pname;
main();

function main()//For initialising the coordinate array and calling other functions
{
  if(enterCounter==2)
    for(i=0;i<32;i++)
    {
      chpx[i]=14+((i%8)*50);
      if((i/8)>=0&&(i/8)<1) 
        {chpy[i]=12;}
      else if((i/8)>=1&&(i/8)<2)
        {chpy[i]=62;}
      else if((i/8)>=2&&(i/8)<3)
        { chpy[i]=312;}
      else if((i/8)>=3)
        { chpy[i]=362;} 
    }
cursor();
}

function cursor()
{
  ctx.fillRect(0,0,500,500);//Erase the canvas
  out();//Draw the board and peices again
  if(b<8)   b=358;
  if(b>358) b=8;
  if(a<8)   a=358;
  if(a>358) a=8;
  ctx.drawImage(bsqi,a,b);
  if((enterCounter%2)==1)
    ctx.drawImage(rsqi,p,q);
}

function up()
{
  b=b-50;
  cursor();
}

function down()
{
  b=b+50;
  cursor();
}

function right()
{
  a=a+50;
  cursor();
}

function left()
{
  a=a-50;
  cursor();
}

function enter()
{
  enterCounter++;
  p=a;
  q=b;
  if((enterCounter%2)==1)//For checking if enter button click counter is odd
      for(i=0;i<32;i++)
      {
         if(chpx[i]==(p+6)&&chpy[i]==(q+4))
           w=i;
         ctx.drawImage(rsqi,p,q);   
      }
  if((enterCounter%2)==0)//For checking if enter button click counter is even
  {
     chpx[w]=p+6;
     chpy[w]=q+4;
     for(i=0;i<32;i++)
        if(chpx[w]==chpx[i]&&chpy[w]==chpy[i]&&w!=i)//If the position of two peices match then send older one to Trash
        {
          var rd=Math.random();
          var rdx; rdx=rd*130;
          var rd2=Math.random();
          var rdy; rdy=rd2*250;
          chpx[i]=500+rdx;
          chpy[i]=100+rdy;
        }        
  }
  if(((enterCounter/2)%2)==0)
    pname.innerHTML=p2+"\'s Turn";
  if(((enterCounter/2)%2)==1)
    pname.innerHTML=p1+"\'s Turn";
main();
}

function out()//For drawing the chess board and positioning the peices
{
  ctx.drawImage(img,10,10);//The chess board
  //White pawns
  ctx.drawImage(wpi,chpx[8],chpy[8]);
  ctx.drawImage(wpi,chpx[9],chpy[9]);
  ctx.drawImage(wpi,chpx[10],chpy[10]);
  ctx.drawImage(wpi,chpx[11],chpy[11]);
  ctx.drawImage(wpi,chpx[12],chpy[12]);
  ctx.drawImage(wpi,chpx[13],chpy[13]);
  ctx.drawImage(wpi,chpx[14],chpy[14]);
  ctx.drawImage(wpi,chpx[15],chpy[15]);
  //White Rooks
  ctx.drawImage(wri,chpx[0],chpy[0]);
  ctx.drawImage(wri,chpx[7],chpy[7]);
  //White Bishops
  ctx.drawImage(wbi,chpx[2],chpy[2]);
  ctx.drawImage(wbi,chpx[5],chpy[5]);
  //White Kinights
  ctx.drawImage(wkni,chpx[1],chpy[1]);
  ctx.drawImage(wkni,chpx[6],chpy[6]);
  //White King
  ctx.drawImage(wki,chpx[4],chpy[4]);
  //White Queen
  ctx.drawImage(wqi,chpx[3],chpy[3]);
  //Black Pawns
  ctx.drawImage(bpi,chpx[16],chpy[16]);
  ctx.drawImage(bpi,chpx[17],chpy[17]);
  ctx.drawImage(bpi,chpx[18],chpy[18]);
  ctx.drawImage(bpi,chpx[19],chpy[19]);
  ctx.drawImage(bpi,chpx[20],chpy[20]);
  ctx.drawImage(bpi,chpx[21],chpy[21]);
  ctx.drawImage(bpi,chpx[22],chpy[22]);
  ctx.drawImage(bpi,chpx[23],chpy[23]);
  //Black Rooks
  ctx.drawImage(bri,chpx[24],chpy[24]);
  ctx.drawImage(bri,chpx[31],chpy[31]);
  //Black Bishops
  ctx.drawImage(bbi,chpx[26],chpy[26]);
  ctx.drawImage(bbi,chpx[29],chpy[29]);
  //Black Knights
  ctx.drawImage(bkni,chpx[25],chpy[25]);
  ctx.drawImage(bkni,chpx[30],chpy[30]);
  //Black King
  ctx.drawImage(bki,chpx[27],chpy[27]);
  //Black Queen
  ctx.drawImage(bqi,chpx[28],chpy[28]);
}

ctx.rect(500,100,550,450);
ctx.stroke();
ctx.drawImage(tr,500,0);

//Form hiding Function
function submitForm(event){
   document.getElementById("gameDiv").className="showGame";
   //Name of players
   p1=document.getElementById("p1name").value;
   p2=document.getElementById("p2name").value;
   pname=document.getElementById("pname");
   pname.innerHTML=p1+"\'s Turn";
   event.target.parentNode.remove();
}
//To detect keypress
document.onkeydown = function(e) {
    switch (e.keyCode) {
        case 37:
          left();
          break;
        case 38:
          up();
          break;
        case 39:
          right();
          break;
        case 40:
          down();
          break;
        case 13:
          enter();
          break;
    }
  };