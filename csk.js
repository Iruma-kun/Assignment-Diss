$(document).ready(function () {

    let playerList =[
     
    {
        "id": 18,
        "playerName": "MS Dhoni",
        "from": "CSK",
        "price": "12 Cr",
        "isPlaying": true,
        "description": "All-rounder",
        "preview": "https://assets.iplt20.com/ipl/IPLHeadshot2022/1.png"
    },
    {
        "id": 19,
        "playerName": "Ruturaj Gaikwad",
        "from": "CSK",
        "price": "6 Cr",
        "isPlaying": true,
        "description": "Batsman",
        "preview": "https://assets.iplt20.com/ipl/IPLHeadshot2022/5443.png"
    },
    {
        "id": 20,
        "playerName": "Ravindra Jadeja",
        "from": "CSK",
        "price": "16 Cr",
        "isPlaying": true,
        "description": "All-rounder",
        "preview": "https://assets.iplt20.com/ipl/IPLHeadshot2022/9.png"
    },
    {
        "id": 21,
        "playerName": "Subhranshu Senapati",
        "from": "CSK",
        "price": "20 L",
        "isPlaying": false,
        "description": "Bowler",
        "preview": "https://assets.iplt20.com/ipl/IPLHeadshot2022/20574.png"
    },
    {
        "id": 22,
        "playerName": "Devon Conway",
        "from": "CSK",
        "price": "6 Cr",
        "isPlaying": true,
        "description": "Batsman",
        "preview": "https://assets.iplt20.com/ipl/IPLHeadshot2022/20572.png"
    },
    {
        "id": 23,
        "playerName": "Deepak Chahar",
        "from": "CSK",
        "price": "14 Cr",
        "isPlaying": true,
        "description": "Bowler",
        "preview": "https://assets.iplt20.com/ipl/IPLHeadshot2022/140.png"
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