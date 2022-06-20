const card = document.querySelector('.card');
const leftBtn = document.getElementById("left-btn");
const rightBtn = document.getElementById("right-btn");
const surpriseBtn = document.getElementById("surprise-me");

let index = 0;

const details = [
    {
        image:"https://www.mockofun.com/wp-content/uploads/2019/12/circle-profile-pic.jpg",
        name:"Sara Nelson",
        job:"Web Developer",
        info:"Hello this is Sara, Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut velit eligendi ullam distinctio. Consectetur fugit cupiditate eveniet repellendus velit magnam iste officiis architecto molestias fuga commodi consequuntur modi maxime vel doloremque.",
    },
    {
        image:"https://i.pinimg.com/originals/eb/c2/12/ebc212cc2eb89074a856ec501bdf193f.jpg",
        name:"Daniel Roes Russel",
        job:"Full Stack Developer",
        info:"This is Hope Mikealson, Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut velit eligendi ullam distinctio. Consectetur fugit cupiditate eveniet repellendus velit magnam iste officiis architecto molestias fuga commodi consequuntur modi maxime vel doloremque.",
    },
    {
        image:"https://i.pinimg.com/originals/ea/6c/93/ea6c931c623881ecd29955db118c7742.png",
        name:"Lizze Saltsman",
        job:"Frontend Developer",
        info:"This is Lizze, Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut velit eligendi ullam distinctio. Consectetur fugit cupiditate eveniet repellendus velit magnam iste officiis architecto molestias fuga commodi consequuntur modi maxime vel doloremque.",
    },
    {
        image:"https://i.pinimg.com/236x/07/6c/f2/076cf291ff158ab56fbb0e94f6585afa.jpg",
        name:"Rebehka Mikealson",
        job:"Software Developer",
        info:"Hello Everyone, This is Rebehka Mikealson,Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut velit eligendi ullam distinctio. Consectetur fugit cupiditate eveniet repellendus velit magnam iste officiis architecto molestias fuga commodi consequuntur modi maxime vel doloremque.",
    },
    {
        image:"https://i.pinimg.com/736x/d0/37/3b/d0373b8469d6448a9b894df28527e363.jpg",
        name:"Phobe Tonikin",
        job:"Web Developer",
        info:"Hello this is Phobe, Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut velit eligendi ullam distinctio. Consectetur fugit cupiditate eveniet repellendus velit magnam iste officiis architecto molestias fuga commodi consequuntur modi maxime vel doloremque.",
    }
]

rightBtn.addEventListener("click",function () {
    index++;
    if(index > details.length-1) {
        index = 0;
    }
    console.log(index);
    rightClick(index);
    
})

function rightClick (index) {
    card.innerHTML = `
        <img src=${details[index].image} class="img" />
        <p class="name-tag"><span class="name">${details[index].name}</span></p>
        <small><span class="job">${details[index].job}</span></small>
        <p class="text">${details[index].info}</p>
    `
}

leftBtn.addEventListener("click",function () {
    index--;
    if(index < 0) {
        index = details.length-1;
    }
    console.log(index);
    leftClick(index);
})

function leftClick(index) {
    card.innerHTML = `
        <img src=${details[index].image} class="img" />
        <p class="name-tag"><span class="name">${details[index].name}</span></p>
        <small><span class="job">${details[index].job}</span></small>
        <p class="text">${details[index].info}</p>
    `
}

surpriseBtn.addEventListener("click" ,function () {
    const randomNum = Math.floor((Math.random() * details.length-1) + 1);
    index = randomNum;
    console.log(randomNum);
    card.innerHTML = `
        <img src=${details[index].image} class="img" />
        <p class="name-tag"><span class="name">${details[index].name}</span></p>
        <small><span class="job">${details[index].job}</span></small>
        <p class="text">${details[index].info}</p>
`
})

