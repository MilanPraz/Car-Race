
let bottom=5;
let left=50;
let crash=new Audio("crash.mp3");
let move=new Audio("move.mp3");
let bgmusic=new Audio("bgmusic.mp3")
let dead=new Audio("dead.mp3")
let dead2=new Audio("dead2.mp3")
let dead3=new Audio("dead3.mp3")
let dead4=new Audio("dead4.mp3")
bgmusic.volume=0.7;
move.volume=0.4;
crash.volume=0.5;


//gameover display
let gameoverdisplay=document.querySelector(".gameover")


//media query for small screen
let mediaqry=window.matchMedia('(max-width:420px)')

//for highscore
var myhighscore=document.querySelector(".highscore");
var myscore=document.querySelector(".score");

var highscore=localStorage.getItem("hscore") || 0;
myhighscore.innerHTML=`High-Score:${highscore}`

//movement button 
const bu=document.getElementById("bu");
const bd=document.querySelector("#bd");
const bl=document.querySelector("#bl");
const br=document.querySelector("#br");

bu.addEventListener("click",()=>{
    
    bottom+=5
    move.play();
    document.querySelector(".mycar").style.bottom=`${bottom}%`
    document.querySelector(".mycar").style.left=`${left}%`
});
bd.addEventListener("click",()=>{
    bottom-=5
    move.play();
    document.querySelector(".mycar").style.bottom=`${bottom}%`
    document.querySelector(".mycar").style.left=`${left}%`
   
});
bl.addEventListener("click",()=>{
    left-=5
    move.play();
    document.querySelector(".mycar").style.bottom=`${bottom}%`
    document.querySelector(".mycar").style.left=`${left}%`
   
});
br.addEventListener("click",()=>{
    left+=5
    move.play();
    document.querySelector(".mycar").style.bottom=`${bottom}%`
    document.querySelector(".mycar").style.left=`${left}%`
    
});



