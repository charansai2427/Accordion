const panels = document.querySelector(".panel");
var image=document.querySelector('.images');
var carousel = document.querySelector('#carouselimg');
var prevs = document.querySelector('.prev');
var nextt = document.querySelector('.next');
var updownn=document.getElementById('updown');
var accordion=document.querySelector('.accordion')
var title=document.getElementsByTagName('h1')
var currentslide = 0;
var j=0, e;

function acc(e) {
    const box = e.parentElement;
    console.log(e);   
    if (box.children[1].classList.contains("panels")) {
        e.children[1].setAttribute("name", "chevron-up-outline");
    } else {
        e.children[1].setAttribute("name", "chevron-down-outline");
    }
};

const baseurl = "https://res.cloudinary.com/cliqtick/raw/upload/v1668505330/react-class/images_nkmqnx.json";
const widthimg = 0
fetch(baseurl).then(result => result.json())
.then(finalresult => {
        console.log(finalresult);
        
        prevs.addEventListener("click", () => {
            if(j<3) return;
            var carouselimg = document.createElement("img");
            var carouselimg1 = document.createElement("img");
            var carouselimg2 = document.createElement("img");
            var div = document.createElement("div");

            carouselimg .setAttribute("src", finalresult.photos[--j].src.original);
            carouselimg1.setAttribute("src", finalresult.photos[--j].src.original);
            carouselimg2.setAttribute("src", finalresult.photos[--j].src.original);

            console.log(carouselimg);
            div.appendChild(carouselimg);
            div.appendChild(carouselimg1);
            div.appendChild(carouselimg2);
            div.style.display = "flex";
            div.style.alignItems = "center";
            div.style.justifyContent = "center";
            carouselimg.style.width = "150px";
            carouselimg1.style.width = "150px";
            carouselimg2.style.width = "150px";
            carousel.replaceChildren(div);
            
        });

        nextt.addEventListener("click", () => {
            if(j> 9) return;
            var carouselimg = document.createElement("img");
            var carouselimg1 = document.createElement("img");
            var carouselimg2 = document.createElement("img");
            var div = document.createElement("div");

            carouselimg .setAttribute("src", finalresult.photos[++j].src.original);
            carouselimg1.setAttribute("src", finalresult.photos[++j].src.original);
            carouselimg2.setAttribute("src", finalresult.photos[++j].src.original);

            console.log(carouselimg);
            div.appendChild(carouselimg);
            div.appendChild(carouselimg2);
            div.appendChild(carouselimg1);
            div.style.display = "flex";
            div.style.alignItems = "center";
            div.style.justifyContent = "center";
            carouselimg.style.width = "150px";
            carouselimg1.style.width = "150px";
            carouselimg2.style.width = "150px";
            carousel.replaceChildren(div);
        });
        var carouselimg = document.createElement("img");
        var carouselimg1 = document.createElement("img");
        var carouselimg2= document.createElement("img");
        var div = document.createElement("div");

        carouselimg.setAttribute("src", finalresult.photos[0].src.original);
        carouselimg1.setAttribute("src", finalresult.photos[1].src.original);
        carouselimg2.setAttribute("src", finalresult.photos[2].src.original);

        console.log(carouselimg);
        div.appendChild(carouselimg);
        div.appendChild(carouselimg1);
        div.appendChild(carouselimg2);
        div.style.display = "flex";
        div.style.alignItems = "center";
        div.style.justifyContent = "center";
        carouselimg.style.width = "150px";
        carouselimg1.style.width = "150px";
        carouselimg2.style.width = "150px";
        carousel.replaceChildren(div);
    });
     accordion.style.border=0;

    ////////// data api /////////////
    var accordion=document.querySelector('.accordion');
    var dat=document.querySelector('.data');
    var panelss=document.querySelectorAll('.panel');
    var carouseld=document.querySelector('#carouseldata');        
    var preve=document.querySelector('.preve');
    var nexts=document.querySelector('.nexts');
    var up=document.getElementById('up');

