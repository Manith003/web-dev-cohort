var cards = [
    {
        miniHeading: "Top Creator",
        mainHeading: "Graphic Designer",
        username: "@artbylena",
        jobName: "Creative Designs Co.",
        isStatus: false,
        src: "https://images.unsplash.com/photo-1731484395517-62f2f0374c4a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHByb2Zlc3Npb25hbCUyMG1vZGVsfGVufDB8fDB8fHww"
      },
      {
        miniHeading: "New Talent",
        mainHeading: "Frontend Developer",
        username: "@codewithsam",
        jobName: "TechNova Inc.",
        isStatus: false,
        src: "https://images.unsplash.com/photo-1564485377539-4af72d1f6a2f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fG1vZGVsfGVufDB8fDB8fHww"
      },
      {
        miniHeading: "Featured Artist",
        mainHeading: "3D Animator",
        username: "@motionmike",
        jobName: "DreamWorks Studios",
        isStatus: false,
        src: "https://images.unsplash.com/photo-1676293660771-9ef13c22c1b9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8fHw%3D"
      },
      {
        miniHeading: "Rising Star",
        mainHeading: "UI/UX Designer",
        username: "@pixelpaul",
        jobName: "BrightLabs",
        isStatus: false,
        src: "https://images.unsplash.com/photo-1701287348766-2eeb0e16f874?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cHJvZmVzc2lvbmFsJTIwbW9kZWx8ZW58MHx8MHx8fDA%3D"
      },
      {
        miniHeading: "Top Innovator",
        mainHeading: "Product Manager",
        username: "@pmkaren",
        jobName: "InnoVateX",
        isStatus: false,
        src: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmVzc2lvbmFsJTIwYm95fGVufDB8fDB8fHww"
      },
      {
        miniHeading: "Trending Now",
        mainHeading: "Marketing Specialist",
        username: "@marketmaddy",
        jobName: "AdVision Media",
        isStatus: false,
        src: "https://images.unsplash.com/photo-1681070909604-f555aa006564?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHByb2Zlc3Npb25hbCUyMGJveXxlbnwwfHwwfHx8MA%3D%3D"
      },
      {
        miniHeading: "Top Freelancer",
        mainHeading: "Mobile App Developer",
        username: "@buildbyben",
        jobName: "Freelance Hustle",
        isStatus: false,
        src: "https://images.unsplash.com/photo-1652123747730-2d229930fddd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTYyfHxwcm9mZXNzaW9uYWwlMjBtb2RlbHxlbnwwfHwwfHx8MA%3D%3D"
      }
  ];
  
let main = document.querySelector("main");

var addCard = '' ;

  cards.forEach(function(elem,idx){

    addCard += `<div class="container" style="background-image: url(${elem.src});">
            <div class="first">
                <div class="mini-heading1">
                    <h3>${elem.miniHeading}</h3>
                </div>
                <div class="heading1">
                    <h1>${elem.mainHeading}</h1>
                </div>
            </div>
            <div class="second">
                <div class="blur">
                    <div class="blur-back"></div>
                    <div class="profile">
                        <div class="logoimg">
                            <img src=${elem.src}
                                alt="">
                            <div class="profile-text">
                                <h2>${elem.username}</h2>
                                <p>${elem.jobName}</p>
                            </div>
                        </div>

                    </div>
                    <div class="button">
                        <button id=${idx} class="btn">Follow</button>
                    </div>
                </div>
           </div>
       </div>`
})

main.innerHTML = addCard;


main.addEventListener("click", function(dets) {

let num = Math.floor(Math.random() * 7000) + 1000;
console.log("After "+num+" milliseconds, the button will change to Connected.");

   let gold = cards[dets.target.id];
    if(gold.isStatus == false){
        gold.isStatus = true;
        dets.target.innerHTML = "Requesting...";
        dets.target.classList.add("blink");
        setTimeout(function(){
            dets.target.innerHTML = "Connected"
            dets.target.style.backgroundColor = "#4CAF50";
            dets.target.style.color = "white";
            dets.target.classList.remove("blink");
        },num);
       
    }else{
        dets.target.innerHTML = "Follow";
        dets.target.style.backgroundColor = "#fff";
        dets.target.style.color = "#000";
        gold.isStatus = false;
    }
});

