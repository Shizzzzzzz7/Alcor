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
        text: `Dear Guest, \nWe are thrilled to confirm your reservation for a hotel room at Alcor for the dates of [Check-in Date] to [Check-out Date]. We look forward to welcoming you to our establishment and ensuring that your stay with us is comfortable and enjoyable.\n`
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

