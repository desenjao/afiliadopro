
  window.addEventListener("DOMContentLoaded", function () {
    const image = document.getElementById("main-image");
    const loader = document.getElementById("image-loader");

    // Força carregamento (se quiser garantir que a imagem já esteja carregando antes da transição)
    const preload = new Image();
    preload.src = image.src;

    // Aguarda 3 segundos
    setTimeout(() => {
      loader.style.display = "none";
      image.style.opacity = "1";
    }, 1000);
  });



