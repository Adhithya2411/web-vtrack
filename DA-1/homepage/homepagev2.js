

// eventlistener for tabs for switching between content 
// and changing the color of the tabs which are active

function changeContent(evt, currentTarget) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
    tablinks[i].style.backgroundColor = "white";
    tablinks[i].style.color = "#0062f4";
  }
  document.getElementById(currentTarget).style.display = "inline-block";
  evt.currentTarget.className += " active";
  evt.currentTarget.style.backgroundColor = "#3f88e9";
  evt.currentTarget.style.color = "white";
}


document.addEventListener('DOMContentLoaded', function() {
    document.getElementById("defaultOpen").click();

  // when the home is clicked, scroll to the top of the page
  document.getElementById("defaultOpen").addEventListener('click', function() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  // when the navigation bar is clicked, scroll to the respective section
  document.getElementById("Courses-offered").addEventListener('click', function(event) {
    event.preventDefault();
    window.scrollTo({
      top: 400,
      behavior: 'smooth'
    });
  });

  document.getElementById("Research").addEventListener('click', function(event) {
    event.preventDefault();
    window.scrollTo({
      top: 800,
      behavior: 'smooth'
    });
  });

  document.getElementById("Facilities").addEventListener('click', function(event) {
    event.preventDefault();
    window.scrollTo({
      top: 1200,
      behavior: 'smooth'
    });
  });

  document.getElementById("Campus-tour").addEventListener('click', function(event) {
    event.preventDefault();
    window.scrollTo({
      top: 1600,
      behavior: 'smooth'
    });
  });

  document.getElementById("Acheivements").addEventListener('click', function(event) {
    event.preventDefault();
    window.scrollTo({
      top: 2800,
      behavior: 'smooth'
    });
  });

    //when the headline is hovered over, enlarge the font size
    let headline = document.getElementById("headline");

    headline.addEventListener('mouseover', function() {
      headline.style.fontSize = "50px";
    });

    headline.addEventListener('mouseout', function() {
      headline.style.fontSize = "40px";
    });

    //when the image is hovered over, enlarge the image
    let images = document.querySelectorAll("#image");

    images.forEach(function(image) {
      image.addEventListener('mouseover', function() {
      image.style.width = "400px";
      image.style.height = "300px";
      });

      image.addEventListener('mouseout', function() {
      image.style.width = "350px";
      image.style.height = "250px";
      });
    });

});


