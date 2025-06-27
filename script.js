let isRaining = false;
function playSong() {   
    startRotate();
    startRain()


    const audio = document.getElementById("myAudio");
    // หากเพลงกำลังเล่นอยู่ ให้รีเซ็ตกลับไปที่จุดเริ่มต้นแล้วเล่นใหม่
    if (audio.paused) {
        audio.play();
    } else {
        audio.currentTime = 0; // รีเซ็ตเพลงไปที่เริ่มต้น
        audio.play();
    }
}

function startRotate() {
    const images = document.querySelectorAll(".canDance"); // select all matching elements
  
    images.forEach(img => {
      img.classList.add("rotate-left-right");
  
      // Optional: stop rotating after 3 seconds
      setTimeout(() => {
        img.classList.remove("rotate-left-right");
      }, 75000);
    });
  }
  

function createFallingObject() {
    const obj = document.createElement("div");
    obj.classList.add("falling-object");

    // Random size between 10px - 30px
    const size = Math.random() * 20 + 10;
    obj.style.width = `${size}px`;
    obj.style.height = `${size}px`;

    // Random horizontal position
    obj.style.left = `${Math.random() * 100}vw`;

    // Random color
    obj.style.backgroundColor = `hsl(${Math.random() * 360}, 70%, 60%)`;

    // Random animation duration between 2s - 5s
    const duration = Math.random() * 3 + 2;
    obj.style.animationDuration = `${duration}s`;

    // Append and remove after animation ends
    document.body.appendChild(obj);
    obj.addEventListener("animationend", () => obj.remove());
  }

  function startRain() {
    if (isRaining) return;
    isRaining = true;

    rainInterval = setInterval(createFallingObject, 500);

    // Stop after 10 seconds
    setTimeout(() => {
      clearInterval(rainInterval);
      isRaining = false;
    }, 75000); // 10,000 ms = 10 seconds
  }
  function startRotateWhenclick(element) {
    if (!element.classList.contains("reactive")) return; // ✅ เช็คว่าเป็น class ที่เราต้องการ
  
    element.classList.remove("swing");  // ลบก่อนเพื่อให้รีเซ็ตได้
    void element.offsetWidth;           // trick เพื่อให้ animation ทำงานซ้ำได้
    element.classList.add("swing");     // เพิ่มคลาสเพื่อเล่น animation
  }
  
  