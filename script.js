let numbers=document.querySelectorAll("#numbers button")
let operators=document.querySelectorAll("#operators button")
let operatorsDiv=document.querySelector("#operators")
let screen=document.querySelector("#screen p")
let equal=document.querySelector("#equal")
let clear=document.querySelector("#clear")
let del=document.querySelector("#delete")

let operate=((operator,int1,int2)=>{
    if(operator==="+")
        return int1+int2
    else if(operator==="-")
        return int1-int2
    else if(operator==="*")
        return int1*int2
    else if(operator==="/")
        return int1/int2
})

for(let i=0;i<numbers.length;i++){
     numbers[i].addEventListener("click",()=>{
    screen.innerHTML+=`${numbers[i].innerHTML}`
})

    }
let count=0
operatorsDiv.addEventListener("click",()=>{
        count++
})
for(let i=0;i<operators.length;i++){
    operators[i].addEventListener("click",()=>{
        console.log(count)
        if(count<2)
        {count++
        screen.innerHTML+=` ${operators[i].innerHTML} `}
        else{
            let int1,int2,array,op
            array=screen.innerHTML.split(" ")
            console.log(array)
            int1=parseInt(array[0])
            op=array[1]
            int2=(parseInt(array[2]))
            screen.innerHTML=`${operate(op,int1,int2)} ${operators[i].innerHTML} `
            count=1
        }
    })
  
}

equal.addEventListener("click",()=>{
    let int1,int2,array,op
    array=screen.innerHTML.split(" ")
    if(count>=2){
        int1=parseInt(array[0])
        op=array[1]
        int2=(parseInt(array[2]))
        screen.innerHTML=`${operate(op,int1,int2)}`
        count=1
        }

})   
del.addEventListener("click",()=>{
    let content=screen.innerHTML
    if(content[content.length-1]===" ")
       { 
           content=content.split(" ")
           count=0
           screen.innerHTML=content[0]
           console.log(screen.innerHTML)

           
    }
    else
     {   screen.innerHTML=content.slice(0,content.length-1)
        console.log(screen.innerHTML)

    }
    
})
clear.addEventListener("click",()=>{
    screen.innerHTML=""
    count=0
})