var currentslide = 0;
var i=0;
function acc(e) {
    const box = e.parentElement;
    console.log(e);
    const index = e.dataset.accor;
    let panel;
    for (const p of panelss) {
        console.log(p.dataset.accor , index);
        if(p.dataset.accor == index) {
            panel = p;
        }
    }
    console.log(panel);
    if(!panel) return;
    panel.classList.toggle('panels');
    console.log(e);
    if (box.children[1].classList.contains("panels")) {
        e.children[1].setAttribute("name", "chevron-up-outline");
    } else {
        e.children[1].setAttribute("name", "chevron-down-outline");
    }
} ;
    const Url = "https://res.cloudinary.com/cliqtick/raw/upload/v1666847902/react-class/data_hfnwng.json";
    const widthda = 0;
    var parent = document.querySelector(".panel");

    fetch(Url).then(result => result.json())
    .then(finalresult => {
     console.log(finalresult);
        preve.addEventListener("click", () => {
            if(i<3) 
            return;
            var carouseldata3 = document.createElement("img");
            var carouseldata4 = document.createElement("img");
            var carouseldata5 = document.createElement("img");
            var div = document.createElement("div");

            carouseldata3.setAttribute("src", finalresult[--i].image.original);
            carouseldata4.setAttribute("src", finalresult[--i].image.original);
            carouseldata5.setAttribute("src", finalresult[--i].image.original);

            console.log(carouseldata3);
            div.appendChild(carouseldata3);
            div.appendChild(carouseldata4);
            div.appendChild(carouseldata5);
            div.style.display = "flex";
            div.style.alignItems = "center";
            div.style.justifyContent = "center";
            carouseldata3.style.width = "150px";
            carouseldata4.style.width = "150px";
            carouseldata5.style.width = "150px";
            carouseld.replaceChildren(div);
        });

        nexts.addEventListener("click", () => {
            if(i>9) return;
            var carouseldata3 = document.createElement("img");
            var carouseldata4 = document.createElement("img");
            var carouseldata5 = document.createElement("img");
            var div = document.createElement("div");
            console.log(carouseldata3);
            carouseldata3.setAttribute("src", finalresult[++i].image.original);
            carouseldata4.setAttribute("src", finalresult[++i].image.original);
            carouseldata5.setAttribute("src", finalresult[++i].image.original);

            console.log(carouseldata3);
            div.appendChild(carouseldata3);
            div.appendChild(carouseldata4);
            div.appendChild(carouseldata5);
            div.style.display = "flex";
            div.style.alignItems = "center";
            div.style.justifyContent = "center"
            carouseldata3.style.width = "150px";
            carouseldata4.style.width = "150px";
            carouseldata5.style.width = "150px";
            carouseld.replaceChildren(div);
        });
        
        var carouseldatas3 = document.createElement("img");
        var carouseldatas4 = document.createElement("img");
        var carouseldatas5 = document.createElement("img");
        var div = document.createElement("div");

        carouseldatas3.setAttribute("src", finalresult[0].image.original);
        carouseldatas4.setAttribute("src", finalresult[1].image.original);
        carouseldatas5.setAttribute("src", finalresult[2].image.original);

        console.log(carouseldatas3);
        div.appendChild(carouseldatas3);
        div.appendChild(carouseldatas4);
        div.appendChild(carouseldatas5);
        div.style.display = "flex";
        div.style.alignItems = "center";
        div.style.justifyContent = "center";
        carouseldatas3.style.width = "150px";
        carouseldatas4.style.width = "150px";
        carouseldatas5.style.width = "150px";
        carouseld.replaceChildren(div);
    });

        ///////////locations api ///////

    var carousellocation=document.querySelector('#carousellocations');
    var locates=document.querySelector('.location');
    var accordion=document.querySelector('.accordion');
    var prevt=document.querySelector('.prevt');
    var nexxt=document.querySelector('.nexxt');
    var updownn=document.getElementById('updown');
    var panell=document.querySelector('.panel');
    var arrow=document.getElementById('arrow');
    
    var currentslide = 0;
    var k=0,e;
    function locate() {
        panell.classList.toggle('panelss');
        if (panell.classList.contains("panelss")) {
            arrow.setAttribute("name", "chevron-up-outline");
        } else {
            arrow.setAttribute("name", "chevron-down-outline");
        }
    };
    
    const url="https://res.cloudinary.com/cliqtick/raw/upload/v1665574559/react-class/locations_ypu7iw.json";

    const widthloc=0;

    fetch(url).then(result => result.json())
    .then(finalresult => {
        console.log(finalresult );
        var parent=document.querySelector('.panel');
     prevt.addEventListener("click", () => {
        if(k<3) 
            return;
            var locates = document.createElement("img");
            var locates1 = document.createElement("img");
            var locates2 = document.createElement("img");
            var div = document.createElement("div");

            locates.setAttribute("src", finalresult[--k].locationImage.url);
            locates1.setAttribute("src", finalresult[--k].locationImage.url);
            locates2.setAttribute("src", finalresult[--k].locationImage.url);

            console.log(locates);
            div.appendChild(locates);
            div.appendChild(locates1);
            div.appendChild(locates2);
            div.style.display = "flex";
            div.style.alignItems = "center";
            div.style.justifyContent = "center";
            locates.style.width = "150px";
            locates1.style.width = "150px";
            locates2.style.width = "150px";
            carousellocation.replaceChildren(div);
    });
              nexxt.addEventListener("click", () => {
             if(k> 9)
            return;

           var locates = document.createElement("img");
            var locates1 = document.createElement("img");
            var locates2 = document.createElement("img");
            var div = document.createElement("div");

            locates.setAttribute("src", finalresult[++k].locationImage.url);
            locates1.setAttribute("src", finalresult[++k].locationImage.url);
            locates2.setAttribute("src", finalresult[++k].locationImage.url);

            console.log(locates);
            div.appendChild(locates);
            div.appendChild(locates1);
            div.appendChild(locates2);
            div.style.display = "flex";
            div.style.alignItems = "center";
            div.style.justifyContent = "center";
            locates.style.width = "150px";
            locates1.style.width = "150px";
            locates2.style.width = "150px";
            carousellocation.replaceChildren(div);
    });
    
    var locates = document.createElement("img");
    var locates1= document.createElement("img");
    var locates2= document.createElement("img");
    var div = document.createElement("div");

    locates.setAttribute("src", finalresult[0].locationImage.url);
    locates1.setAttribute("src", finalresult[1].locationImage.url);
    locates2.setAttribute("src", finalresult[2].locationImage.url);

    console.log(locates);
    div.appendChild(locates);
    div.appendChild(locates1);
    div.appendChild(locates2);
    div.style.display = "flex";
    div.style.alignItems = "center";
    div.style.justifyContent = "center";
    locates.style.width = "150px";
    locates1.style.width = "150px";
    locates2.style.width = "150px";
    carousellocation.replaceChildren(div);
});
