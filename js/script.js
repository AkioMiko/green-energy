function myToggle() {
    var element = document.getElementById("navbarNav");
    element.classList.toggle("show");
  }
  
  // Load your images on page-load
  function preloader() {
    const imagesList = [
       "./img/solar.jpg",
       "./img/wind.jpg",
       "./img/hydro.jpg"
    ];
    const images = [];
    for (let i = 0; i < imagesList.length; i++) {
        images[i] = new Image();
        images[i].src = imagesList[i];
    }
  
    // Images ready to be used:
    console.log(`Preloaded images:\n\t${images[0].src}\n\t${images[1].src}\n\t${images[2].src}`);
  };
  window.addEventListener("load", preloader);
  

  
    /* 
    Get all buttons in a NODE LIST of buttons (array like structure) */
    
    /* 
    Complete your resource-object that will store the dynamic content.
    Resource object should 3 sub-objects. Give your sub-objects
    meaningful names. Every sub-object should have the following
    properties headingContent, bodyText, imgUrl and imgAlt. */

    /* 
    Get the reference to your HTML-container
    that will be dynamically loaded from the resource-object. */
    
    /* 
    The first button in a NODE LIST of buttons will initially 
    have the id: active-button - this will uniquely style 
    the active button (CSS rule). 
    
    The first content from the
    resource-object will be loaded on the page load:
    `<h1>${headingContent}</h1>
     <img src="${imgUrl}" alt="${imgAlt}">
     <p>${bodyText}</p>` */
    
    /* 
    Start your handleSelection function here. */ 
        
        /* 
        Remove the id active-button from the element that
        contains it prior to the click-event. 

        This will require the loop throught the NODE LIST of buttons. 
        Inside the loop, use conditional and the element object method
        hasAttribute() to check if the current button in the loop containes the id.
        If it does, use element-object property removeAttribute()
        to remove the id. */

        /*
        Use the element-object method setAttribute() to set the id active-button 
        to the currently clicked button. */
    
        /* 
        Use conditional and event-object to check which button is clicked
        and based on that, create HTML with the data inside the backticks:
        `<h1>${headingContent}</h1>
         <img src="${imgUrl}" alt="${imgAlt}">
         <p>${bodyText}</p>`
        Assign this content to to your HTML-container that will 
        be dynamically loaded (you already got the reference to 
        this container before you started the function handleSelection) */ 
    
    /* 
    Close your handleSelection function here. */  
    
    /* 
    Register all buttons to click event. The event-handler handleSelection will listen 
    for this event to happen. */ 


  // Resource Object
  const resourceObject = {
    solar: {
        headingContent: "Solar Energy",
        bodyText: "Solar energy is a type of renewable energy that comes from the sun's radiation. It is harnessed and converted into usable electricity or heat through various technologies, making it an eco-friendly and sustainable alternative to fossil fuels.",
        imgUrl: "./img/solar.jpg",
        imgAlt: "Solar Energy"
    },
    wind: {
        headingContent: "Wind Energy",
        bodyText: "Wind energy is another form of renewable energy that harnesses the power of the wind to generate electricity. Wind turbines are used to convert the kinetic energy of the wind into mechanical energy, which is then transformed into electrical energy through a generator. ",
        imgUrl: "./img/wind.jpg",
        imgAlt: "Wind Energy"
    },
    hydro: {
        headingContent: "Hydropower",
        bodyText: "Hydropower, also known as hydroelectric power, is a form of renewable energy that harnesses the energy of moving water to generate electricity. It is one of the oldest and most widely used sources of renewable energy in the world.",
        imgUrl: "./img/hydro.jpg",
        imgAlt: "Hydropower"
    }
  };
  
  const btn1 = document.getElementById("solar");
  const btn2 = document.getElementById("wind");
  const btn3 = document.getElementById("hydro");
  const solutionContainer = document.getElementById("solution-container");
  const solutionHeading = document.getElementById("solution-heading");
  const solutionImg = document.getElementById("solution-img");
  const solutionText = document.getElementById("solution-text");
  
  function handleSelection(event) {
    // Remove active-button class from all buttons
    btn1.classList.remove("active-button");
    btn2.classList.remove("active-button");
    btn3.classList.remove("active-button");
  
    // Set active-button class to the clicked button
    event.target.classList.add("active-button");
  
    // Get the id of the clicked button
    const selectedButtonId = event.target.id;
  
    // Get the corresponding solution from the resourceObject
    const selectedSolution = resourceObject[selectedButtonId];
  
    // Update the content in the solution container
    solutionHeading.innerText = selectedSolution.headingContent;
    solutionImg.src = selectedSolution.imgUrl;
    solutionImg.alt = selectedSolution.imgAlt;
    solutionText.innerText = selectedSolution.bodyText;
  }
  
  // Register all buttons to click event
  btn1.addEventListener("click", handleSelection);
  btn2.addEventListener("click", handleSelection);
  btn3.addEventListener("click", handleSelection);