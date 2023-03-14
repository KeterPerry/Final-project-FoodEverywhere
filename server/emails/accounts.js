import sgMail from "@sendgrid/mail";
import "dotenv/config.js";

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export const sendWelcomeMessage = (email, name) => {
  sgMail.send({
    to: email,
    from: "keterav@gmail.com",
    subject: "Thank you for joining in",
    text: `Welcome to the app ${name}`,
  });
};

export const contact = (email, text) => {
  sgMail.send({
    to: "keterav@gmail.com",
    from: email,
    subject: "a message",
    text: text,
  });
};

export const sendCancelationMessage = (email, name) => {
  sgMail.send({
    to: email,
    from: "keterav@gmail.com",
    subject: "Sorry to see you go!",
    text: `Goodbye ${name}, I hope to see you back sometimes soon`,
  });
};
