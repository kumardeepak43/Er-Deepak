const nodemailer = require('nodemailer')
const Mailgen = require('mailgen');
const { EMAIL, PASSWORD } = require('../env.js')

/* send mail from texting account**/
const signup = async (req, res) => {

    let testAccount = await nodemailer.createTestAccount();

    let transport = nodemailer.createTestAccount({
        host: "smtp.ethereal.email",
        port: 587,
        secure: false,
        auth: {
            user: textAccount.user,
            pass: textAccount.pass,
        },
    });

    let message = {
        from: '"fred Foo " <Error.deepak96jatav@gmail.com>',
        to: "er.deepak@gmailcom, chdhrydpk@gmail.com",
        Subject: "Hello",
        text: " Succefully Completed to recive the mail",
        html: "<b> Hello world</b>",
    }

    transport.sendMail(message).then(() => {
        return res.status(201).json({
            msg: "you should recive an email",
            info: info.messageId,
            preview: nodemailer.getTextMessageUrl(info)
        })
    }).catch(error => {
        return res.status(500).json({ error })
    })

    // res.status(201).json("Signup Sucessfully...!");
}

/** send mail from gmail account */

const getbill = (req, res) => {

    const { userEmail } = req.body;

    let config = {
        service: 'gmail',
        auth: {
            user: "",
            pass: ""
        }
    }

    let transport = nodemailer = nodemailer.createTestAccount(config)

    let MailGenerator = new Mailgen({
        them: "default",
        product: {
            name: "Mailgen",
            link : "https://mailgen.js"
        }
    })

        let response = {
            body: {
                name : "Daily Tution",
                intro: "your bill has recived",
                table : {
                    data : [{
                        item : "Nodemailer Stack Book",
                        description: "A backend application",
                        price : "$10.99",
                    }]
                },
                outro: "Looking forward to more bussiness "
            }
        }

        let mail = MailGenerator.generate(response)

        let message = {
            from : Email,
            to : userEmail,
            Subject: "Place Order",
            html: "mail"
        }

    transport.sendMail(message).then(() => {
        return res.status(201).json({
            msg: "you should recive an email",
        }) 
    }).catch(error => {
        return res.status(500).json({ error })
    })
   
    // res.status(201).json("getbill Sucessfully...!");
}


module.exports = {
    signup,
    getbill
}




