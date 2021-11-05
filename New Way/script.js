function togle(){
    const toggleButton = document.getElementsByClassName('toggle-button')[0]
    const navbarLinks = document.getElementsByClassName('navlinks')[0]
    
    toggleButton.addEventListener('click', () => {
        navbarLinks.classList.toggle('active')
    })
    }
    
    function togleer(){
        const toggleButton = document.getElementsByClassName('toggle-button')[0]
        const navbarLinks = document.getElementsByClassName('navlinks')[0]
        
        toggleButton.addEventListener('click', () => {
            navbarLinks.classList.toggle('active')
        })
        }

$(document).ready(function(){

    var lastScrollTop = 0;
    navbar = document.getElementById("headernav");
    window.addEventListener("scroll", function(){
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if(scrollTop > lastScrollTop)
    {
        navbar.style.top = "-3em";
    }
    else
    {
        navbar.style.top = "0";
    }
        lastScrollTop = scrollTop
    })

    $("#home").hide();
    $("#home").fadeIn(1000);

    $("#navhome").click(function(){
        $("#home").hide();
        $("#home").fadeIn(1000);
    });

    
    $(window).resize(function(){
    if ($(window).width() <= 600) {  

        $(".toggle-button").click(function(){
            $(".navlinks").slideToggle(700);
        });

        $(".navli").click(function(){
            $(".navlinks").slideToggle(700);
        });

    }
});

    $('#image1').click(function(){
        var img = $(this).attr("src");
        var appear_image = "<div id='appearimg' onClick='closeimg()'></div>";
        $('body').append(appearimg);
    });

    $("#image1").hover(function(){
        $("#image1").css("box-shadow", "1px 1px 30px blue");
    },
    function(){
        $("#image1").css("box-shadow", "6px 6px 15px black");
    });

    $("#image2").hover(function(){
        $("#image2").css("box-shadow", "1px 1px 30px blue");
    },
    function(){
        $("#image2").css("box-shadow", "6px 6px 15px black");
    });

    $("#image3").hover(function(){
        $("#image3").css("box-shadow", "1px 1px 30px blue");
    },
    function(){
        $("#image3").css("box-shadow", "6px 6px 15px black");
    });

    $("#image4").hover(function(){
        $("#image4").css("box-shadow", "1px 1px 30px blue");
    },
    function(){
        $("#image4").css("box-shadow", "6px 6px 15px black");
    });

    $("#image5").hover(function(){
        $("#image5").css("box-shadow", "1px 1px 30px blue");
    },
    function(){
        $("#image5").css("box-shadow", "6px 6px 15px black");
    });

    $("#image6").hover(function(){
        $("#image6").css("box-shadow", "1px 1px 30px blue");
    },
    function(){
        $("#image6").css("box-shadow", "6px 6px 15px black");
    });

    $("#image7").hover(function(){
        $("#image7").css("box-shadow", "1px 1px 30px blue");
    },
    function(){
        $("#image7").css("box-shadow", "6px 6px 15px black");
    });

    $("#image8").hover(function(){
        $("#image8").css("box-shadow", "1px 1px 30px blue");
    },
    function(){
        $("#image8").css("box-shadow", "6px 6px 15px black");
    });

    $("#image9").hover(function(){
        $("#image9").css("box-shadow", "1px 1px 30px blue");
    },
    function(){
        $("#image9").css("box-shadow", "6px 6px 15px black");
    });

    $("#image10").hover(function(){
        $("#image10").css("box-shadow", "1px 1px 30px blue");
    },
    function(){
        $("#image10").css("box-shadow", "6px 6px 15px black");
    });

    $("#image11").hover(function(){
        $("#image11").css("box-shadow", "1px 1px 30px blue");
    },
    function(){
        $("#image11").css("box-shadow", "6px 6px 15px black");
    });

    $("#image12").hover(function(){
        $("#image12").css("box-shadow", "1px 1px 30px blue");
    },
    function(){
        $("#image12").css("box-shadow", "6px 6px 15px black");
    });
});

var app = angular.module('commerciallist', []);
app.controller('list1Ctrl', function($scope){
    $scope.commercials = ['New Construction, Additions and Renovations', 'Lighting Installation and Design',
'Exit and Emergency Lighting', 'Lamp and Ballast Replacement', 'LED High Bay Lights', 'Energy Efficient Lighting Retrofits',
'Transformer Installation', 'Power Distribution', 'Telephone and Network Cabling', 'Motion Detector Sensors', 'Tenant Improvements',
'Repair and Troubleshouting']

$scope.recidentials = ['New Construction, Additiond and Renovations', 'Lighting Design and Installation',
'Service Upgrades and Fuse panel Replasements', 'Re-Wiring to Meet Electrical Code Requirement',
'Small Appliance, Intercomm, Door Bell and Electric Gate Wiring', 'Power for Garages and Sheds', 'Ground Fault and Arc Faulr Circuits',
'Pot Lights, Ceiling Fans and Undercabinet Lights', 'Repair and Troubleshooting']

$scope.industrials = ['New Construction, Additions and Renovations', 'Lighting Installation and Design',
'Lamp and Ballast Replacement', 'Exit and Emergency Lighting', 'LED High Bay Lights', 'Energy Efficient Lighting Retrofits',
'Transformer Installation', 'Power Distribution', 'Telephone and Network Cabling', 'Motion Detector Sensors', 'Motors and Machines Installation',
'Generator Installation', 'Repair and Troubleshouting' , 'Preventive Maintenance']

$scope.filterservices = "";
});
