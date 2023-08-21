const asyncHandler = require("express-async-handler");
const accountSid = process.env.TWILIO_ACCOUNT_SID;
//FIXME: This auth token always changing when the 24 hours sandbox is ended
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require("twilio")(accountSid, authToken);

//TODO: Error Handler
const errorHandler = (error) => {
  let errors = { status: "" };
  console.log(error.code);
  //TODO: Check if authToken need to be changed in Twilio
  //TODO: Check if the number is not registered or missing channel(WhatsApp, SMS)
  if (error.code === 63007) {
    errors.status =
      "Sending a message using number that re not registred to the Twilio";
    if (error.code === 20003) {
      errors.status =
        "The authToken needs to change please refer to Twilio console";
      return errors;
    }
  }
};

//TODO: Send message

const createMessage = async (req, res) => {
  const receiverNumber = +601129512295;
  try {
    const message = await client.messages.create({
      from: "whatsapp:+14155238886",
      body: "Hello there !!! This is me Nabil Adib CEO and Founder of ServiceSync",
      to: `whatsapp:${receiverNumber}`,
    });
    console.log(message);
    res
      .status(200)
      .json({ message: "Message sent successfully", response: message });
  } catch (error) {
    const errors = errorHandler(error);
    res.status(500).json({ errors });
  }
};

//TODO: Reply to incoming message

const replyMessage = asyncHandler(async (req, res) => {
  try {
    const incomingMessage = req.body.body;
    const senderNumber = req.body.from;
 
    const replyMessage = `You said ${incomingMessage}`;
    const receiverNumber = +601129512295;

    const message = await client.messages.create({
      from: `whatsapp:${senderNumber}`,
      body: replyMessage,
      to: `whatsapp:${receiverNumber}`,
    });
    console.log(message);
    res.status(200).json({ message: "Successfully reply", response: message });
  } catch (error) {
    const errors = errorHandler(error);
    res.status(500).json({ errors });
  }
});

module.exports = { createMessage, replyMessage };
