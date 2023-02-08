$(document).ready(function () {

    let playerList =[
        
        
    {
        "id": 24,
        "playerName": "Andre Russell",
        "from": "KKR",
        "price": "1.20 Cr",
        "isPlaying": true,
        "description": "All-rounder",
        "preview": "https://assets.iplt20.com/ipl/IPLHeadshot2022/177.png"
    },
    {
        "id": 25,
        "playerName": "Venkatesh Iyer",
        "from": "KKR",
        "price": "8 Cr",
        "isPlaying": true,
        "description": "All-rounder",
        "preview": "https://assets.iplt20.com/ipl/IPLHeadshot2022/8540.png"
    },
    {
        "id": 26,
        "playerName": "Sunil Narine",
        "from": "KKR",
        "price": "6 Cr",
        "isPlaying": true,
        "description": "All-rounder",
        "preview": "https://assets.iplt20.com/ipl/IPLHeadshot2022/203.png"
    },
    {
        "id": 27,
        "playerName": "Rinku Singh",
        "from": "KKR",
        "price": "55 L",
        "isPlaying": false,
        "description": "All-rounder",
        "preview": "https://assets.iplt20.com/ipl/IPLHeadshot2022/3830.png"
    },
    {
        "id": 28,
        "playerName": "Nitish Rana",
        "from": "KKR",
        "price": "3.40 Cr",
        "isPlaying": true,
        "description": "All-rounder",
        "preview": "https://assets.iplt20.com/ipl/IPLHeadshot2022/2738.png"
    },
    {
        "id": 39,
        "playerName": "Anukul Roy",
        "from": "KKR",
        "price": "20 L",
        "isPlaying": true,
        "description": "All-rounder",
        "preview": "https://assets.iplt20.com/ipl/IPLHeadshot2022/3774.png"
    }
    ];
for (let count = 0; count < 6; count++) {
    let playerInfo = playerList[count];

    let div1 = document.createElement("div");
    div1.classList.add("card");
    div1.id = playerInfo.id;

    let body = document.body;
    body.append(div1);

    let img = document.createElement("img");
    img.src = playerInfo.preview;

    let info = document.createElement("div");
    info.classList.add("info");

    let h2 = document.createElement("h2");
    h2.innerText = playerInfo.playerName;

    let para = document.createElement("p");
    para.innerText = "TEAM - " + playerInfo.from;

    let span = document.createElement("span");
    span.innerText = "PRICE " + playerInfo.price;

    info.append(h2, para, span);

    div1.append(img, info);

    // if (playerInfo.isAccessory === true) {
    //     access.append(div1);   
    // } else {
    //     clothes.append(div1);
    // }
}

})