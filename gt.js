$(document).ready(function () {

    let playerList =[
        
 
        {
            "id": 40,
            "playerName": "Hardik Panya",
            "from": "GT",
            "price": "11 Cr",
            "isPlaying": true,
            "description": "Bowler",
            "preview": "https://assets.iplt20.com/ipl/IPLHeadshot2022/2740.png"
        },
        {
            "id": 41,
            "playerName": "David Miller",
            "from": "GT",
            "price": "75 L",
            "isPlaying": false,
            "description": "Batsman",
            "preview": "https://assets.iplt20.com/ipl/IPLHeadshot2022/187.png"
        },
        {
            "id": 42,
            "playerName": "Shubham Gill",
            "from": "GT",
            "price": "7 Cr",
            "isPlaying": false,
            "description": "Batsman",
            "preview": "https://assets.iplt20.com/ipl/IPLHeadshot2022/3761.png"
        },
        {
            "id": 43,
            "playerName": "Jayant Yadav",
            "from": "GT",
            "price": "1.70 Cr",
            "isPlaying": true,
            "description": "All-rounder",
            "preview": "https://assets.iplt20.com/ipl/IPLHeadshot2022/1740.png"
        },
        {
            "id": 44,
            "playerName": "Rahul Tewatia",
            "from": "GT",
            "price": "9 Cr",
            "isPlaying": false,
            "description": "Bowler",
            "preview": "https://assets.iplt20.com/ipl/IPLHeadshot2022/1740.png"
        },
        {
            "id": 45,
            "playerName": "Vijay Shankar",
            "from": "GT",
            "price": "3.20 Cr",
            "isPlaying": true,
            "description": "All-rounder",
            "preview": "https://assets.iplt20.com/ipl/IPLHeadshot2022/1083.png"
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