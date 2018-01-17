var imageSrc = '';
var spellChecker = false;

tinyMCE.init({
    // General options
    mode : "specific_textareas",
    editor_selector : "mceEditor",
    theme : "advanced",
    skin : "thebigreason",
    plugins : "example,pagebreak,style,table,advimage,advlink,spellchecker,iespell,inlinepopups,noneditable,visualchars,nonbreaking,xhtmlxtras,template,advlist,paste",
    "relative_urls": "false, noneditable",
    remove_script_host : false,
    convert_urls : false,
    noneditable_leave_contenteditable : true,
    paste_text_sticky: true,
    paste_text_sticky_default: true,
    //    force_br_newlines : true,
    //    force_p_newlines : false,
    //    forced_root_block : '', // Needed for 3.x
    
    // Theme options
    //theme_advanced_buttons1 : "fontselect,fontsizeselect,justifyleft,justifycenter,justifyright,justifyfull",
    //theme_advanced_buttons2 : "bold,italic,underline,strikethrough,link,unlink,imageButton,forecolor,backcolor,code",
    theme_advanced_buttons1 : "bold,italic,underline,justifyleft,justifycenter,justifyright,justifyfull,iespell,link,forecolor,backcolor,code,imageButton",
    theme_advanced_buttons2 : "",
    theme_advanced_buttons3 : "",
    theme_advanced_buttons4 : "",
    theme_advanced_toolbar_location : "top",
    theme_advanced_toolbar_align : "left",
    //theme_advanced_statusbar_location : "bottom",
    //theme_advanced_resizing : true,
    //theme_advanced_resizing_max_width : 675,
    
    extended_valid_elements: "iframe[class|src|frameborder=0|alt|title|width|height|align|name]",
    valid_children : "+body[style]",

    setup : function(ed) {
        ed.onInit.add(function(ed, evt) {

            ed.getBody().setAttribute('spellcheck', true);

            var dom = ed.dom;
            var doc = ed.getDoc();

            tinymce.dom.Event.add(doc, 'blur', function(e) {
                focusMCE(false);
            });
            tinymce.dom.Event.add(doc, 'focus', function(e) {
                focusMCE(true);
            });

//            setTimeout(function () {
//                if(!spellChecker)
//                {
//                    tinyMCE.activeEditor.controlManager.setActive('spellchecker', true);
//                    tinymce.execCommand('mceSpellCheck', true);
//                    spellChecker = true;
//                }
//            }, 5000);
                        
        });
        
    //        // Add a custom button
    //        ed.addButton('imageButton', {
    //            title : 'Test',
    //            image : 'https://support.rhinosupport.com/Templates/3.0/images/logo-footer.png',
    //            width : '300',
    //            onclick : function()
    //            {
    //                alert('1');
    //            }
    //        });
        
    },

    theme_advanced_path : false
});

tinyMCE.init({
    // General options
    mode : "specific_textareas",
    editor_selector : "mceEditor3",
    theme : "advanced",
    skin : "thebigreason",
    plugins : "example,pagebreak,style,table,advimage,advlink,spellchecker,iespell,inlinepopups,noneditable,visualchars,nonbreaking,xhtmlxtras,template,advlist,paste",
    "relative_urls": "false, noneditable",
    remove_script_host : false,
    convert_urls : false,
    noneditable_leave_contenteditable : true,
    paste_text_sticky: true,
    paste_text_sticky_default: true,
    //    force_br_newlines : true,
    //    force_p_newlines : false,
    //    forced_root_block : '', // Needed for 3.x
    //
    // Theme options
    theme_advanced_buttons1 : "fontselect,fontsizeselect,bold,italic,underline,justifyleft,justifycenter,justifyright,justifyfull,iespell,forecolor,backcolor,strikethrough,link,unlink,image,table,code",
    theme_advanced_buttons2 : "",
    theme_advanced_buttons3 : "",
    theme_advanced_buttons4 : "",
    theme_advanced_toolbar_location : "top",
    theme_advanced_toolbar_align : "left",
    //theme_advanced_resizing : true,
    //theme_advanced_resizing_max_width : 675,
    //extended_valid_elements: "iframe[class|src|frameborder=0|alt|title|width|height|align|name]",
    extended_valid_elements: "iframe[class|src|frameborder=0|alt|title|width|height|align|name]",
    valid_children : "+body[style]",

    
    
    setup : function(ed) {
        ed.onInit.add(function(ed, evt) {

            ed.getBody().setAttribute('spellcheck', true);

            var dom = ed.dom;
            var doc = ed.getDoc();

            tinymce.dom.Event.add(doc, 'blur', function(e) {
                focusMCE(false);
            });
            tinymce.dom.Event.add(doc, 'focus', function(e) {
                // Do something when the editor window is blured.
                focusMCE(true);
            });

        });
    },

    theme_advanced_path : false
});

