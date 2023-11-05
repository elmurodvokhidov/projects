// Project starts

let informations = [
    {
        pic: "./img/img1.webp",
        title: "Adidas shoes",
        about: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam veritatis ducimus non similique dolores accusamus beatae totam adipisci dolor corrupti ad suscipit, voluptas quos cupiditate dicta a mollitia impedit. Nulla.",
        price: 30
    },
    {
        pic: "./img/img1.webp",
        title: "Adidas shoes",
        about: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam veritatis ducimus non similique dolores accusamus beatae totam adipisci dolor corrupti ad suscipit, voluptas quos cupiditate dicta a mollitia impedit. Nulla.",
        price: 30
    },
    {
        pic: "./img/img1.webp",
        title: "Adidas shoes",
        about: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam veritatis ducimus non similique dolores accusamus beatae totam adipisci dolor corrupti ad suscipit, voluptas quos cupiditate dicta a mollitia impedit. Nulla.",
        price: 30
    },
    {
        pic: "./img/img1.webp",
        title: "Adidas shoes",
        about: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam veritatis ducimus non similique dolores accusamus beatae totam adipisci dolor corrupti ad suscipit, voluptas quos cupiditate dicta a mollitia impedit. Nulla.",
        price: 30
    },
    {
        pic: "./img/img1.webp",
        title: "Adidas shoes",
        about: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam veritatis ducimus non similique dolores accusamus beatae totam adipisci dolor corrupti ad suscipit, voluptas quos cupiditate dicta a mollitia impedit. Nulla.",
        price: 30
    },
    {
        pic: "./img/img1.webp",
        title: "Adidas shoes",
        about: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam veritatis ducimus non similique dolores accusamus beatae totam adipisci dolor corrupti ad suscipit, voluptas quos cupiditate dicta a mollitia impedit. Nulla.",
        price: 30
    }
]

let cards = document.querySelector(".cards");

// Ma'lumotlarni filter qilib HTML fayliga inner qilish ------------------>

function childCard() {
    cards.innerHTML = '';
    informations.map(function (info, index) {
        cards.innerHTML += `
        <!-- cards child div -->
        <div class="card">
            <!-- cards front preview -->
            <div class="front">
                <div class="header">
                    <h1>${info.title}</h1>
                    <p>The best shoes in marketplace</p>
                </div>
                <figure>
                    <img src="${info.pic}" alt="${info.pic}">
                    <button id="more">More</button>
                </figure>
                <div class="footer">
                    <h1>${info.price}$</h1>
                    <button>Buy now</button>
                </div>
            </div>
            <!-- cards background preview -->
            <div class="back">
                <h1>${info.title}</h1>
                <p>${info.about}</p>
                <figure>
                    <button id="back">Back</button>
                </figure>
                <div class="back_btn">
                    <button>Edit</button>
                    <button>Delete</button>
                </div>
            </div>
        </div>
        `;
    });
}

childCard();

// Cardning old ko'rinishi va More buttoni ustida ishlash ----------------->

let more = document.querySelectorAll("#more"),
    card = document.querySelectorAll(".card"),
    back = document.querySelectorAll("#back");

more.addEventListener("click", (e) => {
    card.style.cssText = `
         transform: rotateY(180deg);
    `
})

// Cardning orqa ko'rinishi va Back buttoni ustida ishlash ----------------->

back.addEventListener("click", (e) => {
    card.style.cssText = `
         transform: rotateY(0deg);
    `
})