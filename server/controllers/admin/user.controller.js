// Models
const User = require("../../models/User.model");

const { limit } = require("../../constants");
const Response = require("../../helpers/response.helper");

exports.getAll = async (req, res, next) => {
  const { _page = 1 } = req.query;

  try {
    const total = await User.find().count();

    const users = await User.find()
      .skip((parseInt(_page) - 1) * limit)
      .limit(limit);

    if (!users) throw new Error("Có lỗi xảy ra");

    return Response.success(res, { users, total });
  } catch (error) {
    console.log(error);
    return next(error);
  }
};

exports.deleteUser = async (req, res, next) => {
  const { userId } = req.params;

  try {
    const user = await User.findById(userId);

    if (!user) throw new Error("Người dùng không tồn tại");

    await User.findByIdAndRemove(userId);

    return Response.success(res, { message: "Xóa thành công" });
  } catch (error) {
    console.log(error);
    return next(error);
  }
};

exports.updateUser = async (req, res, next) => {
  const {
    params: { userId },
    body: { username, email, fullname, phone, address, birthday, gender },
  } = req;

  try {
    if (
      !userId ||
      !username ||
      !email ||
      !fullname ||
      !phone ||
      !address ||
      !birthday ||
      gender === undefined
    )
      throw new Error("Có lỗi xảy ra");

    let user = await User.findById(userId);

    if (!user) throw new Error("Có lỗi xảy ra");

    user = await User.findByIdAndUpdate(user._id, {
      $set: { username, email, fullname, phone, address, birthday, gender },
    });

    return Response.success(res, { user: await User.findById(userId) });
  } catch (error) {
    console.log(error);
    return next(error);
  }
};
