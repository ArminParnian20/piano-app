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
notes.map(n=>n.loop=true)
btn.forEach((b,index)=>{
    b.addEventListener("touchstart",()=>notes[index].play())
    b.addEventListener("touchend",()=>notes[index].pause())
    b.addEventListener("touchcancel",()=>notes[index].pause())
})
