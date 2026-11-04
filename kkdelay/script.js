(function () {
  var menuButton = document.querySelector(".menu-toggle");
  var navigation = document.querySelector(".site-nav");

  if (menuButton && navigation) {
    menuButton.addEventListener("click", function () {
      var isOpen = menuButton.getAttribute("aria-expanded") === "true";
      menuButton.setAttribute("aria-expanded", String(!isOpen));
      navigation.classList.toggle("is-open", !isOpen);
    });

    navigation.addEventListener("click", function (event) {
      if (event.target.closest("a")) {
        menuButton.setAttribute("aria-expanded", "false");
        navigation.classList.remove("is-open");
      }
    });
  }

  var dialog = document.querySelector(".image-dialog");
  var dialogImage = dialog && dialog.querySelector("img");
  var dialogCaption = dialog && dialog.querySelector("p");
  var closeButton = dialog && dialog.querySelector(".dialog-close");

  if (!dialog || typeof dialog.showModal !== "function") {
    return;
  }

  document.querySelectorAll(".gallery-open").forEach(function (button) {
    button.addEventListener("click", function () {
      var image = button.querySelector("img");
      dialogImage.src = image.src;
      dialogImage.alt = image.alt;
      dialogCaption.textContent = button.closest("figure").querySelector("figcaption").textContent.trim();
      dialog.showModal();
      closeButton.focus();
    });
  });

  closeButton.addEventListener("click", function () {
    dialog.close();
  });

  dialog.addEventListener("click", function (event) {
    if (event.target === dialog) {
      dialog.close();
    }
  });
})();
