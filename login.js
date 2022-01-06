const inscrevase_btn = document.querySelector("#inscrevase_btn");
const login_btn = document.querySelector("#login_btn");
const container = document.querySelector(".container");

inscrevase_btn.addEventListener('click', () => {
    container.classList.add("inscrevase-mode");
});

login_btn.addEventListener('click', () => {
    container.classList.remove("inscrevase-mode");
});



 

  window.fbAsyncInit = function() {
    FB.init({
      appId      : '{your-app-id}',
      cookie     : true,
      xfbml      : true,
      version    : '{api-version}'
    });
      
    FB.AppEvents.logPageView();   
      
  };

  (function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src = "https://connect.facebook.net/en_US/sdk.js";
     fjs.parentNode.insertBefore(js, fjs);
   }(document, 'script', 'facebook-jssdk'));



   function checkLoginState() {
    FB.getLoginStatus(function(response) {
      statusChangeCallback(response);
    });
  }