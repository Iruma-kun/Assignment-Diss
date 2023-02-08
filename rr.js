$(document).ready(function () {

    let playerList =[
        
        
    {
        "id": 12,
        "playerName": "Riyan Parag",
        "from": "RR",
        "price": "3.80 Cr",
        "isPlaying": true,
        "description": "All-rounder",
        "preview": "https://assets.iplt20.com/ipl/IPLHeadshot2022/4445.png"
    },
    {
        "id": 13,
        "playerName": "Navdeep Saini",
        "from": "RR",
        "price": "2.6 Cr",
        "isPlaying": true,
        "description": "Bowler",
        "preview": "https://assets.iplt20.com/ipl/IPLHeadshot2022/3824.png"
    },
    {
        "id": 14,
        "playerName": "KC Cariappa",
        "from": "RR",
        "price": "20 L",
        "isPlaying": true,
        "description": "Bowler",
        "preview": "https://assets.iplt20.com/ipl/IPLHeadshot2022/2743.png"
    },
    {
        "id": 15,
        "playerName": "Yashasvi Jaiswal",
        "from": "RR",
        "price": "2.40 Cr",
        "isPlaying": true,
        "description": "Batsman",
        "preview": "https://assets.iplt20.com/ipl/IPLHeadshot2022/13538.png"
    },
    {
        "id": 16,
        "playerName": "Devdutt Padikkal",
        "from": "RR",
        "price": "7.75 Cr",
        "isPlaying": true,
        "description": "Batsman",
        "preview": "https://assets.iplt20.com/ipl/IPLHeadshot2022/5430.png"
    },
    {
        "id": 17,
        "playerName": "Sanju Samson",
        "from": "RR",
        "price": "8 Cr",
        "isPlaying": true,
        "description": "Bowler",
        "preview": "https://assets.iplt20.com/ipl/IPLHeadshot2022/258.png"
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