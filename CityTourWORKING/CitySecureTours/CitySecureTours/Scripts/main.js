﻿$(document).ready(function () {

        /* =========================================================
         Initialize
        =========================================================== */
        var g = {};
        var resultNum = [];

        /* ==========================================================================
           Paginate Map items 
        ========================================================================= */

        var getQueryVariable = function (variable) {
            var query = window.location.search.substring(1);
            var t = query.match(/\w+\W./i);
            var newx = new String(t);
            //alert(newx);
            var vars = newx.split("&");
            for (var i = 0; i < vars.length; i++) {
                var pair = vars[i].split("=");

                var a = pair[0];
                var b = variable;

                var c = a.match(/\w+/i);
                var cc = c.ignoreCase;

                var d = b.match(/\w+/i);
                var dd = d.ignoreCase;

                if (cc == dd) { return pair[1]; }
            }
            // alert(pair[0] + "  " +  variable);
            return (false);
        }

        g.paginationNum = getQueryVariable("sho");


        /* =========================================================
          Map
        =========================================================== */
        //alert(g.paginationNum);

        function initialize() {

            //Call JSON 
            $.getJSON("http://localhost:52431/Products/GetAll/", function (results) {

                //Mustache Implementation
                //var template = $('#speakers-template').html();
                //var info = Mustache.to_html(template, results);
                //$('#talktitles').html(info);
                //pagination();

                //reference t as the JSON list
                var t = results;
                
               // console.log(t);

                //assign an new value to JSON
                //for (i in t) {
                //    t[i].shownum = resultNum[i];
                //}

                //loop through JSON items
                $.each(t, function (index, location) {
                    //console.log(t[index].shownum + " , " + location.first + location.last);

                 //   if (t[index].shownum == g.paginationNum) {

                       // var resultNumValue = resultNum[index];
                    var latLng = new google.maps.LatLng(t[index].Latitude, t[index].Longitude);

                    console.log(t[index].Marker);

                        //set the marker if there is a match
                        marker = new google.maps.Marker({
                            position: latLng,
                            map: map,
                            title: t[index].Name,
                            icon: t[index].Marker,
                        });

                        var message = '<div class="showFacility">' + marker.title + '</div>';
                        var infowindow = new google.maps.InfoWindow({
                            content:  message
                        });

                        //click event for the map marker for address
                        //google.maps.event.addListener(marker, 'click', function (event) {
                        //    infowindow.open(marker.get('map'), marker); //                  
                        //});

                        google.maps.event.addListener(marker, 'click', (function (marker, infowindow) {
                            return function () {
                                infowindow.open(map, marker);
                            };
                        })(marker, infowindow));

                        //if (marker.custominfo == g.paginationNum) {
                            //alert(location.first + marker.custominfo);
                            marker.setMap(map);
                       // }
                   // }
                });

            });



            var mapProp = {
                //center: new google.maps.LatLng(40.478165, -88.954401),
                center: new google.maps.LatLng(48.857914, 2.352222),
                zoom: 16,
                mapTypeId: google.maps.MapTypeId.ROADMAP
            };

            var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
        }

        google.maps.event.addDomListener(window, 'load', initialize);



        $('.header-wrapper header nav  li  + a ').wrapAll('<li/>');


        /* ==========================================================================
           Pagination
           ========================================================================= */

        //function pagination() {


        //    g.ix = 1;
        //    g.yx = 1;
        //    g.vx = 1;

        //    var ex = $('article.map_tour_info').length;
        //    var recordGoup = 4, bx = 5;

        //    var remainder = ex % recordGoup;


        //    //alert(remainder);

        //    $('article.map_tour_info').each(function () {


        //        $(this).addClass('yes' + g.ix);
        //        $(this).addClass('no' + g.yx);

        //        //alert(g.yx);
        //        resultNum.push(g.yx);

        //        if (g.ix % recordGoup) {
        //            g.ix++;
        //        } else {
        //            g.ix = 1;

        //            $('<a href="#" class="in">' + g.yx + '</a> ').insertBefore('a.pag-right');
        //            g.yx++;
        //        }

        //    });

        //    //alert(remainder);
        //    if (remainder) {
        //        $('<a href="#" class="in">' + g.yx + '</a> ').insertBefore('a.pag-right');
        //        g.yx++;
        //    }

        //    $('a.in').each(function () {
        //        //make an attribute with the value of the pagination number
        //        g.shoNum = $(this).text();
        //        $(this).attr("data-shownum", g.shoNum);

        //        //send the pagintation value to url
        //        $(this).attr("href", "tour.html" + "?" + "sho=" + g.shoNum);



        //        //create a class to match the paginated row
        //        $(this).addClass('no' + g.vx);
        //        g.vx++;



        //    });

        //    $('a.in').click(function () {
        //        var linkNum;
        //        var classList = $(this).attr('class').split(/\s+/);;

        //        // iterate over all class  
        //        $.each(classList, function (index, item) {
        //            // Find class that starts with no
        //            if (item.indexOf("no") == 0) {
        //                // Store it
        //                linkNum = item;
        //            }
        //        });

        //        g.classNum = linkNum.substr(2, 1);
        //        //alert(g.classNum);
        //    });




        //    $('article.map_tour_info.hidden.' + "no" + g.paginationNum).removeClass('hidden');
        //    $('article.map_tour_info').not("." + "no" + g.paginationNum).addClass('hidden');

        //    $('.page-left').click(function () {

        //        if (g.paginationNum > 1) {

        //            $(this).addClass('page-left');
        //            var updateNum = g.paginationNum - 1;

        //            $(this).attr("href", "tour.html" + "?" + "sho=" + updateNum);

        //        } else {
        //            alert("test");
        //            return
        //        }

        //    });


        //    $('.pag-right').click(function () {
        //        var total = $('a.in').length;
        //        var pagi_sum = (total / 2);

        //        //alert(pagi_sum);

        //        if (g.paginationNum < pagi_sum) {

        //            $(this).addClass('page-left');
        //            var updateNum = (parseInt(g.paginationNum) + 1);

        //            $(this).attr("href", "tour.html" + "?" + "sho=" + updateNum);

        //        } else {
        //            alert("test");
        //            return
        //        }

        //    });
        //}



});