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
