var nodemailer = require('nodemailer');

const mailer = async(guest)=>{
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'mohit.21ug2013@iiitranchi.ac.in',
          pass: 'mtrp nlpd rsie hvjs'
        }
      });
      
      var mailOptions = {
        from: 'mohit.21ug2013@iiitranchi.ac.in',
        to: guest.userEmail,
        subject: 'Booking Confirmation!!!',
        text: " Guest, We are pleased to confirm your reservation for a hotel room at our establishment for the specified dates. We look forward to hosting you and ensuring your stay is comfortable."
     };

      try {
        await transporter.sendMail(mailOptions);
        console.log("Email Sent Successfully");
      } catch (error) {
        console.log("Error Occured");
        throw error;
      }
}


module.exports = mailer;

