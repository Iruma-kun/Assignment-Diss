$(document).ready(function () {

    let playerList =[
        
        {
            "id": 6,
            "playerName": "Glenn Maxwell",
            "from": "RCB",
            "price": "14.25 Cr",
            "isPlaying": true,
            "description": "All-rounder",
            "preview": "https://assets.iplt20.com/ipl/IPLHeadshot2022/282.png"
        },
        {
            "id": 7,
            "playerName": "Virat Kohli",
            "from": "RCB",
            "price": "8.00 Cr",
            "isPlaying": true,
            "description": "Batsman",
            "preview": "https://assets.iplt20.com/ipl/IPLHeadshot2022/164.png"
        },
        {
            "id": 8,
            "playerName": "Shahbaz Ahamad",
            "from": "RCB",
            "price": "2.4 Cr",
            "isPlaying": true,
            "description": "All-rounder",
            "preview": "https://assets.iplt20.com/ipl/IPLHeadshot2022/13803.png"
        },
        {
            "id": 9,
            "playerName": "Mahipal Lomror",
            "from": "RCB",
            "price": "95 L",
            "isPlaying": true,
            "description": "All-rounder",
            "preview": "https://assets.iplt20.com/ipl/IPLHeadshot2022/2970.png"
        },
        {
            "id": 10,
            "playerName": "Suyash Prabhudessai",
            "from": "RCB",
            "price": "30 L",
            "isPlaying": false,
            "description": "BatsMan",
            "preview": "https://assets.iplt20.com/ipl/IPLHeadshot2022/7002.png"
        },
        {
            "id": 11,
            "playerName": "Mohammed Siraj",
            "from": "RCB",
            "price": "7 Cr",
            "isPlaying": true,
            "description": "Bowler",
            "preview": "https://assets.iplt20.com/ipl/IPLHeadshot2022/3840.png"
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