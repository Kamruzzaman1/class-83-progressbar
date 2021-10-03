(function($){
	"use strict";
$(document).ready(function(){

      $('#progres-webdesign').circleProgress({
        value: 0.7,
        size: 200,
        fill:"#2AB5B8",
        thickness:4,
        emptyFill:"#fff",
         }).on('circle-animation-progress', function(event, progress) {
             $(this).find('.progress-presentage').html(Math.round(70 * progress) + '<i>%</i>');
        });

      $('#progres-degital-markating').circleProgress({
        value: 0.85,
        size: 200,
        fill:"#FF9800",
        thickness:4,
        emptyFill:"#fff",
         }).on('circle-animation-progress', function(event, progress) {
             $(this).find('.progress-presentage').html(Math.round(85 * progress) + '<i>%</i>');
        });

      $('#progres-Graphic-design').circleProgress({
        value: 0.6,
        size: 200,
        fill:"#19A15F",
        thickness:4,
        emptyFill:"#fff",
         }).on('circle-animation-progress', function(event, progress) {
             $(this).find('.progress-presentage').html(Math.round(60 * progress) + '<i>%</i>');
        });

    })


   jQuery(window).load(function(){

   	
});

}(jQuery));