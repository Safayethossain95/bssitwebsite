import React,{useEffect} from 'react'

const TestPage = () => {
    useEffect(()=>{
        const buttons = document.querySelectorAll("div.itest button");
        buttons.forEach((btn) => {
          btn.addEventListener("mouseenter", function (e) {
            let x = e.clientX - e.target.offsetLeft;
            let y = e.clientY - e.target.offsetTop;
      
            let ripples = document.createElement("span");
            ripples.style.left = x + "px";
            ripples.style.top = y + "px";
            this.appendChild(ripples);
      
            setTimeout(() => {
              ripples.remove();
            }, 1000);
          });
        });
    
      },[])
  return (
    <>
        <div className="itest">
            <span>Hello</span>
            <h1>Hello man</h1>
            <h1>Hello man</h1>
            <h1>Hello man</h1>
            <h1>Hello man</h1>
            <h1>Hello man</h1>
            <h1>Hello man</h1>
            <p>lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem </p>

            <button>Click me</button>
        </div>
    </>
  )
}

export default TestPage