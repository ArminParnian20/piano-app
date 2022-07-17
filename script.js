let btn=document.querySelectorAll('.container div');
var notes=[new Audio('./1.mp3'),
           new Audio('./2.mp3'),
           new Audio('./3.mp3'),
           new Audio('./4.mp3'),
           new Audio('./5.mp3'),
           new Audio('./6.mp3'),
           new Audio('./7.mp3'),
           new Audio('./8.mp3'),
           new Audio('./9.mp3')]
btn.forEach((b,index)=>{
    b.addEventListener("mouseenter",()=>notes[index].play())
})
