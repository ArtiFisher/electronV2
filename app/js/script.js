var fs = require('fs'),
    app = document.getElementById("app"),
	preview = document.getElementById("preview"),
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
	resultButton = document.getElementById("result"),
    users = [];

nextButton.addEventListener('click', function(){
	app.classList.add('filling-form');
});

resultButton.addEventListener('click', buildFile);

saveButton.addEventListener('click', function(){
    var user = new User(form);
    user.displayPreview();
    users.push(user);
	app.classList.remove('filling-form');
});

cancelButton.addEventListener('click', function(){
	app.classList.remove('filling-form');
});

class User {
    constructor(form){
        var inputs = form.querySelectorAll('input, textarea');
        for(let i = 0; i < inputs.length; i++){
            let element = inputs[i],
                id = element.id;
            this[id] = element.value;
        }
    }

    getOutputHTML(){
        var HTML = `<table cellspacing="0" cellpadding="0" border="0" style="border-bottom: 1px solid #d2d2d2;" >
                        <tr>
                            <td collspan="2" height="23">&nbsp;</td>
                        </tr>
                        <tr>
                            <td valign="top" style="padding-bottom: 30px;">
                                <table cellspacing="0" cellpadding="0" border="0">
                                    <tr>
                                        <td align="center"valign="top" style="padding-left: 13px; padding-right: 13px;">
                                            <img width="166" height="217" src="${this.imageURL}" alt="">
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
                                            <span style="font-style: italic; color: #38899b; font-size: 12px; padding-bottom: 10px; font-family: Arial,'Times New Roman', serif; line-height: 19px;">${this.unit}</span>
                                            <!-- / Название отдела -->
                                            <br>
                                            <!-- Позиция сотрудника -->
                                            ${this.title}
                                            <!-- / Позиция сотрудника -->

                                         </td>
                                    </tr>
                                    <tr>
                                        <td style="color: #333333; font-size: 15px; font-weight: 700; padding-bottom: 16px; font-family: Arial,'Times New Roman', serif;">

                                            <!-- ФИО -->
                                            ${this.name} ${this.surname}
                                            <!-- / ФИО -->

                                        </td>
                                    </tr>
                                        <td style="color: #727272; font-size: 14px; font-style: italic; padding-bottom: 20px; font-family: Arial,'Times New Roman';">
                                            <img src="images/skypeicon.png" alt="Skype">&nbsp;<span style="vertical-align: 15px;">${this.skype}</span>&nbsp;&nbsp;&nbsp;
                                            <img src="images/Lyncicon.png" alt="Lync">&nbsp;<span  style="vertical-align: 15px;">${this.mail}</span>
                                        </td>
                                    <tr>
                                        <td style="line-height: 25px; font-family: Arial,'Times New Roman', serif; color:#727272;">

                                            <!-- О сотруднике -->
                                            ${this.description}
                                            <!-- / О сотруднике -->
                                        </td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                    </table>`;
        return HTML;
    }

    displayPreview(){
        var element = document.createElement('div');
        element.classList.add('item');
        element.innerHTML = this.getOutputHTML();
        preview.appendChild(element);
    }
}

function getUsersHTML(){
    var HTML = '';
    for(var i = 0, len = users.length; i < len; i++){
        HTML += users[i].getOutputHTML();
    }
    return HTML;
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
    return htmlParts.start + htmlParts.header + htmlParts.introStart + introInput.value + htmlParts.introEnding + htmlParts.contentStart + getUsersHTML() + htmlParts.ending;
};