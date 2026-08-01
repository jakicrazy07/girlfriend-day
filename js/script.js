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

// Ambil elemen secara aman
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

  // Foto baru diupdate SAAT galeri dibuka agar tidak error di awal
  updatePhoto();
}

function updatePhoto(){
  // Memastikan elemen galeri ada sebelum diubah kodenya
  if (!photo || !caption || !counter) return;

  photo.style.opacity = "0";
  photo.style.transform = "scale(.96)";

  setTimeout(()=>{
    photo.src = photos[index];
    caption.textContent = captions[index];
    counter.textContent = (index + 1) + " / " + photos.length;

    photo.style.opacity = "1";
    photo.style.transform = "scale(1)";
  }, 200);
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
  }, 8000);
}

function createHeart() {
  const heartsContainer = document.getElementById("hearts");
  if (!heartsContainer) return; // Mencegah error jika elemen wadah hati belum dimuat

  const heart = document.createElement("div");

  heart.className = "heart";
  // Diubah ke emoji hati hitam sesuai keinginan Anda agar warnanya konsisten hitam pekat
  heart.innerHTML = "🖤"; 

  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = (15 + Math.random() * 20) + "px";
  heart.style.animationDuration = (5 + Math.random() * 4) + "s";

  heartsContainer.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 9000);
}

// Menjalankan efek hati jatuh
setInterval(createHeart, 300);
