import nodemailer from 'nodemailer'
const config = useRuntimeConfig()

const transporter = nodemailer.createTransport({
    host: `${config.MAIL_HOST}`,
    port: `${config.MAIL_PORT}`,
    auth: {
        user: `${config.MAIL_USER}`,
        pass: `${config.MAIL_PASSWORD}`
    }
})

export default defineEventHandler(async (event) => {
    try {
        const body = await readBody(event)

        const html = `
        <style>body{margin:0;padding:0;mso-line-height-rule:exactly;min-width:100%}.wrapper{display:table;table-layout:fixed;width:100%;min-width:620px;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%}body,.wrapper{background-color:#fff}table{border-collapse:collapse;border-spacing:0}table.center{margin:0 auto;width:602px}td{padding:10px;vertical-align:top}.spacer{font-size:1px;line-height:1px;width:100%;line-height:16px}.padded{padding:0 24px}.main{-webkit-box-shadow:0 1px 3px 0 rgba(0,0,0,0.12),0 1px 2px 0 rgba(0,0,0,0.24);-moz-box-shadow:0 1px 3px 0 rgba(0,0,0,0.12),0 1px 2px 0 rgba(0,0,0,0.24);box-shadow:0 1px 3px 0 rgba(0,0,0,0.12),0 1px 2px 0 rgba(0,0,0,0.24)}.columns{margin:0 auto;width:600px;background-color:#fff;font-size:14px}.column{text-align:left;background-color:#fff;font-size:14px}.column-top{font-size:12px;line-height:12px}.content{width:100%}.column-bottom{font-size:12px;line-height:12px}.content h1{margin-top:0;margin-bottom:16px;color:#212121;font-family:Roboto,Helvetica,sans-serif;font-weight:400;font-size:20px;line-height:28px;text-align:center}.content p{margin-top:0;margin-bottom:16px;color:#212121;font-family:Roboto,Helvetica,sans-serif;font-weight:400;font-size:16px;line-height:24px}@media only screen and (min-width: 0){.wrapper{text-rendering:optimizeLegibility}}@media only screen and (max-width: 620px){[class=wrapper]{min-width:302px!important;width:100%!important}[class=wrapper] .block{display:block!important}[class=wrapper] .hide{display:none!important}[class=wrapper] .top-panel,[class=wrapper] .header,[class=wrapper] .main,[class=wrapper] .footer{width:302px!important}[class=wrapper] .title,[class=wrapper] .subject,[class=wrapper] .signature,[class=wrapper] .subscription{display:block;float:left;width:300px!important;text-align:center!important}[class=wrapper] .signature{padding-bottom:0!important}[class=wrapper] .subscription{padding-top:0!important}}</style>
        <center class="wrapper"> <div class="spacer">&nbsp;</div> <table class="main center" width="602" border="0" cellspacing="0" cellpadding="0"> <tbody> <tr> <td class="column"> <div class="column-top">&nbsp;</div> <table class="content" border="0" cellspacing="0" cellpadding="0"> <tbody> <tr> <td class="padded"> <h1>New Inquiry from Personal Website</h1> <table style="width:100%" border="1"> <tr> <td><strong>Name</strong></td> <td>${body.name}</td> </tr> <tr> <td><strong>Email<strong></td> <td>${body.email}</td> </tr> <tr> <td><strong>Message</strong></td> <td>${body.message}</td> </tr> </table><br> </td> </tr> </tbody> </table> <div class="column-bottom">&nbsp;</div> </td> </tr> </tbody> </table> <div class="spacer">&nbsp;</div> </center>
        `

        await transporter.sendMail({
            from: `"${body.name}" <${body.email}>`,
            to: 'hello@fitriafiq.com',
            subject: 'New Inquiry',
            text: body.message,
            html: html
        })

        return {
            statusCode: 200,
            body: 'Email sent successfully'
        }
    } catch (error) {
        console.log(error);
        return sendError(event, createError({ statusCode: 400, statusMessage: error.toString() }));
    }
})