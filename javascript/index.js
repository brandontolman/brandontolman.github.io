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

        let $rowSpecMobile = $('#rowSpecMobile');
        let $rowSenMobile = $('#rowSenMobile');
        let $rowAnaMobile = $('#rowAnaMobile');
        let $projectsDiv = $('#projects');

        let $specDesc = $("<tr>" + 
        "<td id='descSpecMobile' colspan='2'>Functioning as the <span class='orange'>Technical Lead</span> for one of AFS's ServiceNow programs." +
            "Resposibilities include: " +
            "<blockquote><span class='orange'>></span> Manage development team with notable projects including Telecom Integrations, Virtual Agent implementation, and Archiving of over 60 million records" +
            "</br></br><span class='orange'>></span> Manage over a dozen client ServiceNow instances by organizing patching/upgrade schedules, weekly meetings with ServiceNow Rep, and monitoring platform performance/availability" +
            "</br></br><span class='orange'>></span> Architect new solutions ranging from break fixes to multi-month application and integration projects</blockquote>" +
        "</td> " +
    "</tr>");
        let $senDesc = $("<tr>" +
        "<td id='descSenMobile' colspan='2'>Functioned as a <span class='orange'>Development Team Lead</span> for one of AFS's ServiceNow programs. Resposibilities include:" +
            "<blockquote><span class='orange'>></span> Led development team to deploy releases across various applications including Incident, Change, Problem, Knowledge, Service Portal, and Service Catalog" +
            "</br></br><span class='orange'>></span> Held weekly status meetings with various client IT Groups to create timelines and prioritize developments" +
            "</br></br><span class='orange'>></span> Managed over a dozen client ServiceNow instances by organizing patching/upgrade schedules, weekly meetings with ServiceNow Rep, and monitoring platform performance/availability</blockquote>" +
        "</td>" +
    "</tr>");
        let $anaDesc = $("<tr id='anaDescRow'>" +
        "<td id='descSpecMobile' colspan='2'>" +
            "Functioned as a <span class='orange'>Business Analyst</span> for one of AFS's ServiceNow programs. Resposibilities include:" +
            "<blockquote><span class='orange'>></span> Managed development team backlog coordinating with Accenture Leads and Client Stakeholders to gather, solution, and track requirements " +
            "</br></br><span class='orange'>></span> Managed development team releases to ensure requirements meet client needs and follow development best practices" +
            "</br></br><span class='orange'>></span> Support the management of client ServiceNow instance through performance and availability monitoring</blockquote>" +
        "</td>" +
    "</tr>");
        $('#experienceMobile').on('click', function(e){
            if($(e.target).is($rowSpecMobile.children()[0]) || $(e.target).is($rowSpecMobile.children()[1])) {
                if(!$rowSenMobile.next().is($rowAnaMobile)) $rowSenMobile.next().detach();
                if(!$rowAnaMobile.next().is($projectsDiv)) $rowAnaMobile.next().detach();

                if($rowSpecMobile.next().is($rowSenMobile)) {
                    $rowSpecMobile.after($specDesc);
                    $(this).children().each(function() {
                        $(this).children().children().removeClass('orange');
                        $(this).children().children().addClass('blue');
                    });
                    $rowSpecMobile.children(":first").removeClass('blue');
                    $rowSpecMobile.children(":first").addClass('orange');
                }
                else {
                    $rowSpecMobile.children(":first").removeClass('orange');
                    $rowSpecMobile.children(":first").addClass('blue');
                    
                    $rowSpecMobile.next().detach();
                }
            }

            if($(e.target).is($rowSenMobile.children()[0]) || $(e.target).is($rowSenMobile.children()[1])) {
                if(!$rowSpecMobile.next().is($rowSenMobile)) $rowSpecMobile.next().detach();
                if(!$rowAnaMobile.next().is($projectsDiv)) $rowAnaMobile.next().detach();

                if($rowSenMobile.next().is($rowAnaMobile)) {
                    $rowSenMobile.after($senDesc);

                    $(this).children().each(function() {
                        $(this).children().children().removeClass('orange');
                        $(this).children().children().addClass('blue');
                    });
                    $rowSenMobile.children(":first").removeClass('blue');
                    $rowSenMobile.children(":first").addClass('orange');
                }
                else {
                    $rowSenMobile.children(":first").removeClass('orange');
                    $rowSenMobile.children(":first").addClass('blue');
                    
                    $rowSenMobile.next().detach();
                }
            }

            if($(e.target).is($rowAnaMobile.children()[0]) || $(e.target).is($rowAnaMobile.children()[1])) {
                if(!$rowSpecMobile.next().is($rowSenMobile)) $rowSpecMobile.next().detach();
                if(!$rowSenMobile.next().is($rowAnaMobile)) $rowSenMobile.next().detach();
             
                if($rowAnaMobile.next().attr('id') == undefined) {
                    $rowAnaMobile.after($anaDesc);

                    $(this).children().each(function() {
                        $(this).children().children().removeClass('orange');
                        $(this).children().children().addClass('blue');
                    });
                    $rowAnaMobile.children(":first").removeClass('blue');
                    $rowAnaMobile.children(":first").addClass('orange');
                }
                else { 
                    $rowAnaMobile.children(":first").removeClass('orange');
                    $rowAnaMobile.children(":first").addClass('blue');

                    $rowAnaMobile.next().detach();
                }
            }
        });

    }
    else {
        $('.computer').show();
        $('.mobile').hide();
    }
});

//Projects Mobile
$(function() {
    let $width = $(window).width();
        if($width < 600) {
            $('.computer').hide();
            $('.mobile').show();

            let $packageRowMobile = $('#packageRowMobile');
            let $contact = $('#contact');

            let $packageDesc = $("<tr id='packageDescRow'>" +
            "<td id='packageDesc' colspan = '2'>" +
                "A web application built on Python using an implementation of " +
                "Flask to track USPS Packages via a publically available USPS" + 
                "Package Tracking API" +
            "</td>" +
        "</tr>");
        
            $('#projectsMobile').on('click', function(e){
                if($(e.target).is($packageRowMobile.children()[0]) || $(e.target).is($packageRowMobile.children()[1])) {
                    if($packageRowMobile.next().attr('id') == undefined) {
                        $packageRowMobile.after($packageDesc);
                        $(this).children().each(function() {
                            $(this).children().children().removeClass('orange');
                            $(this).children().children().addClass('blue');
                        });
                        $packageRowMobile.children(":first").removeClass('blue');
                        $packageRowMobile.children(":first").addClass('orange');
                    }
                    else {
                        $packageRowMobile.children(":first").removeClass('orange');
                        $packageRowMobile.children(":first").addClass('blue');
                        
                        $packageRowMobile.next().detach();
                    }
                }
            });

        }
        else {
            $('.computer').show();
            $('.mobile').hide();
        }
});