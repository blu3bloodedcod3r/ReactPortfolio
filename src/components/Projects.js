import React, {useState} from 'react';
import Project from "./Project";

export default function Projects() {
    const [projects] = useState([
        {
         name: "Employee Tracker",
         image: "bakendpic",
         repolink: "https://github.com/blu3bloodedcod3r/Employee_Tracker",
         applink: "https://bootcampspot.instructuremedia.com/embed/d6248e8a-e5c4-4301-b637-922c3a64b172",
         description: "Utilized mySQL to create an E-Commerce back-end that utilizes object relational mapping within a database."
        }, 
        {
            name: "Food Finder App",
            image: "foodfinderapREADmescreenshot",
            repolink: "https://github.com/naveed-mahmoudian/Food-Finder-App",
            applink: "https://naveed-mahmoudian.github.io/Food-Finder-App/",
            description: "A group project that created an app with 2 fetch API's, jQuery, Javascript, Bootstrap CSS and HTML. The purpose of this app is to find restaurants near your searched location."
        },
        {
            name: "Weather App",
            image: "weatherAppScreenshot",
            repolink: "https://github.com/blu3bloodedcod3r/weatherApp",
            applink: "https://blu3bloodedcod3r.github.io/weatherApp/",
            description: "Using fetch API's, this app checks your current day and 4-day futurecast. Your searches will produce a button so that you may view the weather for that city by just clicking on the name of the city."
        },
        {
            name: "CeeCee's Salon",
            image: "ccs_salon-homepage",
            repolink: "https://github.com/blu3bloodedcod3r/CeeCee-s_Salon",
            applink: "https://arcane-mesa-34792.herokuapp.com",
            description: "Group created bussiness website to help make appointments for a hairstylist using Express.js, Handlebars, mySQL2, Sequeilize and Bcrypt."
        },
    ]);
    
    return (
        <div>
            {
                projects.map((project, i ) => (
                    <Project project={project} key={i}/>

                   
                ))
            }
        </div>
    );



    // return (
    //     <div id="projects" className="project-section">
    //         <h2>Projects</h2>
    //         <section className="project-container">
    //             <div className="project-card">
    //                 <a href="https://bootcampspot.instructuremedia.com/embed/79090ab3-b218-4225-ab44-8c1b3e821bde" target="_blank"><img className="proj-img" src={emplytrack} alt="Screenshot of Employee tracker video/code" width="50%" style="max-width: 100%;"/></a>
    //             <div className="project-card">
    //                 <a href="https://arcane-mesa-34792.herokuapp.com" target="_blank"><img className="proj-img" src={salon} alt="CeeCee's Salon Homepage screenshot"/></a>
    //                 <h3>CeeCee's Salon</h3>
    //                 <p className="project-descr">Group created bussiness website to help make appointments for a hairstylist using Express.js, Handlebars, mySQL2, Sequeilize and Bcrypt.</p>
    //             </div>
    //         </section>     
    //     </div>
    // );
}