document.addEventListener('click', function (e) {
  const ripple = document.createElement('div');
  ripple.classList.add('ripple-effect');
  ripple.style.left = `${e.clientX - 25}px`;
  ripple.style.top = `${e.clientY - 25}px`;
  document.body.appendChild(ripple);
  setTimeout(() => ripple.remove(), 600);
});
document.querySelectorAll('img').forEach(img => {
  img.style.cursor = 'pointer';
  img.addEventListener('click', () => {
    const overlay = document.createElement('div');
    overlay.style.position = 'fixed';
    overlay.style.top = 0;
    overlay.style.left = 0;
    overlay.style.width = '100vw';
    overlay.style.height = '100vh';
    overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
    overlay.style.display = 'flex';
    overlay.style.justifyContent = 'center';
    overlay.style.alignItems = 'center';
    overlay.style.zIndex = 1000;

    const zoomImg = document.createElement('img');
    zoomImg.src = img.src;
    zoomImg.style.maxWidth = '80%';
    zoomImg.style.maxHeight = '80%';
    zoomImg.style.boxShadow = '0 0 15px #fff';

    overlay.appendChild(zoomImg);
    document.body.appendChild(overlay);

    overlay.addEventListener('click', () => {
      document.body.removeChild(overlay);
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  Object.assign(loader.style, {
    position: "fixed", top: 0, left: 0, width: "100%", height: "100%",
    background: "#fff", display: "flex", alignItems: "center",
    justifyContent: "center", zIndex: 9999, transition: "opacity 4000s"
  });
  Object.assign(loaderText.style, {
    fontSize: "2.5rem", fontWeight: "bold", color: "#d63384"
  });
  setInterval(() => loaderText.style.opacity = loaderText.style.opacity === "1" ? "0.5" : "1", 500);
});
window.addEventListener("load", () => {
  loader.style.opacity = "0";
  setTimeout(() => loader.remove(), 500);
});