function login()
{
    window.location="dashboard.html";
}

function goDashboard()
{
    window.location="dashboard.html";
}

function goModels()
{
    window.location="models.html";
}

function goBattery()
{
    window.location="battery.html";
}

const evData={

"Tata Motors":{
logo:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRR4q66dy4ndP_c7oFetKJmMDWurcVnDoFChA&s",
models:{
"Nexon EV":{
battery:"40.5 kWh",
range:"465 km",
charging:"56 min fast charge",
price:"₹15 Lakh"
},
"Tiago EV":{
battery:"24 kWh",
range:"315 km",
charging:"57 min fast charge",
price:"₹8.5 Lakh"
}
}
},

"Mahindra":{
logo:"https://logowik.com/content/uploads/images/mahindra-auto-with-wordmark7167.logowik.com.webp",
models:{
"XUV400":{
battery:"39.4 kWh",
range:"456 km",
charging:"50 min fast charge",
price:"₹16 Lakh"
}
}
},

"MG Motor":{
logo:"https://i.pinimg.com/736x/65/96/12/659612b28ffb752f1808046a8e8a335e.jpg",
models:{
"ZS EV":{
battery:"50.3 kWh",
range:"461 km",
charging:"60 min fast charge",
price:"₹23 Lakh"
}
}
},

"Hyundai":{
logo:"https://dealerimages.dealereprocess.com/image/upload/2026576.jpg",
models:{
"Kona Electric":{
battery:"39.2 kWh",
range:"452 km",
charging:"57 min fast charge",
price:"₹24 Lakh"
}
}
},

"Kia":{
logo:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQo8gTUCq9PQr6fmhC_-HZkac1hhpjcqmauoQ&s",
models:{
"EV6":{
battery:"77.4 kWh",
range:"528 km",
charging:"18 min ultra fast",
price:"₹60 Lakh"
}
}
},

"BYD":{
logo:"https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/BYD_Company%2C_Ltd._-_Logo.svg/1280px-BYD_Company%2C_Ltd._-_Logo.svg.png",
models:{
"Atto 3":{
battery:"60 kWh",
range:"521 km",
charging:"50 min fast charge",
price:"₹34 Lakh"
}
}
},

"Citroen":{
logo:"https://upload.wikimedia.org/wikipedia/commons/0/0b/Citroen-logo-2009.png",
models:{
"eC3":{
battery:"29.2 kWh",
range:"320 km",
charging:"57 min fast charge",
price:"₹12 Lakh"
}
}
},

"BMW":{
logo:"https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/BMW.svg/960px-BMW.svg.png",
models:{
"i4":{
battery:"83.9 kWh",
range:"590 km",
charging:"31 min fast charge",
price:"₹75 Lakh"
}
}
},

"Mercedes-Benz":{
logo:"https://upload.wikimedia.org/wikipedia/commons/b/b9/Mercedes_Benz_Logo_11.jpg",
models:{
"EQB":{
battery:"66.5 kWh",
range:"423 km",
charging:"32 min fast charge",
price:"₹77 Lakh"
}
}
},

"Audi":{
logo:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYIsn1MliicvJzve1GBdPFK8yXychXqOoFGA&s",
models:{
"e-tron":{
battery:"95 kWh",
range:"484 km",
charging:"30 min fast charge",
price:"₹1 Cr"
}
}
},

"Jaguar":{
logo:"https://images.seeklogo.com/logo-png/7/1/jaguar-logo-png_seeklogo-74765.png",
models:{
"I-Pace":{
battery:"90 kWh",
range:"470 km",
charging:"45 min fast charge",
price:"₹1.2 Cr"
}
}
},

"Volvo":{
logo:"https://images.seeklogo.com/logo-png/15/1/volvo-logo-png_seeklogo-150599.png",
models:{
"XC40 Recharge":{
battery:"78 kWh",
range:"418 km",
charging:"40 min fast charge",
price:"₹57 Lakh"
}
}
},

"Mini":{
logo:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5Lm8-nlnUZ-vCuKearhod9QNKhWY45n-icA&s",
models:{
"Mini Electric":{
battery:"32.6 kWh",
range:"270 km",
charging:"35 min fast charge",
price:"₹53 Lakh"
}
}
},

"Porsche":{
logo:"https://1000logos.net/wp-content/uploads/2018/02/Porsche-Logo.png",
models:{
"Taycan":{
battery:"93.4 kWh",
range:"484 km",
charging:"22 min fast charge",
price:"₹1.5 Cr"
}
}
},

"Toyota":{
logo:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnG49Ht9722p0eCdIwm0YoZj0IGBzmI5D49Q&s",
models:{
"bZ4X":{
battery:"71.4 kWh",
range:"500 km",
charging:"30 min fast charge",
price:"₹60 Lakh"
}
}
},

"Honda":{
logo:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWIO3NUhBvw8vRt7GL80fxqgcPdYXXH_b2KQ&s",
models:{
"e":{
battery:"35.5 kWh",
range:"222 km",
charging:"31 min fast charge",
price:"₹30 Lakh"
}
}
},

"Nissan":{
logo:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4Pccxrc98AwKo8eNRDQ6BVwuNGAaNP2zFsA&s",
models:{
"Leaf":{
battery:"40 kWh",
range:"389 km",
charging:"40 min fast charge",
price:"₹30 Lakh"
}
}
},

"Renault":{
logo:"https://upload.wikimedia.org/wikipedia/commons/5/5f/Renault_logo.jpg",
models:{
"Zoe":{
battery:"52 kWh",
range:"395 km",
charging:"45 min fast charge",
price:"₹25 Lakh"
}
}
},

"Ola Electric":{
logo:"https://cdn.olaelectric.com/sites/evdp/pages/news_room/press_kit/branding/branding-featured.webp",
models:{
"S1 Pro":{
battery:"4 kWh",
range:"181 km",
charging:"6 hr",
price:"₹1.4 Lakh"
}
}
},

"Ather":{
logo:"https://upload.wikimedia.org/wikipedia/commons/3/31/AtherLogo.jpg",
models:{
"450X":{
battery:"3.7 kWh",
range:"146 km",
charging:"5 hr",
price:"₹1.5 Lakh"
}
}
},

"TVS":{
logo:"https://download.logo.wine/logo/TVS_Motor_Company/TVS_Motor_Company-Logo.wine.png",
models:{
"iQube":{
battery:"3.4 kWh",
range:"145 km",
charging:"4 hr",
price:"₹1.2 Lakh"
}
}
},

"Bajaj":{
logo:"https://crystalpng.com/wp-content/uploads/2025/09/Bajaj-Logo.png",
models:{
"Chetak":{
battery:"3.2 kWh",
range:"113 km",
charging:"4 hr",
price:"₹1.2 Lakh"
}
}
},

"Hero Electric":{
logo:"https://images.jdmagicbox.com/v2/comp/delhi/h9/011pxx11.xx11.090615130705.r9h9/catalogue/hero-electric-vehicles-pvt-ltd-okhla-industrial-area-phase-3-delhi-battery-operated-scooter-manufacturers-6zxbcdp8ok.jpg",
models:{
"Optima CX":{
battery:"3 kWh",
range:"140 km",
charging:"4 hr",
price:"₹1.1 Lakh"
}
}
},

"Okinawa":{
logo:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQD_9M1UwLHfNkD9EWfdg1DolszEm6QmolGFg&s",
models:{
"PraisePro":{
battery:"2 kWh",
range:"88 km",
charging:"3 hr",
price:"₹1 Lakh"
}
}
},

"Ampere":{
logo:"https://upload.wikimedia.org/wikipedia/commons/a/a1/Ampere_Computing_Logo.png",
models:{
"Magnus EX":{
battery:"2.3 kWh",
range:"121 km",
charging:"6 hr",
price:"₹1.05 Lakh"
}
}
},

"Revolt Motors":{
logo:"https://1000logos.net/wp-content/uploads/2022/08/Revolut-Logo.jpg",
models:{
"RV400":{
battery:"3.24 kWh",
range:"150 km",
charging:"4.5 hr",
price:"₹1.3 Lakh"
}
}
},

"Ultraviolette":{
logo:"https://upload.wikimedia.org/wikipedia/commons/e/e9/Ultraviolette_logo.jpg",
models:{
"F77":{
battery:"10.3 kWh",
range:"307 km",
charging:"5 hr",
price:"₹3.8 Lakh"
}
}
},

"Simple Energy":{
logo:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbPBozoIvwF7dQPGaZjRtAl7bBdaENdN0a0A&s",
models:{
"Simple One":{
battery:"5 kWh",
range:"212 km",
charging:"6 hr",
price:"₹1.6 Lakh"
}
}
},

"Force Motors":{
logo:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSx5dy2zPxiXh0wb0cu1P-CBw2FgLIFKPcfw&s",
models:{
"Traveller Electric":{
battery:"40 kWh",
range:"200 km",
charging:"2 hr",
price:"₹20 Lakh"
}
}
},

"Omega Seiki":{
logo:"https://www.businessgujaratnews.com/wp-content/uploads/2022/06/Omega-seiki-mobility.jpg",
models:{
"Rage+ Electric":{
battery:"7.7 kWh",
range:"150 km",
charging:"3 hr",
price:"₹3.4 Lakh"
}
}
},

};

