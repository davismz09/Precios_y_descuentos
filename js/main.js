// INPUTS PARA MOSTRAR O DIGITAR INFORMACIÓN PARA LAS OPERACIONES
const inputPrice = document.getElementById("inputPrice");
const inputDiscount = document.getElementById("inputDiscount");
const resultPrice = document.getElementById("resultPrice");
const inputCoupons = document.getElementById("inputCouponsDiscount");
const labelDiscount = document.getElementById("labelDiscount");

// SECTIONES O BOTONES PARA OCULTAR O MOSTRAR
const hiddingButton = document.getElementById("hiddingButton");
const buttonHidden = document.getElementById("buttonHidden");
const containerHidden = document.getElementById("containerCoupons");
const hiddenButtonCalculatePrice = document.getElementById(
  "hiddenButtonCalculatePrice",
);
const buttonClean = document.getElementById("buttonClean");

hiddingButton.addEventListener("click", () => {
  labelDiscount.innerText = "Su descuento es de:";

  inputDiscount.setAttribute("disabled", "");

  hiddingButton.classList.add("hidden");
  buttonHidden.classList.remove("hidden");
  buttonHidden.classList.add("visible");
  containerHidden.classList.add("active");
  hiddenButtonCalculatePrice.classList.add("hidden");
  buttonClean.classList.add("flexEnd");
});

const clean = () => {
  labelDiscount.innerText = "Escriba el descuento de tu producto:";
  inputPrice.value = "";
  inputDiscount.value = "";
  resultPrice.value = "";
  inputCoupons.value = "";

  inputDiscount.removeAttribute("disabled");

  hiddingButton.classList.remove("hidden");
  buttonHidden.classList.remove("visible");
  buttonHidden.classList.add("hidden");
  containerHidden.classList.remove("active");
  hiddenButtonCalculatePrice.classList.remove("hidden");
  buttonClean.classList.remove("flexEnd");
};

function calcularPrecioConDescuento(precio, descuento) {
  const porcentajeDelPrecioConDescuento = 100 - descuento;
  const precioConDescuento = (precio * porcentajeDelPrecioConDescuento) / 100;
  return precioConDescuento;
}

const priceWithDiscount = () => {
  const priceValue = inputPrice.value;
  const discountValue = inputDiscount.value;
  const precioConDescuento = calcularPrecioConDescuento(
    priceValue,
    discountValue,
  );

  if (!(discountValue === "") && !(priceValue === "")) {
    if (discountValue > 0 && priceValue > 0 && discountValue <= 100) {
      resultPrice.value = `$${precioConDescuento}`;
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "No se admiten cantidades negativas o descuentos mayores al 100%, intentalo de nuevo, ",
      });
    }
  } else {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Rellene todos los campos, por favor.",
    });
  }
};

const couponsButton = () => {
  const couponsValue = inputCoupons.value;
  const priceValue = inputPrice.value;
  const coupons = [
    "JuanDc_es_Batman",
    "pero_no_le_digas_a_nadie",
    "es_un_secreto",
  ];

  let discountWithCoupon;
  if (!(priceValue == "")) {
    if (coupons.includes(couponsValue)) {
      switch (couponsValue) {
        case coupons[0]: //JuanDc_es_Batman
          discountWithCoupon = 15;
          inputDiscount.value = discountWithCoupon;
          break;
        case coupons[1]: //pero_no_le_digas_a_nadie
          discountWithCoupon = 30;
          inputDiscount.value = discountWithCoupon;
          break;
        case coupons[2]: //es_un_secreto
          discountWithCoupon = 25;
          inputDiscount.value = discountWithCoupon;
          break;
      }
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Su cupón no es válido, o no ha elegido uno",
      });
    }
  } else {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: 'Rellene el campo de "precio de su producto"',
    });
  }
};
