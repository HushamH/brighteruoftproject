$(document).ready(function(){function o(){var o={zoom:15,mapTypeId:google.maps.MapTypeId.ROADMAP};n=new google.maps.Map(document.getElementById("map-canvas"),o),navigator.geolocation?navigator.geolocation.getCurrentPosition(function(o){{var e=new google.maps.LatLng(o.coords.latitude,o.coords.longitude);new google.maps.InfoWindow({map:n,position:e,content:"Location found using HTML5."})}n.setCenter(e)},function(){e(!0)}):e(!1)}function e(o){if(o)var e="Error: The Geolocation service failed.";else var e="Error: Your browser doesn't support geolocation.";{var t={map:n,position:new google.maps.LatLng(60,105),content:e};new google.maps.InfoWindow(t)}n.setCenter(t.position)}$("#nav").affix({offset:{top:$("header").height()-$("#nav").height()}}),$("body").scrollspy({target:"#nav"}),$(".scroll-top").click(function(){$("body,html").animate({scrollTop:0},1e3)}),$("#nav .navbar-nav li>a").click(function(){var o=$(this).attr("href"),e=$(o).offset().top+20;$("body,html").animate({scrollTop:e},700)}),google.maps.visualRefresh=!0;var n;google.maps.event.addDomListener(window,"load",o)});