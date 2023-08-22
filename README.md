
# Twilio WhatsApp Express Node RESTFUL API

A project to give people how to send and reply when using WhatsApp sandbox and also the reply connecting to the ChatGPT.

## Common Problem when trying to send and reply message in WhatsApp using Twilio
- **20003** : This error code in response show you **Your authToken is changed**. This happened when you renew your sandbox after 24 hours. So please do check for new authToken.
- **63007** : This error code is when you using false sandbox number. Plase do check at the **Business-Initiated message** section to check the number for sandbox testing purpose.
- **Not know how to configure WhatsApp Sandbox Inbound URL. This is the steps how to generate one** :
  > - Check the sandbox settings
  > - Locate the "When a message comes in". Make sure the method HTTP is POST.
  > - Install ngrok.
  > - Done installing it.
  > - Get the **Forwarding** URL and copy it. 
  > - Check your route and also app.use()
  > - Specify your route at the server.js
  > - Merge the **Forwarding URL and your route**.
  > - Paste at the "When a message comes in". 

## Tech Stack

**Backend:** 
> - **Node, Express** : Create the web application and build RESTFUL API.
> - **Twilio** : Using the helper function to create the message
> - **dotenv** : Encrypted file for sensitive information
> - **Mongoose** : Tools to build models and schema for MongoDB
> - **MongoDB** :  NOSQL Database 
> - **asyncHandler** : Simple middleware for handling exceptions inside of async express routes and passing them to your express error handlers.
> - **Nodemon** : auto restart the server
> - **ngrok** :  Exposed the local host to the public 
> - **CORS** :  Override the cross origin policy for connecting backend to frontend 


## Installation

Install my-project with npm

```bash
  git clone "URL"

  npm install --save

  npm i express twilio dotenv mongoose mongodb asyncHandler ngrok cors nodemon
```
    
## Authors

- [@axeladib](https://github.com/axeladib)

## Backend Architecture
We have been followed MVC architecture because a lof of programmer used this architecture

Routes
Controller
Model