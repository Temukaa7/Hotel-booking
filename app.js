
  let table = document.querySelector("table")

  fetch('https://hotelbooking.stepprojects.ge/api/Booking')
  .then(res => res.json()) .then(ukvedajavshnilebi => { 
       console.log(ukvedajavshnilebi)
    showbookeddata(ukvedajavshnilebi)
  } )
   
  function showbookeddata(Bookedlist) {
    Bookedlist.forEach(booked => {
      table.innerHTML += `<tr class="temuka3">
      <th scope="row">${booked.id}</th>
      <td>${booked.customerName}</td>
      <td>${booked.customerPhone}</td>
      <td>${booked.checkInDate}</td>
      <td>${booked.checkOutDate}</td>
      <td>${booked.totalPrice}</td>
      <td><button onclick="deletebook(${booked.id})" class=temuka3 >CANCLE BOOKING</button></td>
    </tr>`
           
    
      




    })


  }

function deletebook(myinfo) {
  fetch(`https://hotelbooking.stepprojects.ge/api/Booking/${myinfo} `,{
    method:"DELETE",
    headers:{
      "accept": "*/*"
      
    }
   
   
  })
  
 

}


fetch("https://hotelbooking.stepprojects.ge/api/Rooms/GetAvailableRooms?limit=5")
  .then((some) => some.json())
  .then((last) => chemiQardebi(last));

let cardSection = document.getElementById("cardSection");
let input = document.getElementById("inputCard");

input.addEventListener("keyup", function () {
   cardSection.innerHTML = ""
  fetch("https://hotelbooking.stepprojects.ge/api/Rooms/GetAvailableRooms")
    .then((some) => some.json())
    .then((last) => chemiQardebi(last));
});

function chemiQardebi(rooms) {rooms.forEach((room) => {
  if (room.name.toLowerCase().includes(input.value.toLowerCase())) {
    cardSection.innerHTML += `<div class="campus-col">
    <img src="${room.images[0].source}" alt="">
    <div class="layer">
        <h3 class="didi">${room.name}</h3>
        <p>price:${room.pricePerNight}$</p>
        
    </div>
</div>

`
  }
  
});
}


const galleryContainer = document. querySelector (' gallery-container');
const galleryControlsContainer = document. querySelector(' gallery-controls');
const galleryControls = ['previous', 'next'];
const galleryItems = document. querySelectorAl1(' gallery-item');



class Carousel {  

  constructor (container, items, controls){
  this.carouselContainer = container;
  this.carouselControls = controls;
  this.carouselArray = [...items];
  }

  updateGallery ( ){
  this.carouselArray.forEach(el => {
  el.classList.remove ('gallery-item-1');
   el. classList.remove ('gallery-item-2');
    el.classList.remove ('gallery-item-3');
     el.classList.remove ('gallery-item-4');
      el.classList.remove ('gallery-item-5');

          
  });
  this.carouselArray.slice(0, 5).forEach((el , i) => {
    el.classList.add(`gallery-item-${i+1}`);
    
    });

  }


  setCurrentState (direction){
    if (direction.className == 'gallery-controls-previous'){
        this.carouselArray.unshift(this.carouselArray.pop());
    }else{
    this.carouselArray.push(this.carouselArray.shift());
    }
    this.updateGallery();
  }


setControls(){
   this.carouselControls.forEach(control => {
    galleryControlsContainer.appendChild(document.createElement('button')).className = `gallery-controls-${control}`;
    document.querySelector(`.gallery-controls-${control}`).innerText = control;

   })

}



useControls (){
const triggers = [... galleryControlsContainer.childNodes];
triggers.forEach (control => {
control.addEventListener('click', e => {
e.preventDefault ();
this.setCurrentState (control);
});
});




}


}

const exampleCarousel = new Carouselyleeebi(galleryContainer, galleryItems, galleryControls);

exampleCarousel.setControls(); 
exampleCarousel.useControls();



const hamburger = document.querySelector(".hamburger");
const navmenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click",() => {

  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");

}   )

document.querySelectorAll("nav-link").forEach(n => n.
  addEventListener("click", () => {

    hamburger.classList.remove("active");
    navMenu.classList.remove

  }))