/************************************************************************
*************************************************************************
@Name :       	QapTcha - jQuery Plugin
@Revison :    	2.6
@Date : 		26/01/2011
@Author:     	 Surrel Mickael (www.myjqueryplugins.com - www.msconcept.fr)
@License :		 Open Source - MIT License : http://www.opensource.org/licenses/mit-license.php

**************************************************************************
*************************************************************************/
var checkingSlider = false;

jQuery.QapTcha = {
    build : function(options)
    {
        var defaults = {
            txtLock : 'Slide bar to right to submit ticket.',
            txtUnlock : 'Ticket can now be submitted',
            disabledSubmit : true,
            autoRevert : false,
            PHPfile : '/Other/Captcha/php/Qaptcha.jquery.php'
        };

        if(this.length>0)
            return jQuery(this).each(function(i) {
                /** Vars **/
                opts = $.extend(defaults, options),
				$this = $(this),
				form = $('body').has($this),
				Clr = jQuery('<div>',{'class':'clr'}),
				bgSlider = jQuery('<div>',{id:'bgSlider'}),
				Slider = jQuery('<div>',{id:'Slider'}),
				Icons = jQuery('<div>',{id:'Icons'}),
				TxtStatus = jQuery('<div>',{id:'TxtStatus','class':'dropError',text:opts.txtLock}),
				inputQapTcha = jQuery('<input>',{name:'iQapTcha',value:generatePass(),type:'hidden'});

                /** Disabled submit button **/
                if(opts.disabledSubmit)
                {
                    $('#btnValidate').attr('disabled','disabled');
                }

                /** Construct DOM **/
                bgSlider.appendTo($this);
                Icons.insertAfter(bgSlider);
                Clr.insertAfter(Icons);
                TxtStatus.insertAfter(Clr);
                inputQapTcha.appendTo($this);
                Slider.appendTo(bgSlider);
                $this.show();

                Slider.draggable({
                    create: function(event, ui){
                    },
                    revert: function(){
                        if(opts.autoRevert)
                        {
                            if(parseInt(Slider.css("left")) > 150)
                                return false;
                            else
                                return true;
                        }
                    },
                    containment: bgSlider,
                    axis:'x',
                    drag: function(event,ui){
                        if(ui.position.left > 140)
                        {
                            if(!checkingSlider)
                            {
                                checkingSlider = true;
                                //alert('a');
                                $.post(opts.PHPfile,{
                                    action : 'qaptcha'
                                },
                                function(data) {
                                    if(!data.error)
                                    {
                                        $('#btnValidate').removeAttr('disabled');
                                        $('#btnValidate').click();
                                        $('#btnValidate').css('display','none');
                                        setTimeout(function(){
                                            $('#btnValidate').css('display','');
                                        },1500);
//                                        $('#bgSlider').css('display','none');
//                                        $('#Slider').css('display','none');
//                                        $('#Icons').css('display','none');
//                                        $('#clr').css('display','none');
//                                        $('#TxtStatus').css('display','none');
//                                        $('#QapTcha').QapTcha({});
                                    //Slider.draggable('disable').css('cursor','default');
                                    inputQapTcha.val("");
                                    TxtStatus.text(opts.txtUnlock).addClass('dropSuccess').removeClass('dropError');
                                    Icons.css('background-position', '-16px 0');
                                    }
                                },'json');
                            }
                        }
                    }
                });

                function generatePass() {
                    var chars = 'azertyupqsdfghjkmwxcvbn23456789AZERTYUPQSDFGHJKMWXCVBN';
                    var pass = '';
                    for(i=0;i<10;i++){
                        var wpos = Math.round(Math.random()*chars.length);
                        pass += chars.substring(wpos,wpos+1);
                    }
                    return pass;
                }

            });
    }
};
jQuery.fn.QapTcha = jQuery.QapTcha.build;