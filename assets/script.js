window.addEventListener("DOMContentLoaded", () => {
 const bgm = document.getElementById("bgm");
 const toggle = document.getElementById("musicToggle");
 const searchInput = document.getElementById("searchInput");
 const list = document.querySelectorAll("#videoList li");
 toggle.addEventListener("click", () => {
   if (bgm.paused) {
     bgm.play();
     toggle.textContent = "🔇 關閉音樂";
   } else {
     bgm.pause();
     toggle.textContent = "🎵 開啟音樂";
   }
 });
 searchInput.addEventListener("input", e => {
   const term = e.target.value.toLowerCase();
   list.forEach(li => {
     li.style.display = li.textContent.toLowerCase().includes(term) ? "block" : "none";
   });
 });
});