document.querySelector(".startbtn .btnforstart").addEventListener("click",function(){
    document.querySelector(".btnforstart").style.display='none';
    bgmusic.play();
    // document.querySelector("#road").style.animation='roadanimation infinite 20s linear ';
    document.querySelector(".enemycar1").style.animation='car1 infinite 2s linear ';
    document.querySelector(".enemycar2").style.animation='car2 infinite 5s linear ';
    document.querySelector(".enemycar3").style.animation='car3 infinite 3s linear ';
    document.querySelector(".enemycar4").style.animation='car4 infinite 6s linear ';

    if(mediaqry.matches){
        setInterval(()=>{
            let num1= Math.round(Math.random()*(69-61+1)+60)  //(max-min+1)+min
            document.querySelector(".enemycar4").style.left=`${num1}%`;
       
        },6000)
    
        setInterval(()=>{
            let num2= Math.round(Math.random()*(56-50+1)+50)  //(max-min+1)+min
            document.querySelector(".enemycar3").style.left=`${num2}%`;
        },3000)
    
    
        setInterval(()=>{
            let num3= Math.round(Math.random()*(44-39+1)+39)  //(max-min+1)+min
            document.querySelector(".enemycar2").style.left=`${num3}%`;
        },5000)
    
        setInterval(()=>{   
            let num4= Math.round(Math.random()*(25-21+1)+21)  //(max-min+1)+min
            document.querySelector(".enemycar1").style.left=`${num4}%`;
        },2000)
        
    }else{
    setInterval(()=>{
        let num1= Math.round(Math.random()*(67-60+1)+60)  //(max-min+1)+min
        document.querySelector(".enemycar4").style.left=`${num1}%`;
   
    },6000)

    setInterval(()=>{
        let num2= Math.round(Math.random()*(56-50+1)+50)  //(max-min+1)+min
        document.querySelector(".enemycar3").style.left=`${num2}%`;
    },3000)


    setInterval(()=>{
        let num3= Math.round(Math.random()*(44-39+1)+39)  //(max-min+1)+min
        document.querySelector(".enemycar2").style.left=`${num3}%`;
    },5000)

    setInterval(()=>{   
        let num4= Math.round(Math.random()*(33-27+1)+27)  //(max-min+1)+min
        document.querySelector(".enemycar1").style.left=`${num4}%`;
    },2000)
    }




    window.addEventListener("keydown",(e)=>{


        if(e.code==="ArrowUp"){
            bottom+=5
            move.play();
            
    
        }
    
        else if(e.code==="ArrowDown"){
            bottom-=5
            move.play();
        }
    
        else if(e.code==="ArrowLeft"){
            left-=5
            move.play();
        }
    
        else if(e.code==="ArrowRight"){
            left+=5
            move.play();
        }
        document.querySelector(".mycar").style.bottom=`${bottom}%`
        document.querySelector(".mycar").style.left=`${left}%`
    
    })

let n=0
    setInterval(()=>{
    myscore.innerHTML=`Score: ${n}`
    myhighscore.innerHTML=`High-Score:${highscore}`
    n+=1;

    highscore=n>highscore?n:highscore;

    localStorage.setItem("hscore",highscore);



    // we get border values of each car
    var ecar1_left= Math.abs(document.querySelector(".ecar1").getBoundingClientRect().left)
    var ecar1_right= Math.abs(document.querySelector(".ecar1").getBoundingClientRect().right)
    var ecar1_top= Math.abs(document.querySelector(".ecar1").getBoundingClientRect().top)
    var ecar1_bottom= Math.abs(document.querySelector(".ecar1").getBoundingClientRect().bottom)
    
    var ecar2_left= Math.abs(document.querySelector(".ecar2").getBoundingClientRect().left)
    var ecar2_right= Math.abs(document.querySelector(".ecar2").getBoundingClientRect().right)
    var ecar2_top= Math.abs(document.querySelector(".ecar2").getBoundingClientRect().top)
    var ecar2_bottom= Math.abs(document.querySelector(".ecar2").getBoundingClientRect().bottom)
    
    var ecar3_left= Math.abs(document.querySelector(".ecar3").getBoundingClientRect().left)
    var ecar3_right= Math.abs(document.querySelector(".ecar3").getBoundingClientRect().right)
    var ecar3_top= Math.abs(document.querySelector(".ecar3").getBoundingClientRect().top)
    var ecar3_bottom= Math.abs(document.querySelector(".ecar3").getBoundingClientRect().bottom)
    
    var ecar4_left= Math.abs(document.querySelector(".ecar4").getBoundingClientRect().left)
    var ecar4_right= Math.abs(document.querySelector(".ecar4").getBoundingClientRect().right)
    var ecar4_top= Math.abs(document.querySelector(".ecar4").getBoundingClientRect().top)
    var ecar4_bottom= Math.abs(document.querySelector(".ecar4").getBoundingClientRect().bottom)
    
    var mycar_left= Math.abs(document.querySelector("#playercar").getBoundingClientRect().left)
    var mycar_right= Math.abs(document.querySelector("#playercar").getBoundingClientRect().right)
    var mycar_top= Math.abs(document.querySelector("#playercar").getBoundingClientRect().top)
    var mycar_bottom= Math.abs(document.querySelector("#playercar").getBoundingClientRect().bottom)
        console.log(mycar_bottom);
    if(((ecar1_left<mycar_left&&mycar_left<ecar1_right) || (ecar1_left<mycar_right && mycar_right<ecar1_right)) && ((ecar1_top<mycar_top && mycar_top<ecar1_bottom) || (ecar1_top<mycar_bottom && mycar_bottom<ecar1_bottom)))
        {
        
            // alert("over")
            gameoverdisplay.style.visibility="visible";
            crash.play();
            dead2.play();
            bgmusic.pause();
            document.querySelector(".enemycar1").style.visibility="hidden"
            document.querySelector(".enemycar2").style.visibility="hidden"
            document.querySelector(".enemycar3").style.visibility="hidden"
            document.querySelector(".enemycar4").style.visibility="hidden"
            document.querySelector(".mycar").style.visibility="hidden"
        
            setTimeout(()=>{
            location.reload();
            },3000)

        }

        if(((ecar2_left<mycar_left&&mycar_left<ecar2_right) || (ecar2_left<mycar_right && mycar_right<ecar2_right)) && ((ecar2_top<mycar_top && mycar_top<ecar2_bottom) || (ecar2_top<mycar_bottom && mycar_bottom<ecar2_bottom)))
        {
            gameoverdisplay.style.visibility="visible";
            dead.play();
            crash.play();
            bgmusic.pause();
            document.querySelector(".enemycar2").style.visibility="hidden"
            document.querySelector(".enemycar1").style.visibility="hidden"
            document.querySelector(".enemycar3").style.visibility="hidden"
            document.querySelector(".enemycar4").style.visibility="hidden"
            document.querySelector(".mycar").style.visibility="hidden"

            setTimeout(()=>{
                location.reload();
                },1600)

            
        }

        if(((ecar3_left<mycar_left&&mycar_left<ecar3_right) || (ecar3_left<mycar_right && mycar_right<ecar3_right)) && ((ecar3_top<mycar_top && mycar_top<ecar3_bottom) || (ecar3_top<mycar_bottom && mycar_bottom<ecar3_bottom)))
        {
            gameoverdisplay.style.visibility="visible";
            dead3.play();
            crash.play();
            bgmusic.pause();
            document.querySelector(".enemycar3").style.visibility="hidden"
            document.querySelector(".enemycar1").style.visibility="hidden"
            document.querySelector(".enemycar2").style.visibility="hidden"
            document.querySelector(".enemycar4").style.visibility="hidden"
            document.querySelector(".mycar").style.visibility="hidden"

            setTimeout(()=>{
                location.reload();
                },5800)

          
        }

        if(((ecar4_left<mycar_left&&mycar_left<ecar4_right) || (ecar4_left<mycar_right && mycar_right<ecar4_right)) && ((ecar4_top<mycar_top && mycar_top<ecar4_bottom) || (ecar4_top<mycar_bottom && mycar_bottom<ecar4_bottom)))
        {
            gameoverdisplay.style.visibility="visible";
            dead4.play();
            crash.play();
            bgmusic.pause();
            document.querySelector(".enemycar4").style.visibility="hidden"
            document.querySelector(".enemycar3").style.visibility="hidden"
            document.querySelector(".enemycar2").style.visibility="hidden"
            document.querySelector(".enemycar1").style.visibility="hidden"
            document.querySelector(".mycar").style.visibility="hidden"

            setTimeout(()=>{
                location.reload();
                },4000)
            
        }

        if(mediaqry.matches){
            if(mycar_left<92 || mycar_right>320/*700*/ ||mycar_bottom<0 ||mycar_top>790){
                document.querySelector(".mycar").style.visibility="hidden"
                document.querySelector(".mycar").style.visibility="hidden"

                gameoverdisplay.style.visibility="visible";
                crash.play();
                dead.play();
                bgmusic.pause();
                setTimeout(()=>{
                    location.reload();
                    },1600)
    
                
               
            }

        }
        else if(mycar_left<382 || mycar_right>983/*700*/ ||mycar_bottom<0 ||mycar_top>550){
            document.querySelector(".mycar").style.visibility="hidden"
            document.querySelector(".mycar").style.visibility="hidden"

            gameoverdisplay.style.visibility="visible";
            crash.play();
            dead.play();
            bgmusic.pause();
            setTimeout(()=>{
                location.reload();
                },1600)

            
           
        }

    },100)
})


