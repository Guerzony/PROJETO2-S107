import nodemailer from 'nodemailer';

const variavelDeAmbiente =  'testes107email@gmail.com ';

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'testes107email@gmail.com',
        pass: 'daledeledoly',
    },
});

const mailOptions = {
    from: 'testes107email@gmail.com',
    to: `${variavelDeAmbiente}`,
    subject: 'changes',
    text: 'Pipeline em execucao',
};

transporter.sendMail(mailOptions, function(error, info){
    if (error) {
        console.log('Erro ao enviar o email: ' + error);
    } else {
        console.log('Email enviado com sucesso: ' + info.response);
    }
});

console.log(variavelDeAmbiente)