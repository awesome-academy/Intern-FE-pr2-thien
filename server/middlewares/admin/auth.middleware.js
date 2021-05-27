const jwt = require("jsonwebtoken");

exports.protect = (req, res, next) => {
  const token = req.body.token || req.query.token || req.headers.authorization;

  try {
    if (!token) throw new Error("Không tìm thấy token");
    const {
      admin: { username, password },
    } = jwt.verify(token.split(" ")[1], process.env.JWT_SECRET);

    if (!username || !password) throw new Error("Token không hợp lệ");

    if (
      username !== process.env.ADMIN_USERNAME ||
      password !== process.env.ADMIN_PASSWORD
    )
      throw new Error("Token không hợp lệ");

    req.admin = { username, password };

    return next();
  } catch (error) {
    console.log(error);
    return Response.error(res, { message: error.message });
  }
};
