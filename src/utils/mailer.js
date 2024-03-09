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
        text: "Dear [Your Name], /We are thrilled to confirm your reservation for a hotel room at Alcor for the dates of [Check-in Date] to [Check-out Date]. We look forward to welcoming you to our establishment and ensuring that your stay with us is comfortable and enjoyable. Below are the details of your booking:/Hotel Name: Alcor/Check-in Date: [Check-in Date]/Check-out Date: [Check-out Date]/Room Type: [Room Type]. Your room has been reserved under the name of [Your Name]. If there are any changes to your travel plans or if you have any additional requests, please do not hesitate to contact us at [Hotel Contact Information]. Kindly note that the reservation is confirmed, and no further action is required from your end. We eagerly anticipate your arrival and aim to make your stay at [Hotel Name] a memorable one. Should you have any questions or concerns before your arrival, feel free to reach out to us. Warm regards,Team ALcor"
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

