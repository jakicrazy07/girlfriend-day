const photos = [
  "foto1.jpg",
  "foto2.jpg",
  "foto3.jpg",
  "foto4.jpg",
  "foto5.jpg",
  "foto6.jpg"
];

const captions = [
  "pap cantikk dari kamuu💕",
  "mukanya lucuu banget cintaa✨",
  "wajah gemesnyaa kamuu🌹",
  "senyuman indahh kamuu😖",
  "cantikk cekali, bidadarii🤍",
  "kamuu lucuu cekalii😣"
];

let index = 0;

const photo = document.getElementById("photo");
const caption = document.getElementById("caption");
const counter = document.getElementById("counter");

function openGallery() {

const bgm = document.getElementById("bgm");

if (bgm) {
    bgm.currentTime = 0;
    bgm.play().catch(function(err){
        console.log(err);
    });
}

document.getElementById("welcome").style.display = "none";
document.getElementById("gallery").style.display = "flex";
updatePhoto();

}

function updatePhoto(){

photo.style.opacity = "0";
photo.style.transform = "scale(.96)";

setTimeout(()=>{

photo.src = photos[index];
caption.textContent = captions[index];
counter.textContent = (index + 1) + " / " + photos.length;

photo.style.opacity = "1";
photo.style.transform = "scale(1)";

},200);

}

function nextPhoto() {
  if (index < photos.length - 1) {
    index++;
    updatePhoto();
  } else {
    document.getElementById("gallery").style.display = "none";
    document.getElementById("letter").style.display = "flex";
  }
}

function prevPhoto() {
  if (index > 0) {
    index--;
    updatePhoto();
  }
}

function replay(){

document.getElementById("letter").style.display = "none";

document.getElementById("goodbye").style.display = "flex";

setTimeout(()=>{

document.getElementById("goodbye").style.display = "none";

document.getElementById("welcome").style.display = "flex";

index = 0;

updatePhoto();

},8000);

}

function createHeart() {
  const heart = document.createElement("div");

  heart.className = "heart";
  heart.innerHTML = "❤";

  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = (15 + Math.random() * 20) + "px";
  heart.style.animationDuration = (5 + Math.random() * 4) + "s";

  document.getElementById("hearts").appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 9000);
}

setInterval(createHeart, 300);

updatePhoto();
