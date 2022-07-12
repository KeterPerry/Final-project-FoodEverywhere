import sgMail from "@sendgrid/mail";
const sendGridAPIKEY =
  "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";

sgMail.setApiKey(sendGridAPIKEY);

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
