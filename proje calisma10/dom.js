let eskiKapi = document.querySelector("#minare");
eskiKapi.innerHTML= "Tarihi Kapi"
eskiKapi.style.color = "red"

let kapi = document.querySelector("#Kapi");
Kapi.addEventListener("click" , () => {
    alert("Tarihi binalar korunmalli")
})

let saman = document.querySelector("#ciftci");
saman.innerHTML="Konya Ovasi";
saman.style.color = "brown"

let bogaz = document.querySelector("#sehir");
bogaz.innerHTML = "Istanbul"
bogaz.style.color ="blue"

let weiter = document.querySelector("#Folgen");
weiter.type = "button";
weiter.className = "btn btn-primary";
weiter.innerText = "Folgen...";
weiter.style.fontSize = "2rem"
weiter.addEventListener("click" , () => {
    alert("Bizimle iletisime gecimiz...+49 176 231 18 72")
})
