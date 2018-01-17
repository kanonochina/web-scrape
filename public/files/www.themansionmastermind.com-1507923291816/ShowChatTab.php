<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
    "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">

    <head>
        <meta name="viewport" content="width=device-width">
        <title></title>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">

        <link rel="stylesheet" href="css/foundation.css">
        <link rel="stylesheet" href="css/app.css">

        <script src="js/jquery-1.7.1.min.js"></script>
        <script src="js/modernizr.foundation.js"></script>
        <script src="js/foundation.js"></script>
        <script src="js/app.js"></script>

    </head>

    <body style="margin:0; padding:0; font-size:10pt; font-family:verdana;">

        <div style="padding-left:5px; padding-right:5px; padding-top:0px; padding-bottom:5px;">
            <div id="divSupportRequest">

                <form class="nice custom">

                    
<script type="text/javascript">
var offset = ((new Date()).getTimezoneOffset()*60)*(-1)+14400;
document.cookie="offset="+offset;
</script>

                                                <div style="padding:5px; padding-left:10px; font-size:10pt; background-repeat:repeat-y; min-height:150px; width:441px;">

                                <div style="color:#383838; padding-left:1px; font-size:12pt; padding-top:4px;">To chat with a live agent, please enter your information below.</div>
                                <!--<div style="width:110%; background-image:url(/Images/rhinoman.png); background-position:top right; background-repeat:no-repeat;">-->
                                <div style="width:110%;">
                                    <br>
                                    <input class="input-text" style="font-family: Helvetica, Arial, Geneva, sans-serif; line-height: 1.4; font-size:12px; padding: 4px 5px !important; width: 275px;" type="text" id="txtFullName" placeholder="Your Name *" name="txtFullName">
                                    <div style="height:12px;"></div>
                                    <input class="input-text" style="font-family: Helvetica, Arial, Geneva, sans-serif; line-height: 1.4; font-size:12px; padding: 4px 5px !important; width: 275px;" type="text" id="txtEmailAddress" placeholder="Email Address *" name="txtEmailAddress">
                                    <div style="height:12px;"></div>
                                    <input class="input-text" style="font-family: Helvetica, Arial, Geneva, sans-serif; line-height: 1.4; font-size:12px; padding: 4px 5px !important; width: 275px;" type="text" id="txtPhoneNumber" placeholder="Your Phone Number" name="txtPhoneNumber">
                                    <div style="height:12px;"></div>
                                    <textarea class="input-text" cols="30" rows="6" style="font-family: Helvetica, Arial, Geneva, sans-serif; line-height: 1.4; font-size:12px; padding: 4px 5px !important; width:473px; height:160px;" id="txtFirstMessage" name="txtFirstMessage" placeholder="Your Question *"></textarea>
                                    <div align="left" style="padding-right:7px; padding-top:13px;">
                                        <input type="button" style="cursor:pointer;" class="nice medium blue radius button" value="Submit" onclick="searchKnowledgeBase();">
                                    </div>
                                </div>
                            </div>
                                            
                    
                    

                </form>


                <script type="text/javascript">
                    var previousSearchText = '';
                    function createChat()
                    {
                        var domain = 'themillionairemastermind';
                        $.post("/AJAX/Custom/StartChat.php", { txtCustomerName : $('#txtFullName').val(), txtEmailAddress : $('#txtEmailAddress').val(), txtCustomerPhone : $('#txtPhoneNumber').val(), txtFirstMessage : $("#txtFirstMessage").val(), domain : domain }, function(data){
                            if(data.indexOf('Sorry') != -1)
                            {
                                location.href = '/create-ticket.php?chat=timeout&subject=Chat Unavailable';
                            }
                            else
                            {
                                location.href = "/RhinoChat.php?id="+data+"&color=%23F4F4F4";
                            }
                        });
                    }
    
                    function searchKnowledgeBase()
                    {
                        if($('#txtFullName').val() == '' || $('#txtFullName').val() == 'Your Name *')
                        {
                            alert('Please fill out your name.');
                            return;
                        }
                        if(!checkEmailAddress($('#txtEmailAddress').val()))
                        {
                            alert('Please enter a valid email address.');
                            return;
                        }
                        if($('#txtFirstMessage').val() == 'Your Question *')
                        {
                            $('#txtFirstMessage').val('');
                        }
                    
                        if($('#txtFirstMessage').val() == '')
                        {
                            alert('Please enter a question or comment.');
                            $('#txtFirstMessage').val('Your Question *');
                            return;
                        }
                    
                        var id = 3325;
                        $.post('/AJAX/Custom/PreChatKB.php', {search : $("#txtFirstMessage").val(), id : id}, function(data){
                
                            if(data.indexOf('Sorry nothing ') != -1)
                            {
                                createChat();
                            }
                            else
                            {
                                var occurences = data.split("KBArticleSearchArticle").length - 1;
                                $("#divSupportRequest").css('display','none');
                                $("#divChatKB").html("<div style='padding:5px; padding-top:15px; padding-left:17px; font-size:10pt;'>Please see if any of the questions below help you before continuing.<br /><br /><div id='chatKBDiv' style='height:345px; overflow:auto;'>"+data+"</div></div></div>");
                                $("#divChatKB").append("<div style='padding-top:0px; padding-left:17px; padding-right:17px;'><a href='#' onclick='createChat(); return false;' style='width:120px; float:right;' class='nice small blue radius button'>Continue to Chat</a><a href='/knowledgebase.htm' target='_blank' style='width:100px;' class='nice white radius button'>View More FAQ</a></div>");
                            }
                            
                            $(".accordion h6").click(function() {
                                $(this).next().toggle('slow');
                                return false;
                            }).next().hide();
                            
                        });
                    }
                    //<span style='cursor:pointer; color:blue;' onclick='createChat();'>Click Here</span> to be taken to chat now.<br /><br />
                
                    
                    function showChatSearch()
                    {
                        $("#divChatKB").html(previousSearchText);
                    }
                
                    function checkEmailAddress(emailAddress)
                    {
                        var emailFilter=/^\s*[\w\-\+_]+(\.[\w\-\+_]+)*\@[\w\-\+_]+\.[\w\-\+_]+(\.[\w\-\+_]+)*\s*$/;
                        if (!(emailFilter.test(emailAddress)))
                        {
                            return false;
                        }

                        return true;
                    }
                
                
                
                    function clearText(elm, text)
                    {
                        $(elm).css("color","#000");
                        $(elm).css("text-align","left");

                        if(text == $(elm).val())
                        {
                            if($(elm).attr('id') != 'txtMessage')
                            {
                                $(elm).focus();
                            }
                            $(elm).select();
                            //$(elm).val("");
                        }
                    }
                                                                                                                                                                                                                                                                                    
                    function showText(elm, text)
                    {
                        $(elm).css("color","#000");
                        $(elm).css("text-align","left");

                        if($(elm).val() == "")
                        {
                            $(elm).val(text);
                        }
                        if($(elm).val() == "" || $(elm).val() == text)
                        {
                            $(elm).css("color","gray");
                        }
                    }
                
                
                    function checkField(elm, text)
                    {
                        if($(elm).val() == text)
                        {
                            $(elm).val('');
                        }
                    }
                
                </script>
            </div>
            <div style="clear:both;" id="divChatKB"></div>
        </div>

    </body>
</html>