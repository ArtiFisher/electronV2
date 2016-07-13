var htmlParts = {
	start: `<!DOCTYPE html>
    <html>
    <head>
        <meta charset="utf-8">
    </head>
    <body style="margin: 0; padding: 0; font-size: 14px; font-family: Arial,'Times New Roman', serif; color:#727272;" bgcolor="#ffffff">

    <table width="100%" border="0" cellspacing="0" cellpadding="0" style="margin: 0 auto;">
        <tr>
            <td align="center" valign="top">`,


            header:` <!-- header -->
                <table width="738" height="216"  cellspacing="0" cellpadding="0" border="0" style="margin: 17px auto 0;" bgcolor="#39c2d7">
                    <tr>
                        <td style="padding-left: 24px; padding-top: 30px; padding-right: 24px; padding-bottom: 70px;">
                            <img width="79" height="28" src="https://drive.google.com/uc?id=0B0gvOB9B-lkHWWE5elI2aGFXbkU" alt="EPAM">
                        </td>
                    </tr>
                    <tr>
                        <td style="padding-left: 24px; padding-right: 24px; padding-bottom: 22px;">
                            <!-- title of Division -->
                            <img src="https://drive.google.com/uc?id=0B0gvOB9B-lkHTWQ4c3d5NDZYMU0" alt="">
                        </td>
                    </tr>
                </table>
                <!-- /header -->`,

                introStart: `<table width="738" cellspacing="0" cellpadding="0" border="0" style="margin: auto;" bgcolor="#eef2f5">
                    <tr>
                        <td style="padding-left: 24px; padding-right: 24px; padding-bottom: 30px;font-size: 14px; line-height: 25px; font-family: Arial,'Times New Roman', serif; color:#727272;">`,

                introEnding:`</td>
                    </tr>
                </table>`,

                contentStart: `<!-- content -->
                <table width="738" cellspacing="0" cellpadding="0" border="0" style="margin: auto;">
                    <tr>
                        <td>`,

    ending: `</td>
                </tr>                
            </table>
            <!-- end content -->
            <!-- footer -->
            <table width="738" cellspacing="0" cellpadding="0" border="0" style="margin: auto;">
                <tr>
                    <td style="color: #000000; font-size: 16px; font-weight: 700; padding-top: 20px; padding-right: 24px; padding-left: 24px; padding-bottom: 37px; font-family: Arial,'Times New Roman', serif;">
                        Welcome on board!
                    </td>
                </tr>
            </table>
            <!-- /footer -->
        </td>
    </tr>
</table>

</body>`
}