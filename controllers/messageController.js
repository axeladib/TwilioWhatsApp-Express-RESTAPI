const asyncHandler = require("express-async-handler");
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require("twilio")(accountSid, authToken);

//TODO: Error Handler
const errorHandler = (error) => {
    let errors = {status:""}
    console.log(error.code);

    if(error.code === 63007){
        errors.status = "Sending a message using number that re not registred to the Twilio";
        return errors
    }
}

//TODO: send message

const receiverNumber = +601129512295;
const createMessage = async (req, res) => {
    try {
      const message = await client.messages.create({
        from: "whatsapp:+14155238886",
        body: "Hello there !!! This is me Nabil Adib CEO and Founder of ServiceSync",
        to: `whatsapp:${receiverNumber}`,
      });
      console.log(message);
      res.status(200).json({ message: "Message sent successfully",response: message });
    } catch (error) {
      const errors = errorHandler(error)
      res
        .status(500)
        .json({ errors });
    }
  };

module.exports = createMessage;