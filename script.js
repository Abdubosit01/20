let inp = document.querySelector('input');
let cardsData = document.querySelector('#cards');  // to'g'rilandi
let btn = document.querySelector('.btn');

let data = [
    {id:1, name:'Mars rug',coin:100 , image:' image 10 (2).png', soni:24},
    {id:2, name:'Keyboard sticker',coin:50 , image:' image 22.png', soni:11},
    {id:3, name:'Smart watch',coin:899 , image:'image 23.png', soni:8},
    {id:4, name:'Wireless keyboard',coin:350 , image:'image 24.png', soni:0},
    {id:5, name:'Mouse',coin:360 , image:'image 25.png', soni:24},
    {id:6, name:'AirPods',coin:499 , image:'image 26.png', soni:11},
    {id:7, name:'Powerbank',coin:599 , image:' image 27.png', soni:5},
    {id:8, name:'USB flash drive',coin:299 , image:'image 28.png', soni:29},
    {id:9, name:'Smartphone',coin:2699 , image:' image 29.png', soni:5},
    {id:10, name:'Playstation 5',coin:7490 , image:'image 30 (1).png', soni:3},
    {id:11, name:'Yandex Station',coin:1999 , image:'image 31.png', soni:4},
    {id:12, name:'Planshet Samsung',coin:4999 , image:'image 32.png', soni:24},
];

function renderCards(items) {
    cardsData.innerHTML = ''; // tozalash
    items.forEach(element => {
        const car = document.createElement('div');
        car.classList.add('pol');
        car.innerHTML = `
            <img class="im" src="${element.image}" alt="">
            <h5><b>${element.name}</b></h5>
            <div class="l">
                <img src="./Coin 1.png" alt="">
                <p>${element.coin}</p>
            </div>
            <p class="c">${element.soni} dona mavjud</p>
        `;
        cardsData.appendChild(car); // DOMga qo‘shish
    });
}

function filterCards(cardsName) {
    let a = data.filter((obj) =>
        obj.name.toLowerCase().includes(cardsName.toLowerCase())
    );
    renderCards(a);
}

btn.addEventListener('click', () => {
    let value = inp.value;
    filterCards(value);
});

renderCards(data);
















