/*
     Student Name: Samuel Ayoola
     File Name: script.js
     Date: 18/11/2022

*/

  //Global variables

  var video = document.getElementById("example");
  var videoSource =  document.getElementById("vid-src");

  //function to display the advert video
  function advert() {
     videoSource.src = "/kemmy/media/food.mp4";
     video.style.display = "block";
     video.load();

      video.addEventListener('ended', function() {
          // hide video
            video.style.display = "none";
          })
     }


  //Hamburger menu function

  function hamburger() {
      var menu = document.getElementById("menu-links");
      var logo = document.getElementById("ffc-logo");
      if (menu.style.display === "block" && logo.style.display === "none") {
          menu.style.display = 'none';
          logo.style.display = 'block';
      }
      else {
          menu.style.display = 'block';
           logo.style.display = 'none';
      }

  }

