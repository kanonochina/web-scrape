/*
 * jQuery Reveal Plugin 1.1
 * www.ZURB.com
 * Copyright 2010, ZURB
 * Free to use under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
*/
/*globals jQuery */
(function(e){"use strict";var t=!1;e("a[data-reveal-id]").live("click",function(t){t.preventDefault();var n=e(this).attr("data-reveal-id");e("#"+n).reveal(e(this).data())}),e.fn.reveal=function(n){var r={animation:"fadeAndPop",animationSpeed:300,closeOnBackgroundClick:!0,dismissModalClass:"close-reveal-modal",open:e.noop,opened:e.noop,close:e.noop,closed:e.noop};return n=e.extend({},r,n),this.each(function(){function f(){o=!1}function l(){o=!0}function c(n){var r=e(".reveal-modal.open");r.length===1&&(t=!0,e(".reveal-modal.open").trigger("reveal:close"))}function h(){o||(l(),c(r),r.addClass("open"),n.animation==="fadeAndPop"&&(r.css({top:e(document).scrollTop()-s,opacity:0,visibility:"visible",display:"block"}),u.fadeIn(n.animationSpeed/2),r.delay(n.animationSpeed/2).animate({top:e(document).scrollTop()+i+"px",opacity:1},n.animationSpeed,function(){r.trigger("reveal:opened")})),n.animation==="fade"&&(r.css({opacity:0,visibility:"visible",display:"block",top:e(document).scrollTop()+i}),u.fadeIn(n.animationSpeed/2),r.delay(n.animationSpeed/2).animate({opacity:1},n.animationSpeed,function(){r.trigger("reveal:opened")})),n.animation==="none"&&(r.css({visibility:"visible",display:"block",top:e(document).scrollTop()+i}),u.css({display:"block"}),r.trigger("reveal:opened")))}function p(){o||(l(),r.removeClass("open"),n.animation==="fadeAndPop"&&(r.animate({top:e(document).scrollTop()-s+"px",opacity:0},n.animationSpeed/2,function(){r.css({top:i,opacity:1,visibility:"hidden",display:"none"})}),t?r.trigger("reveal:closed"):u.delay(n.animationSpeed).fadeOut(n.animationSpeed,function(){r.trigger("reveal:closed")}),t=!1),n.animation==="fade"&&(r.animate({opacity:0},n.animationSpeed,function(){r.css({opacity:1,visibility:"hidden",display:"none",top:i})}),t?r.trigger("reveal:closed"):u.delay(n.animationSpeed).fadeOut(n.animationSpeed,function(){r.trigger("reveal:closed")})),n.animation==="none"&&(r.css({visibility:"hidden",display:"block",top:i}),t||u.css({display:"none"}),r.trigger("reveal:closed")))}function d(){r.unbind(".reveal"),u.unbind(".reveal"),e("."+n.dismissModalClass).unbind(".reveal"),e("body").unbind(".reveal")}var r=e(this),i=parseInt(r.css("top"),10),s=r.height()+i,o=!1,u=e(".reveal-modal-bg"),a;u.length===0&&(u=e('<div class="reveal-modal-bg" />').insertAfter(r),u.fadeTo("fast",.8)),r.bind("reveal:open.reveal",h),r.bind("reveal:close.reveal",p),r.bind("reveal:opened.reveal reveal:closed.reveal",f),r.bind("reveal:closed.reveal",d),r.bind("reveal:open.reveal",n.open),r.bind("reveal:opened.reveal",n.opened),r.bind("reveal:close.reveal",n.close),r.bind("reveal:closed.reveal",n.closed),r.trigger("reveal:open"),a=e("."+n.dismissModalClass).bind("click.reveal",function(){r.trigger("reveal:close")}),n.closeOnBackgroundClick&&(u.css({cursor:"pointer"}),u.bind("click.reveal",function(){r.trigger("reveal:close")})),e("body").bind("keyup.reveal",function(e){e.which===27&&r.trigger("reveal:close")})})}})(jQuery);/*
 * jQuery Custom Forms Plugin 1.0
 * www.ZURB.com
 * Copyright 2010, ZURB
 * Free to use under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
*/
jQuery.foundation=jQuery.foundation||{},jQuery.foundation.customForms=jQuery.foundation.customForms||{},jQuery(document).ready(function(e){e.foundation.customForms.appendCustomMarkup=function(t){function r(t,n){var r=e(n).hide(),i=r.attr("type"),s=r.next("span.custom."+i);s.length===0&&(s=e('<span class="custom '+i+'"></span>').insertAfter(r)),s.toggleClass("checked",r.is(":checked")),s.toggleClass("disabled",r.is(":disabled"))}function i(t,n){var r=e(n),i=r.next("div.custom.dropdown"),s=r.find("option"),o=r.find("option:selected"),u=0,a;if(r.hasClass("no-custom"))return;i.length===0?($customSelectSize="",e(n).hasClass("small")?$customSelectSize="small":e(n).hasClass("medium")?$customSelectSize="medium":e(n).hasClass("large")?$customSelectSize="large":e(n).hasClass("expand")&&($customSelectSize="expand"),i=e('<div class="custom dropdown '+$customSelectSize+'"><a href="#" class="selector"></a><ul></ul></div>"'),s.each(function(){a=e("<li>"+e(this).html()+"</li>"),i.find("ul").append(a)}),i.prepend('<a href="#" class="current">'+o.html()+"</a>"),r.after(i),r.hide()):(i.find("ul").html(""),s.each(function(){a=e("<li>"+e(this).html()+"</li>"),i.find("ul").append(a)})),i.toggleClass("disabled",r.is(":disabled")),s.each(function(t){this.selected&&(i.find("li").eq(t).addClass("selected"),i.find(".current").html(e(this).html()))}),i.css("width","inherit"),i.find("ul").css("width","inherit"),i.find("li").each(function(){i.addClass("open"),e(this).outerWidth()>u&&(u=e(this).outerWidth()),i.removeClass("open")}),i.is(".small, .medium, .large, .expand")||(i.css("width",u+18+"px"),i.find("ul").css("width",u+16+"px"))}var n={disable_class:"js-disable-custom"},t=e.extend(n,t);e("form.custom input:radio[data-customforms!=disabled]").each(r),e("form.custom input:checkbox[data-customforms!=disabled]").each(r),e("form.custom select[data-customforms!=disabled]").each(i)}}),function(e){function t(t){var n=0,r=t.next();$options=t.find("option"),r.find("ul").html(""),$options.each(function(){$li=e("<li>"+e(this).html()+"</li>"),r.find("ul").append($li)}),$options.each(function(t){this.selected&&(r.find("li").eq(t).addClass("selected"),r.find(".current").html(e(this).html()))}),r.removeAttr("style").find("ul").removeAttr("style"),r.find("li").each(function(){r.addClass("open"),e(this).outerWidth()>n&&(n=e(this).outerWidth()),r.removeClass("open")}),r.css("width",n+18+"px"),r.find("ul").css("width",n+16+"px")}function n(e){var t=e.prev(),n=t[0];0==t.is(":disabled")&&(n.checked=n.checked?!1:!0,e.toggleClass("checked"),t.trigger("change"))}function r(t){var n=t.prev(),r=n[0];0==n.is(":disabled")&&(e('input:radio[name="'+n.attr("name")+'"]').each(function(){e(this).next().removeClass("checked")}),r.checked=r.checked?!1:!0,t.toggleClass("checked"),n.trigger("change"))}e("form.custom span.custom.checkbox").live("click",function(t){t.preventDefault(),t.stopPropagation(),n(e(this))}),e("form.custom span.custom.radio").live("click",function(t){t.preventDefault(),t.stopPropagation(),r(e(this))}),e("form.custom select").live("change",function(n){t(e(this))}),e("form.custom label").live("click",function(t){var i=e("#"+e(this).attr("for")),s,o;i.length!==0&&(i.attr("type")==="checkbox"?(t.preventDefault(),s=e(this).find("span.custom.checkbox"),n(s)):i.attr("type")==="radio"&&(t.preventDefault(),o=e(this).find("span.custom.radio"),r(o)))}),e("form.custom div.custom.dropdown a.current, form.custom div.custom.dropdown a.selector").live("click",function(t){var n=e(this),r=n.closest("div.custom.dropdown"),i=r.prev();t.preventDefault(),e("div.dropdown").removeClass("open");if(0==i.is(":disabled"))return r.toggleClass("open"),r.hasClass("open")?e(document).bind("click.customdropdown",function(t){r.removeClass("open"),e(document).unbind(".customdropdown")}):e(document).unbind(".customdropdown"),!1}),e("form.custom div.custom.dropdown li").live("click",function(t){var n=e(this),r=n.closest("div.custom.dropdown"),i=r.prev(),s=0;t.preventDefault(),t.stopPropagation(),e("div.dropdown").removeClass("open"),n.closest("ul").find("li").removeClass("selected"),n.addClass("selected"),r.removeClass("open").find("a.current").html(n.html()),n.closest("ul").find("li").each(function(e){n[0]==this&&(s=e)}),i[0].selectedIndex=s,i.trigger("change")})}(jQuery);/*! http://mths.be/placeholder v2.0.7 by @mathias */
(function(e,t,n){function f(e){var t={},r=/^jQuery\d+$/;return n.each(e.attributes,function(e,n){n.specified&&!r.test(n.name)&&(t[n.name]=n.value)}),t}function l(e,r){var i=this,s=n(i);if(i.value==s.attr("placeholder")&&s.hasClass("placeholder"))if(s.data("placeholder-password")){s=s.hide().next().show().attr("id",s.removeAttr("id").data("placeholder-id"));if(e===!0)return s[0].value=r;s.focus()}else i.value="",s.removeClass("placeholder"),i==t.activeElement&&i.select()}function c(){var e,t=this,r=n(t),i=r,s=this.id;if(t.value==""){if(t.type=="password"){if(!r.data("placeholder-textinput")){try{e=r.clone().attr({type:"text"})}catch(o){e=n("<input>").attr(n.extend(f(this),{type:"text"}))}e.removeAttr("name").data({"placeholder-password":!0,"placeholder-id":s}).bind("focus.placeholder",l),r.data({"placeholder-textinput":e,"placeholder-id":s}).before(e)}r=r.removeAttr("id").hide().prev().attr("id",s).show()}r.addClass("placeholder"),r[0].value=r.attr("placeholder")}else r.removeClass("placeholder")}var r="placeholder"in t.createElement("input"),i="placeholder"in t.createElement("textarea"),s=n.fn,o=n.valHooks,u,a;r&&i?(a=s.placeholder=function(){return this},a.input=a.textarea=!0):(a=s.placeholder=function(){var e=this;return e.filter((r?"textarea":":input")+"[placeholder]").not(".placeholder").bind({"focus.placeholder":l,"blur.placeholder":c}).data("placeholder-enabled",!0).trigger("blur.placeholder"),e},a.input=r,a.textarea=i,u={get:function(e){var t=n(e);return t.data("placeholder-enabled")&&t.hasClass("placeholder")?"":e.value},set:function(e,r){var i=n(e);return i.data("placeholder-enabled")?(r==""?(e.value=r,e!=t.activeElement&&c.call(e)):i.hasClass("placeholder")?l.call(e,!0,r)||(e.value=r):e.value=r,i):e.value=r}},r||(o.input=u),i||(o.textarea=u),n(function(){n(t).delegate("form","submit.placeholder",function(){var e=n(".placeholder",this).each(l);setTimeout(function(){e.each(c)},10)})}),n(e).bind("beforeunload.placeholder",function(){n(".placeholder").each(function(){this.value=""})}))})(this,document,jQuery);/*
 * jQuery Foundation Tooltip Plugin 2.0.1
 * http://foundation.zurb.com
 * Copyright 2012, ZURB
 * Free to use under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
*/
//(function(e){"use strict";var t={bodyHeight:0,targetClass:".has-tip",tooltipClass:".tooltip",tipTemplate:function(e,n){return'<span data-selector="'+e+'" class="'+t.tooltipClass.substring(1)+'">'+n+'<span class="nub"></span></span>'}},n={init:function(r){return this.each(function(){var r=e("body"),i=this;Modernizr.touch?(r.on("click.tooltip touchstart.tooltip touchend.tooltip",t.targetClass,function(r){r.preventDefault();var i=e(this);e(t.tooltipClass).hide(),n.showOrCreateTip(i)}),e(t.tooltipClass).on("click.tooltip touchstart.tooltip touchend.tooltip",function(t){t.preventDefault(),e(this).fadeOut(150)})):r.on("mouseover.tooltip mouseout.tooltip",t.targetClass,function(t){var r=e(this);t.type==="mouseover"?n.showOrCreateTip(r):t.type==="mouseout"&&n.hide(r)})})},showOrCreateTip:function(e){var t=n.getTip(e);t&&t.length>0?n.show(e):n.create(e)},getTip:function(r){var i=n.selector(r),s=null;return i&&(s=e("span[data-selector="+i+"]"+t.tooltipClass)),s?s:!1},selector:function(e){var t=e.attr("id"),n=e.data("selector");return t===undefined&&n===undefined&&(n="tooltip"+Math.random().toString(36).substring(7),e.attr("data-selector",n)),t?t:n},create:function(r){var i=e(t.tipTemplate(n.selector(r),r.attr("title"))),s=n.inheritable_classes(r);i.addClass(s).appendTo("body"),Modernizr.touch&&i.append('<span class="tap-to-close">tap to close </span>'),r.removeAttr("title"),n.show(r)},reposition:function(t,n,r){var i,s,o,u,a,f;n.css("visibility","hidden").show(),i=t.data("width"),s=n.children(".nub"),o=s.outerHeight(),u=s.outerWidth(),f=function(e,t,n,r,i,s){return e.css({top:t,bottom:r,left:i,right:n,width:s?s:"auto"}).end()},f(n,t.offset().top+t.outerHeight()+10,"auto","auto",t.offset().left,i),f(s,-o,"auto","auto",10),e(window).width()<767?(a=t.parents(".row"),n.width(a.outerWidth()-20).css("left",a.offset().left).addClass("tip-override"),f(s,-o,"auto","auto",t.offset().left)):r.indexOf("tip-top")>-1?(f(n,t.offset().top-n.outerHeight()-o,"auto","auto",t.offset().left,i).removeClass("tip-override"),f(s,"auto","auto",-o,"auto")):r.indexOf("tip-left")>-1?(f(n,t.offset().top+t.outerHeight()/2-o,"auto","auto",t.offset().left-n.outerWidth()-10,i).removeClass("tip-override"),f(s,n.outerHeight()/2-o/2,-o,"auto","auto")):r.indexOf("tip-right")>-1&&(f(n,t.offset().top+t.outerHeight()/2-o,"auto","auto",t.offset().left+t.outerWidth()+10,i).removeClass("tip-override"),f(s,n.outerHeight()/2-o/2,"auto","auto",-o)),n.css("visibility","visible").hide()},inheritable_classes:function(t){var n=["tip-top","tip-left","tip-bottom","tip-right","noradius"],r=t.attr("class").split(" ").map(function(t,r){if(e.inArray(t,n)!==-1)return t}).join(" ");return e.trim(r)},show:function(e){var t=n.getTip(e);n.reposition(e,t,e.attr("class")),t.fadeIn(150)},hide:function(e){var t=n.getTip(e);t.fadeOut(150)},reload:function(){var t=e(this);return t.data("tooltips")?t.tooltips("destroy").tooltips("init"):t.tooltips("init")},destroy:function(){return this.each(function(){e(window).off(".tooltip"),e(t.targetClass).off(".tooltip"),e(t.tooltipClass).each(function(n){e(e(t.targetClass).get(n)).attr("title",e(this).text())}).remove()})}};e.fn.tooltips=function(t){if(n[t])return n[t].apply(this,Array.prototype.slice.call(arguments,1));if(typeof t=="object"||!t)return n.init.apply(this,arguments);e.error("Method "+t+" does not exist on jQuery.tooltips")}})(jQuery);jQuery(document).ready(function(e){function t(t){var n=t.closest("dl").find("dd.active"),r=t.children("a").attr("href")+"Tab";r=r.replace(/^.+#/,"#"),n.removeClass("active"),t.addClass("active"),e(r).closest(".tabs-content").children("li").removeClass("active").hide(),e(r).css("display","block").addClass("active")}e("dl.tabs dd a").on("click.fndtn",function(n){t(e(this).parent("dd"))}),window.location.hash&&(t(e('a[href="'+window.location.hash+'"]').parent("dd")),e.foundation.customForms.appendCustomMarkup()),e(".alert-box").delegate("a.close","click",function(t){t.preventDefault(),e(this).closest(".alert-box").fadeOut(function(t){e(this).remove()})}),e("input, textarea").placeholder(),e(this).tooltips();var n=!1;Modernizr.touch||navigator.userAgent.match(/Windows Phone/i)?(e(".nav-bar a.flyout-toggle").on("click.fndtn touchstart.fndtn",function(t){t.preventDefault();var r=e(this).siblings(".flyout").first();n===!1&&(e(".nav-bar .flyout").not(r).slideUp(500),r.slideToggle(500,function(){n=!1})),n=!0}),e(".nav-bar>li.has-flyout").addClass("is-touch")):e(".nav-bar>li.has-flyout").hover(function(){e(this).children(".flyout").show()},function(){e(this).children(".flyout").hide()}),e(".button.disabled").on("click.fndtn",function(e){e.preventDefault()}),e(".button.dropdown > ul").addClass("no-hover"),e(".button.dropdown").on("click.fndtn touchstart.fndtn",function(e){e.stopPropagation()}),e(".button.dropdown.split span").on("click.fndtn touchstart.fndtn",function(t){t.preventDefault(),e(".button.dropdown").not(e(this).parent()).children("ul").removeClass("show-dropdown"),e(this).siblings("ul").toggleClass("show-dropdown")}),e(".button.dropdown").not(".split").on("click.fndtn touchstart.fndtn",function(t){e(".button.dropdown").not(this).children("ul").removeClass("show-dropdown"),e(this).children("ul").toggleClass("show-dropdown")}),e("body, html").on("click.fndtn touchstart.fndtn",function(){e(".button.dropdown ul").removeClass("show-dropdown")});var r=e(".button.dropdown:not(.large):not(.small):not(.tiny)").outerHeight()-1,i=e(".button.large.dropdown").outerHeight()-1,s=e(".button.small.dropdown").outerHeight()-1,o=e(".button.tiny.dropdown").outerHeight()-1;e(".button.dropdown:not(.large):not(.small):not(.tiny) > ul").css("top",r),e(".button.dropdown.large > ul").css("top",i),e(".button.dropdown.small > ul").css("top",s),e(".button.dropdown.tiny > ul").css("top",o),e(".button.dropdown.up:not(.large):not(.small):not(.tiny) > ul").css("top","auto").css("bottom",r-2),e(".button.dropdown.up.large > ul").css("top","auto").css("bottom",i-2),e(".button.dropdown.up.small > ul").css("top","auto").css("bottom",s-2),e(".button.dropdown.up.tiny > ul").css("top","auto").css("bottom",o-2),e.foundation.customForms.appendCustomMarkup()});


