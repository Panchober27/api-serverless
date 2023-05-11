"use strict";

module.exports.hello = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: "hello there,  ahh general kenobi!",
        input: event,
      },
      null,
      2
    ),
  };
};

module.exports.getUser = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: "Function to get user",
        user: {
          name: "John Doe",
          age: 30,
        },
        input: event,
      },
      null,
      2
    ),
  };
};

module.exports.createUser = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: `${event.pathParameters.name} recibed`,
        input: event,
      },
      null,
      2
    ),
  };
};

//   const nodemailer = require("nodemailer");
//   let response = {
//     statusCode: 200,
//     body: "",
//   };

//   const transporter = nodemailer.createTransport({
//     service: "gmail",
//     auth: {
//       user: "",
//       pass: "",
//     },
//   });

//   const mailOptions = {
//     from: "",
//     to: "",
//     subject: "Sending Email using Node.js",
//     text: "That was easy!",
//   };

//   try {
//     const result = await transporter.sendMail(mailOptions);
//     response.body = JSON.stringify(result);
//   } catch (error) {
//     response.body = JSON.stringify(error);
//   }

//   return response;
// };