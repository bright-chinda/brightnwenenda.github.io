let menuBtn = document.querySelector(".menu-btn")
let navlinks = document.querySelector(".nav-links")
let closeBtn = document.querySelector(".close-menu")
let openBtn = document.querySelector(".open-menu")
let projectLink = document.querySelectorAll(".remove-background")

menuBtn.addEventListener("click",function(){
    navlinks.classList.toggle("navactive")
    if(navlinks.classList.contains("navactive")){
        openBtn.style.display = "none";
        closeBtn.style.display = "block";
    }else if(!navlinks.classList.contains("navactive")){
        openBtn.style.display = "block";
        closeBtn.style.display = "none";
    }
})

for(let i = 0; i < projectLink.length; i++){
    projectLink[i].addEventListener("click",function(){
        navlinks.classList.remove("navactive")
        if(!navlinks.classList.remove("navactive")){
            openBtn.style.display = "block";
            closeBtn.style.display = "none";
        }
    })
}



function sendMail(){
    


    let params = {
        from_name : document.querySelector(".fullname").value,
        email_id : document.querySelector(".email_id").value,
        message : document.querySelector(".message").value

        
    }
    
    console.log(params);

    let seviceId = "service_byon9ke";
    let templateId = "template_2ktioei";
    emailjs.send(seviceId, templateId, params)

    .then( res =>{
        if(params.email_id === ""){
            alerts.style.display ="none";
        }
        if(params.from_name  === ""){
            alerts.style.display ="none"
        }
        if(params.message === ""){
            alerts.style.display ="none"
        }

        let alerts = document.querySelector(".alert-body")
        alerts.classList.add("alert-active")
        setTimeout(()=>{
            alerts.classList.remove("alert-active")
        }, 5000)
        console.log("succes");

        if(params === true){
            email_id.style.display = "none";
            from_name.value === "";
            console.log(params);
        }
       
            // params.email_id === "";
            // params.from_name === "";
            // params.message === "";

        if(alerts.classList.add("alert-active")){
            params.style.display = "none"
        }
        
    })
    .catch();
}

// let name = document.querySelector(".fullname")
    // let email_id = document.querySelector(".email_id")
    // let message = document.querySelector(".message")

// alert("hh")
        // name.value = '';
        // email_id.value = "";
        // message.value = "";

  