/*jshint esversion: 6 */

const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);

// ## Task 1-3 from top to bottom
let newTitle = document.getElementsByTagName("title");
newTitle[0].textContent = "Great Idea!";

let newNav = document.getElementsByTagName("a");
newNav[0].textContent = "Services";
newNav[1].textContent = "Product";
newNav[2].textContent = "Vision";
newNav[3].textContent = "Features";
newNav[4].textContent = "About";
newNav[5].textContent = "Contact";

// come back to later - need to find out how to insert break tags
// let newHeader1 = document.getElementsByTagName("h1");
// newHeader1[0].textContent = "DOM is Awesome";

let newButtonText = document.getElementsByTagName("button");
newButtonText[0].textContent = "Get Started";

let newPic1 = document.getElementById("cta-img");
newPic1.setAttribute("src", "img/header-img.png");

let newTopContentHeader = document.querySelectorAll(".top-content .text-content h4");
newTopContentHeader[0].textContent = "Features";
newTopContentHeader[1].textContent = "ABout";

let newTopContentPar = document.querySelectorAll(".top-content .text-content p");
newTopContentPar[0].textContent = "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";
newTopContentPar[1].textContent = "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";

let newPic2 = document.getElementById("middle-img");
newPic2.setAttribute("src", "img/mid-page-accent.jpg");

let newBottomContentHeader = document.querySelectorAll(".bottom-content .text-content h4");
newBottomContentHeader[0].textContent = "Services";
newBottomContentHeader[1].textContent = "Product";
newBottomContentHeader[2].textContent = "Vision";

let newBottomContentPar = document.querySelectorAll(".bottom-content .text-content p");
newBottomContentPar[0].textContent = "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";
newBottomContentPar[1].textContent = "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";
newBottomContentPar[2].textContent = "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";

let newContactHeader = document.querySelectorAll(".contact h4");
newContactHeader[0].textContent = "Contact";

let newContactPar = document.querySelectorAll(".contact p");
// come back to later - need to find out how to insert break tags
// newContactPar[0].textContent = "123 Way 456 Street<br>Somewhere, USA";
newContactPar[1].textContent = "1 (888) 888-8888";
newContactPar[2].textContent = "sales@greatidea.io";

let newFooter = document.querySelectorAll("footer p");
newFooter[0].textContent = "Copyright Great Idea! 2018<";
