let menuBox = document.querySelector(".menu-icon")
let headerRight = document.querySelector(".header-right")
let closeMenuIcon = document.querySelector(".fa-x")
let openMenuIcon = document.querySelector(".fa-bars")

let mainSectionLinkBox = document.querySelector(".main-section__links")

let resumeHeadingText = document.querySelector(".wrapper-resume > h1")

let projectHeadingText = document.querySelector(".wrapper-project > h1")

let mainSection = document.querySelector(".main-section")
let resumeSection = document.querySelector(".resume")
let projectSection = document.querySelector(".project")
let mainFooter = document.querySelector(".main-footer")
let upArrowBtn = document.querySelector(".up-arrow")

// Get all links and add event to them

//-------------------------------------------------------

let headerResumeLink = document.querySelector(".wrapper-header .header-right .header-right__resume")
let headerContactLink = document.querySelector(".wrapper-header .header-right .header-right__contact")
let mainSectionResumeLink = document.querySelector(".main-section__links__resume")
let headerProjectLink = document.querySelector(".wrapper-header .header-right .header-right__project")
let mainSectionProjectLink = document.querySelector(".main-section__links__project")
let headerHomeLink = document.querySelectorAll(".wrapper-header .header-left .header-left__home")

headerHomeLink.forEach(e => {

    e.addEventListener("click", e => {

        resumeSection.classList.add("invisible")

        projectSection.classList.add("invisible")

        mainSection.classList.remove("invisible")

    })

})

headerResumeLink.addEventListener("click", e => {

    mainSection.classList.add("invisible")

    projectSection.classList.add("invisible")

    resumeSection.classList.remove("invisible")

    // toggle menu icon

    openMenuIcon.classList.remove("hide")

    closeMenuIcon.style.setProperty("display", "none")

    // remove link panel and set scroll

    headerRight.classList.remove("show")

    let body = document.querySelector("body")

    body.style.setProperty("overflow-y", "auto")

})

mainSectionResumeLink.addEventListener("click", e => {

    mainSection.classList.add("invisible")

    projectSection.classList.add("invisible")

    resumeSection.classList.remove("invisible")

})

headerProjectLink.addEventListener("click", e => {

    mainSection.classList.add("invisible")

    resumeSection.classList.add("invisible")

    projectSection.classList.remove("invisible")

    // toggle menu icon

    openMenuIcon.classList.remove("hide")

    closeMenuIcon.style.setProperty("display", "none")

    // remove link panel and set scroll

    headerRight.classList.remove("show")

    let body = document.querySelector("body")

    body.style.setProperty("overflow-y", "auto")

})

mainSectionProjectLink.addEventListener("click", e => {

    mainSection.classList.add("invisible")

    resumeSection.classList.add("invisible")

    projectSection.classList.remove("invisible")

})

headerContactLink.addEventListener("click", e => {
    
    // toggle menu icon

    openMenuIcon.classList.remove("hide")

    closeMenuIcon.style.setProperty("display", "none")

    // remove link panel and set scroll

    headerRight.classList.remove("show")

    let body = document.querySelector("body")

    body.style.setProperty("overflow-y", "auto")

})

//-------------------------------------------------------


// Toggle link box, close and open icon

menuBox.addEventListener("click", e => {

    headerRight.classList.toggle("show")

    openMenuIcon.classList.toggle("hide")

    if(openMenuIcon.classList.contains("hide")) {

        closeMenuIcon.style.setProperty("display", "block")

    } else {

        closeMenuIcon.style.setProperty("display", "none")

    }

    // Disable vertical scroll bar when "links panel" appear 

    if(headerRight.classList.contains("show")) {

        let body = document.querySelector("body")

        body.style.setProperty("overflow-y", "hidden")

        // Hide "links panel"

        headerResumeLink.addEventListener("click", e => {

            hideLinkPanel()

        })

    } else {

        let body = document.querySelector("body")

        body.style.setProperty("overflow-y", "auto")

    }

})

function hideLinkPanel() {

}

// add "show class" to "circle links", h1 resume and project when intersected

let observe = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        entry.target.classList.toggle("show", entry.isIntersecting)
        
    })

}, {threshold: 1})

observe.observe(mainSectionLinkBox)

observe.observe(resumeHeadingText)

observe.observe(projectHeadingText)