if(document.getElementById("companyContainer")){

let container=document.getElementById("companyContainer");

for(let company in evData){

let card=document.createElement("div");

card.className="card";

card.innerHTML=`
<img src="${evData[company].logo}">
<h3>${company}</h3>
`;

card.onclick=()=>{
localStorage.setItem("company",company);
window.location="models.html";
};

container.appendChild(card);

}

}

if(document.getElementById("modelsContainer")){

let company=localStorage.getItem("company");

document.getElementById("companyName").innerText=company;

let container=document.getElementById("modelsContainer");

let models=evData[company].models;

for(let model in models){

let card=document.createElement("div");

card.className="card";

card.innerHTML=`

<h3>${model}</h3>
`;

card.onclick=()=>{
localStorage.setItem("model",model);
window.location="battery.html";
};

container.appendChild(card);

}

}

function selectBattery(type){
localStorage.setItem("battery",type);
window.location="report.html";
}

if(document.getElementById("car")){

let company=localStorage.getItem("company");
let model=localStorage.getItem("model");
let battery=localStorage.getItem("battery");

let car=evData[company].models[model];

let health=Math.floor(Math.random()*20)+80;

document.getElementById("car").innerText=company+" "+model;

document.getElementById("batteryType").innerText="Battery Type: "+battery;

document.getElementById("capacity").innerText="Battery Capacity: "+car.battery;

document.getElementById("range").innerText="Range: "+car.range;

document.getElementById("charging").innerText="Charging: "+car.charging;

document.getElementById("price").innerText="Price: "+car.price;

document.getElementById("soh").innerText="Battery Health: "+health+"%";

document.getElementById("life").innerText="Estimated Life: 8-12 years";

}