fetch("https://hotelbooking.stepprojects.ge/api/Rooms/GetAvailableRooms?limit=5")
  .then((pasuxi) => pasuxi.json())
  .then((saboloo) => chemiQardebi(saboloo));

let cardSection = document.getElementById("cardSection");
let input = document.getElementById("inputCard");

input.addEventListener("keyup", function () {
   cardSection.innerHTML = ""
  fetch("https://hotelbooking.stepprojects.ge/api/Rooms/GetAvailableRooms?limit=5")
    .then((pasuxi) => pasuxi.json())
    .then((saboloo) => chemiQardebi(saboloo));
});

function chemiQardebi(otaxebi) {otaxebi.forEach((otaxi) => {
  if (otaxi.name.toLowerCase().includes(input.value.toLowerCase())) {
    cardSection.innerHTML += `<div class="campus-col">
    <img src="${otaxi.images[0].source}" alt="">
    <div class="layer">
        <h3 class="didi">${otaxi.name}</h3>
        <p>price:${otaxi.pricePerNight}$ </p>
        
    </div>
</div>

`
  }
  
});
}