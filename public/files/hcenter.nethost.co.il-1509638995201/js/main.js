/**
 * Created by youd on 13/01/16.
 */


var activateTab = function(tab)
{
    $(".sidemenu .active").removeClass("active");
    $(".sidemenu div").eq(tab-1).addClass("active");


    var imagePath = "./dnk-gallery/images/buttons/heading_" + tab + ".png";
    $("#button_heading").attr('src',imagePath);
};

var selectCategory = function(category)
{
    activateTab(category);


    $('.popup_div').hide();
    $('#gallery').show();

    //if(category == 1 || category == 2 || category == 3 || category == 4)
    //{
    //    $('#gallery').hide();
    //    $('#popup_div1').show();
    //    return;
    //}
    //else if(category == 4)
    //{
    //    var imageUrl = $('#pop_img1').attr('src');
    //    imageExists(imageUrl, function(exists) {
    //        if( exists )
    //            $('#popup_div4').show();
    //        else
    //            $('#popup_div4').hide();
    //    });
    //}
    //else if(category == 6) {
    //    var imageUrl = $('#pop_img6').attr('src');
    //    imageExists(imageUrl, function(exists) {
    //        if( exists)
    //            $('#popup_div6').show();
    //        else
    //            $('#popup_div6').hide();
    //    });
    //}

    var border = (category != 6) ? 'default' : 'squared';
    var gallery = $("#gallery");
    if (gallery.data("activeTab") != category)
    {

        gallery.empty();
        gallery.data("activeTab",category);
        gallery.donkeyGallery({
            refresh: true,
            webservice : "./dnk-gallery/php/gallery.webservice.php",
            galleryPath : "/dnk-gallery/images/coupons/",
            subdomain: "/Ynet",
            style: border,
            // color: "cyan",
            thumbs: {
                thumbW: 200,
                thumbH: 200,
                thumbsGen: false
            },
            fancybox : {
                active: true,
                galleryGroup: 'demo2',
                linkClass: "dnk-gallery-link-2"
            },
            pagination: {
                active: true,
                pageItems: 12
            },
            category: category
        });
    }
    var label = 'Category' + category;
    ga('send','event',{eventCategory:'Category', eventAction:'Press', eventLabel:label, eventValue:1});

}

var imageExists =  function (url, callback) {
    var img = new Image();
    img.onload = function() { callback(true); };
    img.onerror = function() { callback(false); };
    img.src = url;
}

var print= function(image){
    var data = $(image).html();
    var mywindow = window.open('', 'my div', 'height=400,width=600');
    mywindow.document.write('<html><head><title></title>');
    /*optional stylesheet*/ //mywindow.document.write('<link rel="stylesheet" href="main.css" type="text/css" />');
    mywindow.document.write('</head><body >');
    mywindow.document.write(data);
    mywindow.document.write('</body></html>');

    mywindow.document.close(); // necessary for IE >= 10
    mywindow.focus(); // necessary for IE >= 10

    mywindow.print();
    mywindow.close();

    return true;
};

var getParameterByName = function (name, url) {
    if (!url) {
        url = window.location.href;
    }
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}