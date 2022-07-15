import { Contact } from "../models/contact/contact.model.js";
import { contact } from "../emails/accounts.js";

export const getForm = async (req, res) => {
  try {
    const addedForm = new Contact(req.body);
    await addedForm.save();
    console.log(addedForm);
    contact(addedForm.email, addedForm.comments);
    console.log(addedForm);
    res.status(201).send(addedForm);
  } catch (error) {
    res.status(404).send("error adding form!");
  }
};
