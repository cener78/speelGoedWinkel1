

const data = [
    {id:1, name:"Evcil Ayi", fiyat:100,ozellik:"Yikanabilir"},
    {id:2, name:"Ahsap Gokkusagi", fiyat:150,ozellik:"Dogal Ahsap"},
    {id:3, name:"Sari simsek", fiyat:100,ozellik:"Kirilmaz Plastik"},
    {id:4,name:"Gezgin Ayi", fiyat:500,ozellik:"Yikanabilir"}   
];



const hourli = document.querySelector(".clock li:nth-child(1)");
      const secondli = document.querySelector(".clock li:nth-child(2)");
      const minuteli = document.querySelector(".clock li:nth-child(3)");

      const tick = () => {
        let time = new Date();
        const hour = time.getHours();
        const second = time.getSeconds();
        const minute = time.getMinutes();
        hourli.innerText = hour < 10 ? `0${hour}` : hour;

        minuteli.innerText = minute < 10 ? `0${minute}` : minute;

        if (secondli.style.opacity == 0) secondli.style.opacity = 1;
        else secondli.style.opacity = 0;
      };
      setInterval(tick, 1000);
//document.querySelector("h5#ayi1.card-title").innerHTML=`Ayi`


//for (let i = 1; i <=data.length; i++) {
  
//document.querySelector(`div.cards div:nth-child(${i+1}) h5`).innerHTML=`${data[i-1].name}`;  
    
//}
for (let i = 1; i <=data.length; i++) {
    document.getElementById(i).innerHTML=`${data[i-1].name}`; 
    document.getElementById(i+"a").innerHTML=`<b>${data[i-1].fiyat}</b>`;   
    }
  

const card=document.querySelectorAll("#cardsId .card")
const btnAdd=document.querySelectorAll(".btnad");
console.log(btnAdd);
const btnbasket=document.querySelector(".btnsepet ");
const sepet=document.querySelector(".sepet");

class Shopping{
    constructor(title,price,image){
        this.image= image;
        this.title=title;
        this.price=price;
    }
}

class UI{
addToCard(shopping){
const listItem=document.createElement("div");
listItem.classList="list-item";
listItem.innerHTML=

`<div class="row align-items-center tex-white-50">
<div class="col-md-3"><img src="${shopping.image}" alt="" class="img-fluid" style="max-width: 30px;"></div>
<div class="col-md-5"><div class="title">${shopping.title}</div></div>
<div class="col-md-2"><div class="price">${shopping.price}</div></div>
<div class="col-md-2"><button class="btn btn-delete"><i class="fas fa-trash-alt text-danger"></i></button></div>
</div>`

sepet.querySelector(".sepet>div").appendChild(listItem);

}


}
for (let i = 0; i < card.length; i++) {
    btnAdd[i].addEventListener('click',function(e){
        
        // 0 elemanini al dememizin nedeni zaten tek elemanili get elemantby class array dondurdugu icin
         // burada card larin tamamini aldik click olunca duran cardi bulduk o cartinda title aldik
         let title=card[i].getElementsByClassName("card-title")[0].textContent;
         let price=card[i].getElementsByClassName("card-text")[0].textContent;
         let image=card[i].getElementsByClassName("card-img-top")[0].src;

        let shopping=new Shopping(title,price,image);
         let ui= new UI();
ui.addToCard(shopping);
hesapla();
sayac();

document.querySelectorAll(".sepet >div .btn-delete ") .forEach(t=>{
    t.addEventListener('click',(e)=>{
   e.stopPropagation();
   //if(!confirm("Bu urunumuzu almak istemediginizden eminmisiniz?")) return;
   const silinecek=e.target.closest(".list-item");
   //silinecek.classList.add("bg-light");
   e.target.querySelector("i").setAttribute("class","fa-solid fa-spinner fa-spin-pulse");
    

   setTimeout( ()=> { 
       silinecek.remove();
       hesapla();
       sayac();
       

   }, 1000 );
   
   

})
});

        e.preventDefault;
    })
    
    
}

function sayac(){
    const arr=sepet.querySelectorAll(".sepet>div>div");
    console.log(arr.length);
    document.querySelector(".sepet-btn input").setAttribute("placeholder",`Sepetinizde ${arr.length} urun var`);
    return;
}
sayac();

 function hesapla(){
    let fiyatDizi=document.querySelectorAll(".sepet >div .price");
    let araToplam=0;
    
    for(fiyat of fiyatDizi){
    araToplam+=Number(fiyat.innerText);

    }
   
    let kdv=araToplam*0.18;
    document.querySelector("#aratpl span").innerText=araToplam;
    document.querySelector("#kdv span").innerText=kdv;
    let toplam=araToplam+kdv;
    document.querySelector("#tpl span").innerText=toplam;

}
function sepetKapa(){

    btnbasket.addEventListener('mouseout',()=>{
        sepet.classList.remove("d-inline");
    }) 
   
}
sepetKapa();

function sepetAc(){
    btnbasket.addEventListener('mouseover',()=>{
        sepet.classList.add("d-inline");
    });
    
}
sepetAc();
function sepetKapaliKal(){

    sepet.addEventListener('mouseout',()=>{
        sepet.classList.remove("d-inline");
    }) 
   
}
sepetKapaliKal();

function sepetAcikKal(){
    sepet.addEventListener('mouseover',()=>{
        sepet.classList.add("d-inline");
    });
    
}
sepetAcikKal();






 


    



/* bir array tanimladim su an bos
    let obje="";
    
    function sepeteEkle(a,b,adet){
        
        obje +=`<tr>
        <td><img src="" alt="" />1</td>
        <td id="">${a}</td>
        <td>${adet}Adet</td>
        <td class="price">${b}</td>
        <td><button  class="btn btn-danger btn-delete silbtn" >Sil</button></td> 
        </tr>`;
        console.log(obje);
        document.querySelector(".sepet #tblPoint tbody ").innerHTML=obje;
        
        hesapla();

        document.querySelectorAll(".sepet #tblPoint tbody tr .btn-delete").forEach(t=>{
         t.addEventListener('click',(e)=>{
        e.stopPropagation();
        if(!confirm("Bu urunumuzu almak istemediginizden eminmisiniz?")) return;
        const silinecek=e.target.closest("tr");
        silinecek.classList.add("table-danger");
        e.target.innerHTML = '<i class="fa-solid fa-spinner fa-spin-pulse"></i>';

        setTimeout( ()=> { 
            silinecek.remove();
            hesapla();
        }, 1000 );
        
        

 
    
   */
    
    
    


  
    

    



    
