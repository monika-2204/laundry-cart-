const addservicebtn = document.querySelectorAll(".plus");
const cartContent = document.querySelector(".cart-content"); 
const noitem = document.getElementById("nothing");
const totalprice = document.querySelector(".total-price");


addservicebtn.forEach(btn => {
  const items = btn.closest(".items");
  btn.addEventListener('click', () => {
    if (btn.textContent.includes("Add Item")) {
      btn.innerHTML = 'Remove Item <ion-icon name="remove-circle-outline"></ion-icon>';
      btn.style.backgroundColor = "#f7e0e3";
      btn.style.color = "red";

      const cartbox = document.createElement("div");
      const name = items.querySelector(".cart-item").innerHTML;
      const price = items.querySelector(".price").innerHTML;

      cartbox.classList.add("cart-box");
      cartbox.innerHTML = '<div class="col span_1_of_3 items-list">' + '<span class="serial"></span>' + '<span class="name">' + name + '</span>' + '<span class="cart-price">' + price + '</span>' + '</div>';
      cartContent.appendChild(cartbox);
      booknowbtn.style.backgroundColor ="blue";
      alertmsg.style.display="none";
      
    } else {
      btn.innerHTML = `Add Item <ion-icon name="add-circle-outline"></ion-icon>`;
      btn.style.backgroundColor = "#d6f9d6";
      btn.style.color = "green";
      alertmsg.style.display="none";

      const cartboxes = cartContent.querySelectorAll(".cart-box");
      cartboxes.forEach(box =>{
        if(items.querySelector(".cart-item").innerHTML===box.querySelector(".name").innerHTML){
        box.remove();
      }
  });
}
  const cartboxes = cartContent.querySelectorAll(".cart-box");
  if(cartboxes.length > 0 ){
    noitem.style.display="none";
  }else{
    noitem.style.display= "block";
    booknowbtn.style.backgroundColor = "#555";
  }

  let total = 0;
  cartboxes.forEach((box,index) =>{
    const serialno = box.querySelector(".serial");
    serialno.innerHTML= index + 1;
    serialno.style.marginLeft = "1rem";

    const cartprice = box.querySelector(".cart-price").innerHTML;
    const pr = parseInt(cartprice.replace("₹",""));
    total +=pr;
  });

  totalprice.innerHTML="₹" + total;
});
});

const alertmsg = document.querySelector(".alert-no-item");
const booknowbtn = document.getElementById("book-now");
booknowbtn.addEventListener('click', () =>{
  const cartboxes = cartContent.querySelectorAll(".cart-box");
  if(cartboxes.length > 0){
    alertmsg.innerHTML = '<ion-icon name="information-circle-outline" ></ion-icon>Email has been sent successfully';
    alertmsg.style.color="green";
    alertmsg.style.display="block";
  }
  alertmsg.style.display="block";
});
