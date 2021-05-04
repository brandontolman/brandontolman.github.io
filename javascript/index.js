// Control Entry page
/*
(function() {
  
    let body = document.getElementById('body');
    let nav = document.getElementById('nav');
    let entry = document.getElementById('entry');
    let test = document.getElementById('header_hello');

    function scrollDown() {
        body.scrollTop = nav.offsetTop
    }
    if(entry.offsetTop == 10) {
        alert('in if');
        window.addEventListener('scroll', scrollDown, false);
    }
    
}());
*/

// Nav Bar

(function() {
    let nav = document.getElementById('nav');
    let top = nav.offsetTop;

    function stickyNav() {
        if (window.scrollY >= top) {
            nav.className = 'sticky';
           // $('html').addClass('background');
        }
        else {
            nav.className = 'nonsticky';
           // $('html').removeClass('background');
        }
    }

    function resetTop() {
        top = nav.offsetTop;
        mobileNav();
    }

    function mobileNav() {
        let $width = $(window).width();
        if($width < 600) $('.list').hide();
        else $('.list').show();
    }
    window.addEventListener('load', mobileNav, false);
    window.addEventListener('scroll', stickyNav, false);
    window.addEventListener('resize', resetTop, false);
}());


// My Work Experience Computer
(function() {
   
    function getTarget(e) {
        if(!e) {
            e = window.event;
        }
        return e.target || e.srcElement;
    }

    function workExperience(e) {
        let desc = document.getElementById('desc');
        target = getTarget(e);
        if(target.id == 'specialist') {
            desc.innerHTML = "Functioning as the <span class='orange'>Technical Lead</span> for one of AFS's ServiceNow programs. Resposibilities include:"
            + "<blockquote><span class='orange'>></span> Manage development team with notable projects including Telecom Integrations, Virtual Agent implementation, and Archiving of over 60 million records"
            + "</br></br><span class='orange'>></span> Manage over a dozen client ServiceNow instances by organizing patching/upgrade schedules, weekly meetings with ServiceNow Rep, and monitoring platform performance/availability"
            + "</br></br><span class='orange'>></span> Architect new solutions ranging from break fixes to multi-month application and integration projects</blockquote>";
            
            document.getElementById('dateSpec').className = 'visible';
            document.getElementById('dateSen').className = 'hidden';
            document.getElementById('dateAna').className = 'hidden';
            specialist.className = 'orange';
            senior.className = 'blue';
            analyst.className = 'blue';  
        }
        else if(target.id == 'senior') {
            desc.innerHTML = "Functioned as a <span class='orange'>Development Team Lead</span> for one of AFS's ServiceNow programs. Resposibilities include:"
        + "<blockquote><span class='orange'>></span> Led development team to deploy releases across various applications including Incident, Change, Problem, Knowledge, Service Portal, and Service Catalog"
        + "</br></br><span class='orange'>></span> Held weekly status meetings with various client IT Groups to create timelines and prioritize developments"
        + "</br></br><span class='orange'>></span> Managed over a dozen client ServiceNow instances by organizing patching/upgrade schedules, weekly meetings with ServiceNow Rep, and monitoring platform performance/availability</blockquote>";

        document.getElementById('dateSpec').className = 'hidden';
        document.getElementById('dateSen').className = 'visible';
        document.getElementById('dateAna').className = 'hidden';
        specialist.className = 'blue';
        senior.className = 'orange';
        analyst.className = 'blue'; 
        }
        else if(target.id == 'analyst'){
            desc.innerHTML = "Functioned as a <span class='orange'>Business Analyst</span> for one of AFS's ServiceNow programs. Resposibilities include:"
            + "<blockquote><span class='orange'>></span> Managed development team backlog coordinating with Accenture Leads and Client Stakeholders to gather, solution, and track requirements "
            + "</br></br><span class='orange'>></span> Managed development team releases to ensure requirements meet client needs and follow development best practices"
            + "</br></br><span class='orange'>></span> Support the management of client ServiceNow instance through performance and availability monitoring</blockquote>";
    
            document.getElementById('dateSpec').className = 'hidden';
            document.getElementById('dateSen').className = 'hidden';
            document.getElementById('dateAna').className = 'visible';
            specialist.className = 'blue';
            senior.className = 'blue';
            analyst.className = 'orange'; 
        }

        if (e.preventDefault) {
            e.preventDefault();
        }
        else {
            e.returnValue = false;
        }
    }

    let table = document.getElementById('experience');
    if(table.addEventListener) {
        table.addEventListener('click', function(e) {workExperience(e);}, false);
    }
    else {
        table.attachEvent('onClick', function(e) {workExperience(e);});
    }

}());

//My work experience Mobile
$(function() {
    let $width = $(window).width();
    if($width < 600) {
        $('.computer').hide();
        $('.mobile').show();
    }
    else {
        $('.computer').show();
        $('.mobile').hide();
    }
});