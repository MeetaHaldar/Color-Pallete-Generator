const colorCard = document.querySelectorAll(".color-card");
const colorCards = Array.from(colorCard);
const generateBtn = document.querySelector("#generate");
const closePopup = document.querySelector(".fa-times");
const popup = document.querySelector(".popup");

const generateRandomHexColor = () => {
    let color = '#';
    for (let i = 0; i < 6; i++){
       const random = Math.random();
       const bit = Math.floor((random * 16));
       color += (bit).toString(16);
    };
    return color;
}
