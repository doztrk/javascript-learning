/* 
        console.log(new Date().toLocaleTimeString());

        setInterval(()=> {
            document.querySelector("p").innerHTML = new Date().toLocaleTimeString();
        },1000) 
        setInterval(()=>{
            document.querySelector("#hour").innerText = new Date().getHours();
            document.querySelector("#minute").innerText = new Date().getMinutes();
            document.querySelector("#second").innerText = new Date().getSeconds();
        }) 
*/

const setClock = () => {
  document.getElementById("hour").innerHTML = new Date().getHours();
  document.getElementById("minute").innerHTML = new Date().getMinutes().toString().padStart(2, "0");
  document.getElementById("second").innerHTML = new Date().getSeconds().toString().padStart(2, "0");
};

setInterval(() => setClock(), 1000);
