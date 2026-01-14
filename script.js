let btn1=document.getElementById("btn1")
    let btn2=document.getElementById("btn2")
    let copyDiv=document.querySelector(".copyCode")
    let rgb1="#000";
    let rgb2="#fff"
    const hexValues=()=>{
        let myhexValues="0123456789abcdef"
        let colors="#";
        for(let i=0;i<6;i++){
           colors=colors+ myhexValues[Math.floor(Math.random()*16)]
        }
        return colors;
    }

    const handlebtn1=()=>{
    rgb1=hexValues()
    btn1.textContent=rgb1
    document.body.style.backgroundImage=`linear-gradient(to right,${rgb1},${rgb2})`
    copyDiv.innerText=`background-image:linear-gradient(to right,${rgb1},${rgb2})`
    }

    const handlebtn2=()=>{
        rgb2=hexValues();
        btn2.textContent=rgb2
       document.body.style.backgroundImage=`linear-gradient(to right,${rgb1},${rgb2})`
       copyDiv.innerText=`background-image: linear-gradient(to right,${rgb1},${rgb2})` 
    }
    btn1.addEventListener("click",handlebtn1)
    btn2.addEventListener("click",handlebtn2)

    copyDiv.addEventListener("click",()=>{
        navigator.clipboard.writeText(copyDiv.innerText)
        alert("copied your text" )
    })
    