tinyMCE.init({
    // General options
    mode : "specific_textareas",
    editor_selector : "mceEditor2",
    theme : "advanced",
    skin : "thebigreason",
    plugins : "example,pagebreak,style,table,advimage,advlink,spellchecker,iespell,inlinepopups,noneditable,visualchars,nonbreaking,xhtmlxtras,template,advlist,paste,autoresize",
    width : '100%',
    //theme_advanced_resizing_max_width : '577',

    "relative_urls": "false, noneditable",
    remove_script_host : false,
    convert_urls : false,
    noneditable_leave_contenteditable : true,
    //    force_br_newlines : true,
    //    force_p_newlines : false,
    //    forced_root_block : '', // Needed for 3.x
    
    // Theme options
    //theme_advanced_buttons1 : "fontselect,fontsizeselect,justifyleft,justifycenter,justifyright,justifyfull",
    //theme_advanced_buttons2 : "bold,italic,underline,strikethrough,link,unlink,imageButton,forecolor,backcolor,code",
    theme_advanced_buttons1 : "bold,italic,underline,justifyleft,justifycenter,justifyright,justifyfull,outdent,indent,link,forecolor,backcolor,iespell,image,code,imageButton",
    theme_advanced_buttons2 : "",
    theme_advanced_buttons3 : "",
    theme_advanced_buttons4 : "",
    theme_advanced_toolbar_location : "top",
    theme_advanced_toolbar_align : "left",
    theme_advanced_statusbar_location : "none",
    //theme_advanced_resizing : true,
    //autoresize_min_height : '50',
    autoresize_bottom_margin : '30',
   
    extended_valid_elements: "iframe[class|src|frameborder=0|alt|title|width|height|align|name]",
    valid_children : "+body[style]",
   
    setup : function(ed) {
        ed.onInit.add(function(ed, evt) {

            ed.getBody().setAttribute('spellcheck', true);

            var dom = ed.dom;
            var doc = tinymce.isGecko ? ed.getDoc() : ed.getWin();

            tinymce.dom.Event.add(doc, 'blur', function(e) {
                saveDraft(true);
                focusMCE(false);
            });
            tinymce.dom.Event.add(doc, 'focus', function(e) {
                // Do something when the editor window is blured.
                focusMCE(true);
            });

            ed.onKeyPress.add(function(ed, e) {
                saveDraft(false);
            });
        });

        // Add a custom button
        ed.addButton('imageButton', {
            title : '',
            image : '/Images/t2.png',
            onclick : function()
            {
                detectTranslate(9999);
                ed.focus();
                ed.selection.setContent(imageSrc);
            }
        });
    },

    theme_advanced_path : false
});

var tinyMCEmode = false;
function toggleEditorMode(sEditorID) {
    try {
        if(tinyMCEmode) {
            tinyMCE.execCommand("mceRemoveControl", false, sEditorID);
            tinyMCEmode = false;
        } else {
            tinyMCE.execCommand("mceAddControl", false, sEditorID);
            tinyMCEmode = true;
        }
    } catch(e) {
    //error handling
    }
}

var editorTouched = false;
function focusMCE(toggle)
{
    editorTouched = true;
    if(toggle)
    {
        $('.mceEditor').each(function(){
            var parentID = $(this).attr('id').replace('_parent','');
            var editor = tinyMCE.getInstanceById(parentID);
    
            editor.getBody().style.backgroundColor = "#F9F9F9";
            $('.mceLayout').css('background-color', '#F9F9F9');
            $('.mceLayout').css('background-image', 'url(/Images/mcewhite.jpg)');
            $('.mceLayout').css('background-repeat', 'repeat-x');

        });
    }
    else
    {
        $('.mceEditor').each(function(){
            var parentID = $(this).attr('id').replace('_parent','');
            var editor = tinyMCE.getInstanceById(parentID);
    
            editor.getBody().style.backgroundColor = "#FFFFFF";
            $('.mceLayout').css('background-color', '#FFFFFF');
            $('.mceLayout').css('background-image', '');
        });
    }
}