/* type text */
function EffectText() {
    document.getElementById("demo").innerHTML = "";
    var i = 0;
    var txt = 'توسعه دهنده و طراح وب'; /* The text */
    var speed = 100; /* The speed/duration of the effect in milliseconds */

    function typeWriter() {
        if (i < txt.length) {
            document.getElementById("demo").innerHTML += txt.charAt(i);
            i++;
            setTimeout(typeWriter, speed);
        }
    }
    typeWriter()
}

setInterval(EffectText, 4000)







/* strat work */
PlaceOfImage = document.getElementById("image-place")


document.getElementById("all").onclick = function () {
    ListOfAll = document.querySelectorAll(".team, .Horizontal")
    console.log(ListOfAll)
    for (let image = 0; image < ListOfAll.length; image++) {
        ListOfAll[image].style.display = "block"
    }
}


document.getElementById("team").onclick = function () {
    ListOfCollective = document.querySelectorAll(".team")
    ListOfIndividualHide = document.querySelectorAll(".fardi")
    console.log(ListOfCollective);
    for (let image = 0; image < ListOfCollective.length; image++) {
        ListOfCollective[image].style.display = "block"
    }
    for (let image = 0; image < ListOfIndividualHide.length; image++) {
        ListOfIndividualHide[image].style.display = "none"
    }
}


document.getElementById("fardi").onclick = function () {
    ListOfIndividual = document.querySelectorAll(".fardi")
    ListOfCollectiveHide = document.querySelectorAll(".team")
    console.log(ListOfIndividual)
    for (let image = 0; image < ListOfIndividual.length; image++) {
        ListOfIndividual[image].style.display = "block"
    }
    for (let image = 0; image < ListOfCollectiveHide.length; image++) {
        ListOfCollectiveHide[image].style.display = "none"
    }
}



/* nav */
function openNav() {
    document.getElementById("mySidenav").style.width = "350px";
    document.getElementById("main").style.marginRight = "350px";
    document.getElementById("icon").classList.add("d-none")

}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginRight = "0";
    document.getElementById("icon").classList.remove("d-none")
}




/* icon */
function myFunction(x) {
    x.classList.toggle("change");
}




/* number for bottom about*/
window.addEventListener("scroll", e => {
    if (window.scrollY > 670 && window.scrollY < 790) {
        const counters = document.querySelectorAll(".counter");

        counters.forEach((counter) => {
            counter.innerText = "0";

            const updateCounter = () => {
                const target = +counter.getAttribute("data-target");
                const c = +counter.innerText;

                const increment = target / 100;

                if (c < target) {
                    counter.innerText = `${Math.ceil(c + increment)}`;
                    setTimeout(updateCounter, 10);
                } else {
                    counter.innerText = target;
                }
            };
            updateCounter();
        });
    }
})




/* active navbar */
const sections = document.querySelectorAll(".section");

const navbarLinks = document.querySelectorAll(".navbar-link");

window.addEventListener("scroll", () => {
    sections.forEach((section, i) => {
        if (window.pageYOffset >= section.offsetTop - 10) {
            navbarLinks.forEach((navbarLink) => {
                navbarLink.classList.remove("active");
            });
            navbarLinks[i].classList.add("active");
        }
    });
});




/* comments */
