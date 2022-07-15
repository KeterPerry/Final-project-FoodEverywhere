import jwt from "jsonwebtoken";

export const chatAuth = async (req, res, next) => {
  try {
    // console.log(req.headers.authorization);
    if (!req.headers.authorization) throw "Forbidden!!";
    const token = req.headers.authorization.split(" ")[1];
    console.log(token);
    const payload = jwt.verify(token, process.env.SECRET);
    console.log(payload);
    req.payload = payload;
    next();
  } catch (err) {
    res.status(401).json({
      message: "Forbidden 🚫🚫🚫",
    });
  }
};
