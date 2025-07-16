
  window.addEventListener("load", function () {
    const image = document.getElementById("main-image");
    const loader = document.getElementById("image-loader");

    image.onload = function () {
      loader.style.display = "none";
      image.style.opacity = "1";
    };

    // Força load caso o cache já tenha carregado a imagem
    if (image.complete) {
      loader.style.display = "none";
      image.style.opacity = "1";
    }
  });

