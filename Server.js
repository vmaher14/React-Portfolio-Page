const express = require("express");
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");


  

// server used to send send emails
const PORT = process.env.PORT || 5000;
const app = express();
const corsOptions = {
    origin: "https://victormaherwebportfolio.onrender.com",
    optionsSuccessStatus: 200,
  };
  app.use(cors(corsOptions));
app.use(express.json());
app.use("/", router);
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
console.log(process.env.EMAIL_USER);
console.log(process.env.EMAIL_PASS);



const contactEmail = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: "victorjmaher@gmail.com",
    pass: "wafe ejgv fowq jejk"
  },
});

contactEmail.verify((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Ready to Send");
  }
});

router.post("/contact", (req, res) => {
  const name = req.body.firstName + req.body.lastName;
  const email = req.body.email;
  const message = req.body.message;
  const phone = req.body.phone;
  const mail = {
    from: name,
    to: "victorjmaher@gmail.com",
    subject: "Contact Form Submission - Portfolio",
    html: `<p>Name: ${name}</p>
           <p>Email: ${email}</p>
           <p>Phone: ${phone}</p>
           <p>Message: ${message}</p>`,
  };
  contactEmail.sendMail(mail, (error) => {
    if (error) {
      res.json(error);
    } else {
      res.json({ code: 200, status: "Message Sent" });
    }
  });
});