(function($) {
  'use strict';
  var settings = {
    bodyHeight : 0,
    targetClass : '.has-tip',
    tooltipClass : '.tooltip',
    tipTemplate : function (selector, content) {
      return '<span data-selector="' + selector + '" class="' + settings.tooltipClass.substring(1) + '">' + content + '<span class="nub"></span></span>';
    }
  },
  methods = {
    init : function (options) {
      return this.each(function () {
        var $body = $('body'),
          self = this;

        if (Modernizr.touch) {

            $body.on('mouseover.tooltip mouseout.tooltip', settings.targetClass, function (e) {
                var $this = $(this);
                if (e.type === 'mouseover') {
                    methods.showOrCreateTip($this);
                } else if (e.type === 'mouseout') {
                    methods.hide($this);
                }
            });

//          $body.on('click.tooltip touchstart.tooltip touchend.tooltip', settings.targetClass, function (e) {
//            e.preventDefault();
//            var $this = $(this);
//            $(settings.tooltipClass).hide();
//            methods.showOrCreateTip($this);
//          });
//          $(settings.tooltipClass).on('click.tooltip touchstart.tooltip touchend.tooltip', function (e) {
//            e.preventDefault();
//            $(this).fadeOut(150);
//          });
        } else {
          $body.on('mouseover.tooltip mouseout.tooltip', settings.targetClass, function (e) {
            var $this = $(this);
            if (e.type === 'mouseover') {
              methods.showOrCreateTip($this);
            } else if (e.type === 'mouseout') {
              methods.hide($this);
            }
          });
        }

      });
    },
    showOrCreateTip : function ($target) {
      var $tip = methods.getTip($target);
      if ($tip && $tip.length > 0) {
        methods.show($target);
      } else {
        methods.create($target);
      }
    },
    getTip : function ($target) {
      var selector = methods.selector($target),
        tip = null;
      if (selector) tip = $('span[data-selector=' + selector + ']' + settings.tooltipClass);
      return (tip) ? tip : false;
    },
    selector : function ($target) {
      var id = $target.attr('id'),
        dataSelector = $target.data('selector');
      if (id === undefined && dataSelector === undefined) {
        dataSelector = 'tooltip' + Math.random().toString(36).substring(7);
        $target.attr('data-selector', dataSelector);
      }
      return (id) ? id : dataSelector;
    },
    create : function ($target) {
      $('.tooltip').css('display','none');

      var $tip = $(settings.tipTemplate(methods.selector($target), $target.attr('title'))),
          classes = methods.inheritable_classes($target);
      $tip.addClass(classes).appendTo('body');
      if (Modernizr.touch) $tip.append('<span class="tap-to-close">tap to close </span>');
      $target.attr('title','');
      methods.show($target);
    },
    reposition : function (target, tip, classes) {
      var width, nub, nubHeight, nubWidth, row, objPos;

      tip.css('visibility', 'hidden').show();

      width = target.data('width');
      nub = tip.children('.nub');
      nubHeight = nub.outerHeight();
      nubWidth = nub.outerWidth();

      objPos = function (obj, top, right, bottom, left, width) {
        return obj.css({
          'top' : top,
          'bottom' : bottom,
          'left' : left,
          'right' : right,
          'width' : (width) ? width : 'auto'
        }).end();
      };

      objPos(tip, (target.offset().top + target.outerHeight() + 10), 'auto', 'auto', target.offset().left, width);
      objPos(nub, -nubHeight, 'auto', 'auto', 10);

      if ($(window).width() < 767) {
        row = target.parents('.row');
        tip.width(row.outerWidth() - 20).css('left', row.offset().left).addClass('tip-override');
        objPos(nub, -nubHeight, 'auto', 'auto', target.offset().left);
      } else {
        if (classes.indexOf('tip-top') > -1) {
          objPos(tip, (target.offset().top - tip.outerHeight() - nubHeight), 'auto', 'auto', target.offset().left, width)
            .removeClass('tip-override');
          objPos(nub, 'auto', 'auto', -nubHeight, 'auto');
        } else if (classes.indexOf('tip-left') > -1) {
          objPos(tip, (target.offset().top + (target.outerHeight() / 2) - nubHeight), 'auto', 'auto', (target.offset().left - tip.outerWidth() - 10), width)
            .removeClass('tip-override');
          objPos(nub, (tip.outerHeight() / 2) - (nubHeight / 2), -nubHeight, 'auto', 'auto');
        } else if (classes.indexOf('tip-right') > -1) {
          objPos(tip, (target.offset().top + (target.outerHeight() / 2) - nubHeight), 'auto', 'auto', (target.offset().left + target.outerWidth() + 10), width)
            .removeClass('tip-override');
          objPos(nub, (tip.outerHeight() / 2) - (nubHeight / 2), 'auto', 'auto', -nubHeight);
        }
      }
      tip.css('visibility', 'visible').hide();
    },
    inheritable_classes : function (target) {
      var inheritables = ['tip-top', 'tip-left', 'tip-bottom', 'tip-right', 'noradius'],
      filtered = target.attr('class').split(' ').map(function (el, i) {
        if ($.inArray(el, inheritables) !== -1) {
          return el;
        }
      }).join(' ');
      return $.trim(filtered);
    },
    show : function ($target) {
      var $tip = methods.getTip($target);
      methods.reposition($target, $tip, $target.attr('class'));
      $tip.fadeIn(1);
    },
    hide : function ($target) {
      var $tip = methods.getTip($target);
      $tip.fadeOut(1);
    },
    reload : function () {
      var $self = $(this);
      return ($self.data('tooltips')) ? $self.tooltips('destroy').tooltips('init') : $self.tooltips('init');
    },
    destroy : function () {
      return this.each(function () {
        $(window).off('.tooltip');
        $(settings.targetClass).off('.tooltip');
        $(settings.tooltipClass).each(function(i) {
          $($(settings.targetClass).get(i)).attr('title', $(this).text());
        }).remove();
      });
    }
  };

  $.fn.tooltips = function (method) {
    if (methods[method]) {
      return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
    } else if (typeof method === 'object' || ! method) {
      return methods.init.apply(this, arguments);
    } else {
      $.error('Method ' +  method + ' does not exist on jQuery.tooltips');
    }
  };
})(jQuery);