//Main.js main file for javascript on my personal portfolio
//By Gonçalo Mano started in  august 2022

// CONFIG VARIABLES

//Years for skills in my skills section

const html_year = 2018;
const react_year = 2020;
const js_year = 2019;
const bootstrap_year = 2020;



// particlesJS.load(@dom-id, @path-json, @callback (optional));
particlesJS.load('particles-js', 'script/assets/particles.json', function() {
});


// Update Experience Years in My Skills Tab
const current_year = new Date().getFullYear();
document.getElementById("skillhtml").innerHTML = current_year - html_year + " years";
document.getElementById("skillreact").innerHTML = current_year - react_year + " years";
document.getElementById("skilljs").innerHTML = current_year - js_year + " years";
document.getElementById("skillbootstrap").innerHTML = current_year - bootstrap_year + " years";