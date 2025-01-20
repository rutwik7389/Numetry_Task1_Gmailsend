const nodemailer =require('nodemailer');

async function sendMail(){
   const transporter=  nodemailer.createTransport({
        service:'gmail',
        auth:{
            user:'rutwiksindkar77@gmail.com',
            pass:'nqcgrbxfvdqofblp'
        }
    })

    //config mail
    const mailoption={
        from:'rutwiksindkar77@gmail.com',
        to:'rutwiksindkar07@gmail.com',
        sub:'Welcome to node mailer feature',
        text:'This is demo email'
    }

   try {
   const result= await transporter.sendMail(mailoption);
  console.log('Email Sent Successfully');
  
} catch (error) {
    console.log('Email sent failed',error);
    
   } 
}
sendMail()