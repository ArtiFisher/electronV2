var app = document.getElementById("app"),
	output = document.getElementById("output"),
    introInput = document.getElementById("intro-input"),
	form = document.getElementById("input-form"),
	nameInput = document.getElementById("name-input"),
	surnameInput = document.getElementById("surname-input"),
	imageURLInput = document.getElementById("imageURL-input"),
	unitInput = document.getElementById("unit-input"),
	titleInput = document.getElementById("title-input"),
	skypeInput = document.getElementById("skype-input"),
	mailInput = document.getElementById("mail-input"),
	descriptionInput = document.getElementById("description-input"),
	saveButton = document.getElementById("save"),
	cancelButton = document.getElementById("cancel"),
	nextButton = document.getElementById("next"),
    fs = require('fs'),
    users = [],
	resultButton = document.getElementById("result");

nextButton.addEventListener('click', function(){
	app.classList.add('filling-form');
});

resultButton.addEventListener('click', buildFile);

saveButton.addEventListener('click', function(){
	// displayItem();
    users.push(new User(form));
	app.classList.remove('filling-form');
});

cancelButton.addEventListener('click', function(){
	app.classList.remove('filling-form');
});

class User {
    constructor(form){
        for(let i = 0; i < form.children.length; i++){
            let id = form.children[i].id,
                field;
            if(id.indexOf('input') > -1){
                field = id.split('-')[0];
            }
        }
    }

    getHTML(){
        var element = document.createElement('div');
            HTML = `<table cellspacing="0" cellpadding="0" border="0" style="border-bottom: 1px solid #d2d2d2;" >
                                <tr>
                                    <td collspan="2" height="23">&nbsp;</td>
                                </tr>
                                <tr>
                                    <td valign="top" style="padding-bottom: 30px;">
                                        <table cellspacing="0" cellpadding="0" border="0">
                                            <tr>
                                                <td align="center"valign="top" style="padding-left: 13px; padding-right: 13px;">
                                                    <img width="166" height="217" src="${user.imageURL}" alt="">
                                                </td>
                                            </tr>
                                            <tr><td>&nbsp;</td></tr>
                                        </table>
                                    </td>
                                    <td valign="top" style="padding-left: 20px; padding-bottom: 30px;">
                                        <table cellspacing="0" cellpadding="0" border="0">
                                            <tr>
                                                <td style="font-style: italic; color: #38899b; font-size: 12px; padding-bottom: 10px; font-family: Arial,'Times New Roman', serif;">
                                                    <!-- Название отдела -->
                                                    <span style="font-style: italic; color: #38899b; font-size: 12px; padding-bottom: 10px; font-family: Arial,'Times New Roman', serif; line-height: 19px;">${user.unit}</span>
                                                    <!-- / Название отдела -->
                                                    <br>
                                                    <!-- Позиция сотрудника -->
                                                    ${user.title}
                                                    <!-- / Позиция сотрудника -->

                                                 </td>
                                            </tr>
                                            <tr>
                                                <td style="color: #333333; font-size: 15px; font-weight: 700; padding-bottom: 16px; font-family: Arial,'Times New Roman', serif;">

                                                    <!-- ФИО -->
                                                    ${user.name} ${user.surname}
                                                    <!-- / ФИО -->

                                                </td>
                                            </tr>
                                                <td style="color: #727272; font-size: 14px; font-style: italic; padding-bottom: 20px; font-family: Arial,'Times New Roman';">
                                                    <img src="https://drive.google.com/uc?id=0B0gvOB9B-lkHV1BwRkhYNVVpY2M" alt="Skype">&nbsp;<span style="vertical-align: 15px;">${user.skype}</span>&nbsp;&nbsp;&nbsp;
                                                    <img src="https://drive.google.com/uc?id=0B0gvOB9B-lkHTlpVRXl3Sl9aS0U" alt="Lync">&nbsp;<span  style="vertical-align: 15px;">${user.mail}</span>
                                                </td>
                                            <tr>
                                                <td style="line-height: 25px; font-family: Arial,'Times New Roman', serif; color:#727272;">

                                                    <!-- О сотруднике -->
                                                    ${user.description}
                                                    <!-- / О сотруднике -->
                                                </td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>
                            </table>`;
        element.classList.add('item');
        element.innerHTML = HTML;
        output.appendChild(element);
    }
}

function buildFile(){
	var fileName = 'output.html';
	var stream = fs.createWriteStream(fileName);
	stream.once('open', function(fd) {
	  var html = buildHtml();
	  stream.end(html);
	});
}

function buildHtml() {
    return htmlParts.start + htmlParts.header + htmlParts.intro + htmlParts.contentStart + output.innerHTML + htmlParts.ending;
};