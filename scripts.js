document.addEventListener("DOMContentLoaded", function () {
  const blogButton = document.getElementById("btn_blog");
  const pricingButton = document.getElementById("btn_pricing");
  const getstartedbtn = document.getElementById("btn_get_started");
  const seehowitworks = document.getElementById("btn_see");
  const seehowitworks2 = document.getElementById("see_btn");

  if (blogButton) {
    blogButton.addEventListener("click", function () {
      window.scrollTo({ top: 5581, behavior: "smooth" });
    });
  }

  if (pricingButton) {
    pricingButton.addEventListener("click", function () {
      window.scrollTo({ top: 1952, behavior: "smooth" });
    });
  }

  if (getstartedbtn) {
    getstartedbtn.addEventListener("click", function () {
      window.scrollTo({ top: 1099, behavior: "smooth" });
    });
  }

  if (seehowitworks) {
    seehowitworks.addEventListener("click", function () {
      window.scrollTo({ top: 3400, behavior: "smooth" });
    });
  }

  if (seehowitworks2) {
    seehowitworks2.addEventListener("click", function () {
      window.scrollTo({ top: 3400, behavior: "smooth" });
    });
  }
});


