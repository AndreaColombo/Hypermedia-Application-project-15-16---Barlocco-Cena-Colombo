$(document).ready(function (){
            $("#click1").click(function (){
                $('html, body').animate({
                    scrollTop: $("#section1").offset().top-250}, 1000);
            });
			$("#click2").click(function (){
                $('html, body').animate({
                    scrollTop: $("#section2").offset().top-250}, 1000);
            });
			$("#click3").click(function (){
                $('html, body').animate({
                    scrollTop: $("#section3").offset().top-250}, 1000);
            });
			$("#click4").click(function (){
                $('html, body').animate({
                    scrollTop: $("#section4").offset().top-250}, 1000);
            });
			$("#click5").click(function (){
                $('html, body').animate({
                    scrollTop: $("#section5").offset().top-250}, 1000);
            });
        });