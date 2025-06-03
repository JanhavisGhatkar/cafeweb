// script.js

document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll("nav a, .auth a");
  
    links.forEach(link => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        alert(`You clicked on '${link.textContent.trim()}'.\nIn the future, this will navigate or trigger an API.`);
      });
    });

     const logo = document.getElementById("logo-link");
     if(logo){
        logo.addEventListener("click", (e) => {
        e.preventDefault();
        alert("You clicked on 'CAFFINATED'\nThis will navigate to the homepage or reload in the future.");
      });
      
    }

  
    document.querySelector(".hero button").addEventListener("click", () => {
      alert("Get Started clicked! You can redirect this to a signup or info page later.");
    });
  });
  