// Loading Screen

window.onload = function(){

setTimeout(function(){

document.getElementById("loader").style.display="none"
document.getElementById("app").style.display="block"

startParticles()

},2000)

}

// Chat

const chatbox = document.getElementById("chatbox")

let lastRoast = ""

// Roast Dataset

const roasts = [

"{name}, तेरे दिमाग का software अभी तक update नहीं हुआ।",

"{name}, तेरी speed देखकर snail भी शर्मिंदा हो जाए।",

"{name}, तेरी planning बिना GPS के खो जाती है।",

"{name}, तू इतना slow है कि buffering भी तुझे देखकर हंसती है।",

"{name}, तेरी coding देखकर laptop भी retirement ले ले।",

"{name}, तेरे jokes सुनकर internet disconnect हो जाए।",

"{name}, तू इतना confused है कि calculator भी resign कर दे।",

"{name}, तेरी logic ऐसी है कि Google भी search बंद कर दे।",

"{name}, तू error 404 की live example है।",

"{name}, तेरी सोच Windows XP version में अटकी है।",

"{name}, तेरे दिमाग की RAM शायद 256 MB पर अटकी हुई है।",

"{name}, तू इतना confused है कि Google भी तुझे समझ नहीं पाए।",

"{name}, तेरे ideas ऐसे हैं जैसे बिना इंटरनेट का स्मार्टफोन।",

"{name}, तेरी planning देखकर calendar भी resign कर दे।",

"{name}, तेरी thinking speed Internet Explorer से भी slow है।",

"{name}, तेरे jokes सुनकर लोग airplane mode में चले जाते हैं।",

"{name}, तू इतना lazy है कि alarm भी तुझसे हार मान जाए।",

"{name}, तेरे दिमाग का processor शायद Pentium 2 है।",

"{name}, तू इतना slow है कि loading bar भी तुझसे आगे निकल जाए।",

"{name}, तेरी coding देखकर debugger भी रोने लगे।",

"{name}, तेरी logic देखकर calculator भी hang हो जाए।",

"{name}, तेरी life का tutorial भी skip हो गया लगता है।",

"{name}, तू इतना unpredictable है कि weather app भी confuse हो जाए।",

"{name}, तेरे answers देखकर exam paper भी shock में चला जाए।",

"{name}, तेरे jokes सुनकर WiFi भी disconnect हो जाए।",

"{name}, तू ऐसा bug है जिसे developer भी fix नहीं कर पाए।",

"{name}, तेरी planning देखकर GPS भी रास्ता भूल जाए।",

"{name}, तू इतना useless है कि recycle bin भी तुझे reject कर दे।",

"{name}, तेरे दिमाग की battery हमेशा low power mode में रहती है।",

"{name}, तू इतना slow है कि turtle भी तुझे motivational speech दे।",

"{name}, तू इतना slow है कि snail भी तुझे coaching दे दे।",

"{name}, तेरी planning देखकर Google Maps भी confuse हो जाए।",

"{name}, तेरे ideas ऐसे हैं जैसे बिना battery का phone।",

"{name}, तेरी thinking देखकर calculator भी error दिखा दे।",

"{name}, तू इतना useless है कि shortcut key भी तुझे ignore करे।",

"{name}, तेरे jokes सुनकर लोग mute button ढूंढने लगते हैं।",

"{name}, तेरे brain का update शायद 2010 से pending है।",

"{name}, तू ऐसा bug है जो हर version में वापस आ जाता है।",

"{name}, तेरी logic देखकर computer भी restart मांग ले।",

"{name}, तू इतना slow है कि buffering भी bored हो जाए।",

"{name}, तेरे ideas देखकर notebook भी blank रह जाए।",

"{name}, तेरे दिमाग की speed देखकर WiFi भी शर्मिंदा हो जाए।",

"{name}, तेरे jokes सुनकर लोग airplane mode में चले जाते हैं।",

"{name}, तेरी coding देखकर keyboard भी छुट्टी मांग ले।",

"{name}, तू ऐसा notification है जिसे सब ignore कर देते हैं।",

"{name}, तेरे answers देखकर teacher भी Google search करे।",

"{name}, तेरी planning देखकर clock भी confuse हो जाए।",

"{name}, तेरे brain की storage हमेशा full रहती है — useless data से।",

"{name}, तू इतना confusing है कि puzzle भी तुझसे आसान लगे।"

]

// Auto extend dataset to 100

while(roasts.length < 100){

roasts.push(roasts[Math.floor(Math.random()*roasts.length)])

}

// Add Message

function addMessage(text,type){

const msg = document.createElement("div")

msg.className = type

msg.innerText = text

chatbox.appendChild(msg)

chatbox.scrollTop = chatbox.scrollHeight

}

// Generate Roast

function generateRoast(){

const name = document.getElementById("nameInput").value

if(name === "") return

addMessage(name,"user")

const roast = roasts[Math.floor(Math.random()*roasts.length)]

const finalRoast = roast.replace("{name}",name)

setTimeout(()=>{

typeRoast(finalRoast)

},500)

}

// Typing Animation

function typeRoast(text){

let i = 0

const msg = document.createElement("div")

msg.className = "ai"

chatbox.appendChild(msg)

function typing(){

if(i < text.length){

msg.innerHTML += text.charAt(i)

i++

setTimeout(typing,30)

}else{

lastRoast = text

updateMeter()

}

}

typing()

}

// Savage Meter

function updateMeter(){

const level = Math.floor(Math.random()*100) + 1

document.getElementById("meterBar").style.width = level + "%"

}

// Copy

function copyRoast(){

navigator.clipboard.writeText(lastRoast)

alert("Roast copied 😈")

}

// WhatsApp

function shareWhatsApp(){

const url = "https://wa.me/?text=" + encodeURIComponent(lastRoast)

window.open(url)

}

// Neon Particles

function startParticles(){

const canvas = document.getElementById("bg")

const ctx = canvas.getContext("2d")

canvas.width = window.innerWidth
canvas.height = window.innerHeight

let particles = []

for(let i=0;i<80;i++){

particles.push({

x:Math.random()*canvas.width,

y:Math.random()*canvas.height,

r:Math.random()*2,

dx:(Math.random()-0.5),

dy:(Math.random()-0.5)

})

}

function animate(){

ctx.clearRect(0,0,canvas.width,canvas.height)

particles.forEach(p=>{

ctx.beginPath()

ctx.arc(p.x,p.y,p.r,0,Math.PI*2)

ctx.fillStyle="#00f7ff"

ctx.fill()

p.x+=p.dx
p.y+=p.dy

if(p.x<0||p.x>canvas.width) p.dx*=-1
if(p.y<0||p.y>canvas.height) p.dy*=-1

})

requestAnimationFrame(animate)

}

animate()

}
