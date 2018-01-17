
    <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
        "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
    <html xmlns="http://www.w3.org/1999/xhtml">
    <head>
        <title>The Millionaire Mastermind Contact Page</title>

        <script type="text/javascript" src="js/jquery-1.5.2.min.js"></script>
        <script type="text/javascript" src="js/jquery-ui-1.8.10.custom.min.js"></script>
        <link type="text/css" href="css/jquery-ui-1.8.10.custom.css" rel="stylesheet">

                    <script type="text/javascript" src="js/jquery.ui.touch.js"></script>
            <script type="text/javascript" src="js/QapTcha.jquery.js"></script>
        
        <link rel="stylesheet" href="css/QapTcha.jquery.css" type="text/css">
        <link rel="stylesheet" href="css/foundation.css">
        <link rel="stylesheet" href="css/app.css">


        <script src="js/modernizr.foundation.js"></script>
        <script src="js/foundation.js"></script>
        <script src="js/app.js"></script>

        <style type="text/css">


        </style>

    </head>
    <body style="font-family: Helvetica, Arial, Geneva, sans-serif; background-color: #FFF;">
    <script type="text/javascript">
        var videoID = "";
    </script>

    <div>
        <form enctype="multipart/form-data" action="/FormProcessing/Custom/CreateTicket.php" method="post" name="formContact" id="formContact" class="nice custom">
            <div id="divContact" style="padding-left:14px; padding-right:14px; padding-top:7px; max-width:360; " align="center">
                
                <input validate="general" class="input-text" style="font-family: Helvetica, Arial, Geneva, sans-serif; line-height: 1.4; font-size:12px; padding: 4px 5px !important; width: 320px;" type="text" id="txt665430" name="txt665430" placeholder="Your Name *"><input type="hidden" id="txtName" name="txtName" value=""><script type="text/javascript">$('#txt665430').keyup(function(){ $('#txtName').val($('#txt665430').val())});</script><script type="text/javascript"></script><input validate="general" class="input-text" style="font-family: Helvetica, Arial, Geneva, sans-serif; line-height: 1.4; font-size:12px; padding: 4px 5px !important; width: 320px;" type="text" id="txt111111" name="txt111111" placeholder="Email Address *"><script type="text/javascript"></script><input validate="" class="input-text" style="font-family: Helvetica, Arial, Geneva, sans-serif; line-height: 1.4; font-size:12px; padding: 4px 5px !important; width: 320px;" type="text" id="txt568587" name="txt568587" placeholder="Phone Number *"><script type="text/javascript"></script><input type="hidden" validate="select" name="select333333" id="select333333" value="0">
                                            <div align="left" class="custom dropdown" style="width:320px;">
                                                <a href="#" style="font-size:12px;" class="current">Select Department *</a>
                                                <a href="#" class="selector"></a>
                                                <ul id="select333333a">
                                                    <li style="width:275px;" value="15197">24hr Commission Course</li><li style="width:275px;" value="8253">Billing</li><li style="width:275px;" value="15062">CPA Diamond</li><li style="width:275px;" value="15063">CPA Gold</li><li style="width:275px;" value="15345">Ecom Shortcut</li><li style="width:275px;" value="8251">General</li><li style="width:275px;" value="15777">Google Ecom Silver</li><li style="width:275px;" value="15935">Home Study Program (SCA)</li><li style="width:275px;" value="8254">Sales</li><li style="width:275px;" value="14420">SMS Premium</li><li style="width:275px;" value="13462">Technical Support</li><li style="width:275px;" value="15965">The Mansion Mastermind Partners</li><li style="width:275px;" value="15266">The MM Offers - Affiliate Network</li>
                                                </ul>
                                            </div>
                                            <div style="height:4px;"></div>

                                            <script type="text/javascript">
                                                $('#select333333a li').click(function(){
                                                $('#select333333').val($(this).val());
                                                });
                                            </script><input validate="general" class="input-text" style="font-family: Helvetica, Arial, Geneva, sans-serif; line-height: 1.4; font-size:12px; padding: 4px 5px !important; width: 320px;" type="text" id="txt222222" name="txt222222" placeholder="Subject *"><script type="text/javascript"></script><textarea validate="general" class="input-text" style="font-family: Helvetica, Arial, Geneva, sans-serif; line-height: 1.4; font-size:12px; padding: 4px 5px !important; width:320px; height:130;" placeholder="Message *" rows="5" id="txt849360" name="txt849360"></textarea><script type="text/javascript"></script>                    <script type="text/javascript">
                        var ticketWordDivider = 4;
                        function checkForAnswersCreateTicket(text, force) {
                            if ($.trim(text).length <= 0) {
                                $('#divTicketArticlesFound').css('display', 'none');
                            }

                            var words = text.split(/[\w\u2019\'-]+/).length;

                            if (words % ticketWordDivider == 0 || force) {
                                ticketWordDivider = ticketWordDivider == 4 ? 7 : 4;

                                $.post('/AJAX/Custom/PreTicketKB.php', {search: text, width: '320px'}, function (data) {
                                    if (data.indexOf('Sorry nothing ') != -1) {
                                        $('#divTicketArticlesFound').css('display', 'none');
                                    }
                                    else {
                                        $('#divTicketArticlesFound').html(data);
                                        $('#divTicketArticlesFound').css('display', '');
                                    }
                                    checkScroll(); 
                                });
                            }
                        }

                        
                        $('#divContact textarea').on('keyup', function () {
                            checkForAnswersCreateTicket($(this).val(), false);
                        });
                        $('#divContact textarea').on('blur', function () {
                            checkForAnswersCreateTicket($(this).val(), true);
                        });
                        
                        function toggleTicketArticle(id) {
                            $('#divTicketArticle' + id).slideToggle('100', function () {
                                checkScroll(); 
                            });
                        }
                    </script>

                    <div id="divTicketArticlesFound" align="left" style="display:none; max-width:320px; text-align:left;"></div>

                    <div style="margin-left:14px; width:320px;">
                        
                        <div id="linkAttachFile" style="margin-left:15px; float:left; cursor:pointer; font-size:8pt; background-color:#EDEDED; font-weight:bold; border-radius:4px; border:1px solid #ccc; padding-left:4px; padding-right:4px;">Add Attachment</div>
                        <div style="clear:both;"></div>
                        <div style="height:7px;"></div>
                        <div id="divUploadingFiles">

                        </div>
                        <div id="divFileAttachments" style="height:1px; width:1px; overflow:hidden;">
                            <input id="attachFile1" name="attachFile1" type="file">
                            <input id="attachFile2" name="attachFile2" type="file">
                            <input id="attachFile3" name="attachFile3" type="file">
                            <input id="attachFile4" name="attachFile4" type="file">
                            <input id="attachFile5" name="attachFile5" type="file">
                        </div>
                        <div style="clear:both;"></div>
                    </div>

                    <script type="text/javascript">

                        $('#linkAttachFile').click(function (e) {
                            e.preventDefault();

                            if ($.browser.msie) {
                                $('#divFileAttachments').css('visibility', 'visible');
                                $('#divFileAttachments').css('height', 'auto');
                                $('#divFileAttachments').css('width', 'auto');
                                return;
                            }

                            if ($('#attachFile1').val() == "") {
                                $('#attachFile1').trigger('click');
                            }
                            else if ($('#attachFile2').val() == "") {
                                $('#attachFile2').trigger('click');
                            }
                            else if ($('#attachFile3').val() == "") {
                                $('#attachFile3').trigger('click');
                            }
                            else if ($('#attachFile4').val() == "") {
                                $('#attachFile4').trigger('click');
                            }
                            else if ($('#attachFile5').val() == "") {
                                $('#attachFile5').trigger('click');
                            }
                            else {
                                alert('There is a maximum of 5 Attachments allowed.');
                                return;
                            }
                        });

                        $("input:file").change(function () {
                            if (!$.browser.msie) {
                                var fileName = $(this).val().split('\\').pop();
                                $('#divUploadingFiles').append("<div id='" + $(this).attr('id') + "-text' style='padding-top:4px; padding-bottom:4px;'>" + fileName + " &nbsp;&nbsp;<span onclick=\"removeFileAttachment('" + $(this).attr('id') + "');\" style='cursor:pointer; color:red;'>X</span></div>");
                            }
                        });

                        function removeFileAttachment(id) {
                            var control = $('#' + id);

                            $('#' + id + '-text').remove();
                            control.replaceWith(control.val('').clone(true));
                        }

                    </script>

                
                <div style="display:none; color:red; float:left;" id="divErrorMessage"></div>

                
                <input type="hidden" id="hiddenID" name="hiddenID" value="3325">
                <input type="hidden" id="hiddenBrowser" name="hiddenBrowser" value="Chrome Version 0.0 On Win7">

                <div style="">
                                                <div id="divCaptchaArea">
                                <div style="width:230px;" align="left" id="QapTcha"></div>
                            </div>
                            <div id="divSubmitButton" style="width:320px;">
                                <div style="padding-top:10px; margin-left:-19px;">
                                    <input type="button" style="cursor:pointer; width:230px; margin-left:20px;" class="nice tiny blue radius button" id="btnValidate" value="Submit">
                                </div>
                            </div>
                                        </div>

                <script type="text/javascript">
                    $(document).ready(function () {
                        $('#QapTcha').QapTcha({});                    });
                </script>
            </div>
        </form>
    </div>

    <div id="divThankYou" style="color:black; padding:15px; display:none;">
        <p><span style="font-size: large; font-weight: bold;">Thank You</span></p>
<p>Your message has been submitted and we will contact you as soon as possible!</p><br>Please be sure to check your spam folder if you are using an online mail service.<br><br><a href="#" onclick="location.reload(true); return false;">Submit Another Ticket</a>    </div>

    <div style="clear:both;"></div>


    <script type="text/javascript">

        
                                
        var editor = $("#txtContactEditor").attr('id');
        //tinymce.get(editor).hide();

        var contactInfo = "";

        function cancelContactInfo() {
            $('#divShowEditContact').css('display', '');
            $('#divCompanyInfo').css("display", "");
            $('#imgUpdateContactInfo').css('display', 'none');
            $('#imgCancelContactInfo').css('display', 'none');
            tinymce.get(editor).hide();
            $('#divCompanyInfo').css('border', '0 none');
            $('#txtContactEditor').css('display', 'none');
        }

        function updateContactInfo() {
            tinyMCE.triggerSave();
            var text = tinyMCE.get('txtContactEditor').getContent();

            $('#divCompanyInfo').html(text);
            $('#divCompanyInfo').css("display", "");
            var id = 3325;
            $('#divShowEditContact').css('display', '');
            $('#imgUpdateContactInfo').css('display', 'none');
            $('#imgCancelContactInfo').css('display', 'none');
            //$('#divCompanyInfo').attr('contenteditable',false);
            tinymce.get(editor).hide();
            $('#divCompanyInfo').css('border', '0 none');

            $.post('/AJAX/Custom/UpdateContactText.php', {id: id, contactText: $('#divCompanyInfo').html()}, function (data) {
                alert(data);
                $('#txtContactEditor').css('display', 'none');
            });
        }

        function editContactInfo() {
            contactInfo = $('#divCompanyInfo').html();
            $('#divShowEditContact').css('display', 'none');
            $('#imgUpdateContactInfo').css('display', '');
            $('#imgCancelContactInfo').css('display', '');
            //$('#divCompanyInfo').attr('contenteditable',true);
            $('#divCompanyInfo').css('display', '');
            tinymce.get(editor).show();
            tinyMCE.get('txtContactEditor').setContent($('#divCompanyInfo').html());

            $('#divCompanyInfo').css('border', '1px dotted');
            $('#divCompanyInfo').focus();

            if ($('#divCompanyInfo').html() == "") {
                //$('#divCompanyInfo').html("-->Enter Text Here<--");
            }
            $('#divCompanyInfo').css("display", "none");
        }

        function validateForm() {
            var name = document.getElementById("txtName");
            var email = document.getElementById("txtEmail");
            var phone = document.getElementById("txtPhone");
            var subject = document.getElementById("txtSubject");
            var message = document.getElementById("txtMessage");
            var department = document.getElementById("selectDepartment");
            var id = document.getElementById("hiddenID");

            var emailError = false;
            var errors = false;

            $("[id$='Error']").each(function () {
                $('#' + $(this).attr('id').replace('Error', '')).unwrap('div');
            });
            $('.classErrorMessage').remove();

            if (name.value == "" || name.value == "Your Name *") {
                $('#txtName').wrap("<div id='" + $('#txtName').attr('id') + "Error' style='width:325px;' class='form-field error'></div>");
                $('#' + $('#txtName').attr('id') + 'Error').append("<small class='classErrorMessage'>Please enter your name</small>");
                errors = true;
            }
            if (email.value == "" || email.value == "Your Email Address *") {
                $('#txtEmail').wrap("<div id='" + $('#txtEmail').attr('id') + "Error' style='width:325px;' class='form-field error'></div>");
                $('#' + $('#txtEmail').attr('id') + 'Error').append("<small class='classErrorMessage'>Please enter your Email</small>");
                emailError = true;
                errors = true;
            }
            if (!checkEmailAddress(email.value)) {
                if (!emailError) {
                    $('#txtEmail').wrap("<div id='" + $('#txtEmail').attr('id') + "Error' style='width:325px;' class='form-field error'></div>");
                    $('#' + $('#txtEmail').attr('id') + 'Error').append("<small class='classErrorMessage'>Invalid Email Address</small>");
                }
                errors = true;
            }
            if (department.value == "") {
                $('#selectDepartment').wrap("<div id='" + $('#selectDepartment').attr('id') + "Error' style='width:325px;' class='form-field error'></div>");
                $('#' + $('#selectDepartment').attr('id') + 'Error').append("<small class='classErrorMessage'>Please Select a Department</small>");
                errors = true;
            }
            if (subject.value == "" || subject.value == "Message Title *") {
                $('#txtSubject').wrap("<div id='" + $('#txtSubject').attr('id') + "Error' style='width:325px;' class='form-field error'></div>");
                $('#' + $('#txtSubject').attr('id') + 'Error').append("<small class='classErrorMessage'>Message Title cannot be empty</small>");
                errors = true;
            }
            if (message.value == "" || message.value == "Message *") {
                $('#txtMessage').wrap("<div id='" + $('#txtMessage').attr('id') + "Error' style='width:325px;' class='error'></div>");
                $('#' + $('#txtMessage').attr('id') + 'Error').append("<small class='classErrorMessage'>Message cannot be empty</small>");

                errors = true;
            }

            checkScroll(); 

            if (errors) {
                return false;
            }

            if (department.value == "-1") {
                department.value = '';
            }

            if (phone.value == "Your Phone Number") {
                phone.value = "N/A";
            }

            $.post("/FormProcessing/Custom/CreateTicket.php", {txtName: name.value, txtEmail: email.value, txtPhone: phone.value, selectDepartment: department.value, txtSubject: subject.value, txtMessage: message.value, hiddenID: id.value, videoID: videoID}, function (data) {
                $("#divErrorMessage").css('display', 'none');
                $("#divErrorMessage").html("");

                if (data.indexOf("SUCCESS", 0) != "-1") {
                    $('#QapTcha').css('display', 'none');
                    //var newTicketID = data.substr(8);
                    $("#divContact").slideUp(500, function () {
                        $("#divThankYou").slideDown(500, function(){
                            $('html,body').animate({ scrollTop: $("#divThankYou").offset().top }, 'fast');
                        });
                        //$("#divThankYou").append("<br /><br />You may view this ticket now by doing any of the following:<br /><br />1.<a href='/' target='_blank'>Click Here</a><br />2. Visit <br />3.");
                        //$("#divThankYou").append("<br /><br />You may view this ticket now by <a href='/"+newTicketID+"' target='_blank'>clicking here</a>.");
                    });
                }
                else {
                    if (data == '') {
                        data = 'Cookies must be enabled to submit.<br /><br />Please try sliding the bar again.';
                        $('#QapTcha').QapTcha({});
                    }

                    $("#divErrorMessage").css('display', '');
                    $("#divErrorMessage").html(data);
                }
            });
        }

        function checkEmailAddress(emailAddress) {
            var emailFilter = /^\s*[\w\-\+_]+(\.[\w\-\+_]+)*\@[\w\-\+_]+\.[\w\-\+_]+(\.[\w\-\+_]+)*\s*$/;

            return emailFilter.test(emailAddress);
        }

        function checkPhoneNumber(phoneNumber) {
            var stripped = phoneNumber.replace(/[\(\)\.\-\ ]/g, '');
            //strip out acceptable non-numeric characters
            if (isNaN(parseInt(stripped))) {
                return false;
            }

            return !(stripped.length < 10);
        }

        function checkDomainName(domainName) {
            return domainName.match(/([a-zA-Z]+:\/\/)?(.+\.)?(\w+)(\.\w+)(:[0-9]+)?(\/.+)?/) ? true : false;
        }

        function checkField(elm, text) {
            if ($(elm).val() == text) {
                $(elm).val('');
            }
        }

                $(document).ready(function () {

            var width = $(document).width();
            var height = $(document).height() + 100;
            window.resizeTo(width, height);
        });
            </script>



    <script type="text/javascript">

        function getAllValidationFields() {
            var validation = true;

            $("[id$='Error']").each(function () {

                if ($(this).hasClass('divSelectError')) {

                }
                else {
                    $('#' + $(this).attr('id').replace('Error', '')).unwrap('div');
                }
            });
            $('.smallError').remove();

            $("input, textarea, select").each(function () {
                if ($(this).attr("validate")) {
                    validationType = $(this).attr("validate");
                    if (!validateField(this, validationType)) {
                        validation = false;
                    }
                }
            });

            if (validation) {

                var inputs = $('input');
                var textareas = $('textarea');
                var selects = $('select');

                var id = document.getElementById("hiddenID");

                var fileInputs = false;

                $('input').each(function () {
                    if ($(this).prop('type') == "file") {
                        if ($(this).val() != '') {
                            fileInputs = true;
                        }
                    }
                });

                if (fileInputs) {
                    var specialInputs = JSON.stringify(inputs.serializeArray()).replace(/"/g, "&quot;");
                    var specialTextareas = JSON.stringify(textareas.serializeArray()).replace(/"/g, "&quot;");
                    var specialSelects = JSON.stringify(selects.serializeArray()).replace(/"/g, "&quot;");

                    $('#formContact').append('<input type="hidden" name="inputsSpecial" value="' + specialInputs + '" />');
                    $('#formContact').append('<input type="hidden" name="textareasSpecial" value="' + specialTextareas + '" />');
                    $('#formContact').append('<input type="hidden" name="selectsSpecial" value="' + specialSelects + '" />');
                    $('#formContact').append('<input type="hidden" name="hiddenID" value="' + id.value + '" />');
                    $('#formContact').append('<input type="hidden" name="videoID" value="' + videoID + '" />');
                    $('#formContact').append('<input type="hidden" name="previousPage" value="/show-ticket.php?frame=true" />');
                    $('<input>').attr('type', 'hidden').appendTo('formContact');

                    $('#formContact').submit();
                    return false;
                }


                $.post("/FormProcessing/Custom/CreateTicket.php", {inputs: inputs.serializeArray(), textareas: textareas.serializeArray(), selects: selects.serializeArray(), hiddenID: id.value, videoID: videoID}, function (data) {
                    $("#divErrorMessage").html("");

                    if (data.indexOf("SUCCESS", 0) != "-1") {
                        $('#QapTcha').css('display', 'none');
                        var newTicketID = data.substr(8);
                        $("#divContact").slideUp(500, function () {

                            $("#divThankYou").slideDown(500, function(){
                                $('html,body').animate({ scrollTop: $("#divThankYou").offset().top }, '200');
                            });

                                                    });
                    }
                    else {
                        if (data.indexOf("into the box", 0) != "-1") {
                            $('#divCaptchaArea').html('');
//                            $('#btnValidate').unbind('click');
//
//                            setTimeout(function () {
//                                $('#txtCaptchaName').bind('blur', function () {
//                                    sendCaptcha();
//                                })
//                            }, 50);
                        }
                        $("#divErrorMessage").css('display', '');
                        $("#divErrorMessage").html(data);
                    }
                });
            }
            else {
                checkScroll(); 
                return false;
            }
        }

        
        $(document).ready(function () {
            $('#btnValidate').on('click', function () {
                                    getAllValidationFields();
                            });
        });

        function sendCaptcha() {
            $.post("/AJAX/Custom/CheckECaptcha.php", {val: $('#txtCaptchaName').val()}, function (data) {
                if (data == "success") {
                    return getAllValidationFields();
                }
                $('#txtCaptchaName').val('');
                return false;
            });
        }

        function validateField(elm, validationType) {
            switch (validationType) {
                case "general":
                    if ($(elm).val().length > 0) {
                        $($(elm).attr('id') + 'Error').remove();
                        return true;
                    }
                    else {
                        $(elm).wrap("<div id='" + $(elm).attr('id') + "Error' class='form-field error'></div>");
                        $('#' + $(elm).attr('id') + 'Error').append("<small style='width:320px;' class='smallError'>Field cannot be empty</small>");
                        return false;
                    }
                    break;
                case "email":
                    if (checkEmailAddress($(elm).val())) {
                        return true;
                    }
                    else {
                        $(elm).wrap("<div id='" + $(elm).attr('id') + "Error' class='form-field error'></div>");
                        $('#' + $(elm).attr('id') + 'Error').append("<small style='width:320px;' class='smallError'>Please enter a valid email address</small>");
                        return false;
                    }
                    break;
                case "phone":
                    if (checkPhoneNumber($(elm).val())) {
                        return true;
                    }
                    else {
                        $(elm).wrap("<div id='" + $(elm).attr('id') + "Error' class='form-field error'></div>");
                        $('#' + $(elm).attr('id') + 'Error').append("<small style='width:320px;' class='smallError'>Please enter a valid phone number with area code</small>");
                        return false;
                    }
                    break;
                case "website":
                    if (checkDomainName($(elm).val())) {
                        return true;
                    }
                    else {
                        $(elm).wrap("<div id='" + $(elm).attr('id') + "Error' class='form-field error'></div>");
                        $($(elm).attr('id') + 'Error').append("<small style='width:320px;' class='smallError'>Please enter a valid phone website</small>");
                        return false;
                    }
                    break;
                case "select":
                    if ($(elm).val() != 0) {
                        return true;
                    }
                    else {
                        var $nextDiv = $(elm).next('div');
                        $nextDiv.wrap("<div id='" + $(elm).attr('id') + "Error' class='form-field error divSelectError'></div>");
                        $nextDiv.parent('div').append("<small style='width:320px;' class='smallError'>Please select a value</small>");
                        return false;
                    }
                    break;
            }
        }


        function bookMark(title, url) {
            if (window.sidebar) {
                window.sidebar.addPanel(title, url, "");
                return true;
            }
            if (window.external) {
                window.external.AddFavorite(url, title);
                return true;
            }
            if (window.opera && window.print) {
                var elem = document.createElement('a');
                elem.setAttribute('href', url);
                elem.setAttribute('title', title);
                elem.setAttribute('rel', 'sidebar');
                elem.click();
                return true;
            }
            return false;
        }

        $(document).ready(function () {

            
            if ($('#divContact').height() > 530) {
                $('#divContact').css('max-width', '470px');
            }

            //                        $('.customDropdown div').css('width','325px');
            //                        $('.customDropdown ul').css('width','325px');
            //                        $('a.current').css('font-size','12px');

            //                        $('.customDropdown').click(function(){
            //                            $(this).find('a.current').css('color','#000');
            //                        });


                    });

        function checkScroll() {
            if ($('#divContact').innerHeight() >= parseInt($('#divContact')[0].scrollHeight)) {
                $('#divContact').css('overflow-y', 'hidden');
            }
            else {
                $('#divContact').css('overflow-y', 'auto');
            }
            $("div[id^='select']").append($(this).parent());
        }

    </script>

    <script type="text/javascript">
                //$('#divContact').css('overflow', 'auto');
                $(document).ready(function () {
            setTimeout(function () {
                checkScroll();
            }, 1000);
        });
    </script>

    </body>
    </html>
