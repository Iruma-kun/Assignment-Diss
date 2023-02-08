$('.mainsection').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
});

$(document).ready(function () {

    let teamList = [{
        "id": 0,
        "Name": "Mumbai Indians",
        "style":"Mumbai",
        "teamPreview": "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/MI/Logos/Roundbig/MIroundbig.png "},{
        "id": 1,
        "Name": "Royal Challengers",
        "style":"Royal",
        "teamPreview": "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/RCB/Logos/Roundbig/RCBroundbig.png"},{
        "id": 2,
        "Name": "Kolkata Knight Riders",
        "style":"Kolkata",
        "teamPreview": "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/KKR/Logos/Roundbig/KKRroundbig.png"},{
        "id": 3,
        "Name": "Chennai Super Kings",
        "style":"Chennai",
        "teamPreview": "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/CSK/logos/Roundbig/CSKroundbig.png"},{
        "id": 4,
        "Name": "Gujarats Titans",
        "style":"Gujarat",
        "teamPreview": "	https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/GT/Logos/Roundbig/GTroundbig.png"},{
        "id": 5,
        "Name": "Rajasthan Royals",
        "style":"Rajasthan",
        "teamPreview": "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/RR/Logos/Roundbig/RRroundbig.png"}
    ];

    // let batsMan = document.getElementById("teamA");
    // let ballMan = document.getElementById("teamB");

    for (let count = 0; count < teamList.length; count++) {

        let teamInfo = teamList[count];

        let div1 = document.createElement("div");
        div1.classList.add("card");
        div1.id = teamInfo.style;

        let body = document.body;
        body.append(div1);

        let img = document.createElement("img");
        img.src = teamInfo.teamPreview;

        let info = document.createElement("div");
        info.classList.add("info");

        let h2 = document.createElement("h2");
        h2.innerText = teamInfo.Name;

        info.append(h2);

        div1.append(img, info);

    
        // if (teamInfo.isAccessory === true) {
        //     access.append(div1);   
        // } else {
        //     clothes.append(div1);
        // }

        $(".card").on("click",function(e){
          
            const Id = e.currentTarget.id;
          
            location.href = "/Js/Project_IPL/mi.html?playerId=" + Id;
          });

        //   $(".card").on("click",function(e){
        //     const id = e.currentTarget.id;
          
        //     location.href = "\product.html?productId=" +id;
        //     console.log("clicked")
        //   });
        
        //   $("#cart-wrapper").on("click", function (e) {
        
        //     const cartid = e.currentTarget.id;
        //     window.location = "checkout.html?productData=" + cartid;
        //   })

        $(".card").on("click",function(e){
          
            const Id = 1;
          
            location.href = "/Js/Project_IPL/rcb.html?Id=" + Id;
          });

        $(".card").on("click",function(e){
          
            const Id = 2;
          
            window.location.href = "/Js/Project_IPL/kkr.html?Id=" + Id;
          });

        $(".card").on("click",function(e){
          
            const Id = 3;
          
            window.location.href = "/Js/Project_IPL/csk.html?Id=" + Id;
          });


        $(".card").on("click",function(e){
          
            const Id = 4;
          
            window.location.href = "/Js/Project_IPL/gt.html?Id=" + Id;
          });

        $(".card").on("click",function(e){
          
            const Id = 5;
          
            window.location.href = "/Js/Project_IPL/rr.html?Id" + Id;
          });





    };

})