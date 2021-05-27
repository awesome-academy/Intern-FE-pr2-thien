export const baseURLUserAuth = "/user/auth";
export const baseURLUserCategory = "/user/category";
export const baseURLUserProduct = "/user/product";
export const baseURLUserOrder = "/user/order";

export const baseURLAdminAuth = "/admin/auth";
export const baseURLAdminUser = "/admin/user";

export const baseUrl = "http://localhost:5000/api";

// Response
export const RESPONSE_STATUS_SUCCESS = "success";
export const RESPONSE_STATUS_FAILED = "failed";

// Page
export const limit = 20;

// Validation Messages
export const VALIDATION_USERNAME = { required: "Bạn phải nhập tên đăng nhập" };
export const VALIDATION_EMAIL = {
  required: "Bạn phải nhập email",
  isEmail: "Bạn phải nhập đúng định dạng email",
};
export const VALIDATION_PASSWORD = {
  required: "Bạn phải nhập mật khẩu",
  matches:
    "Mật khẩu phải nhiều hơn 8 ký tự, bao gồm chữ in thường, in Hoa, và số",
  min: "Mật khẩu không được ít hơn 8 ký tự",
  oneOf: "Mật khẩu không khớp",
  regex: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,
};
export const VALIDATION_CONFIRM_PASSWORD = {
  required: "Bạn phải nhập lại mật khẩu",
  oneOf: "Mật khẩu không khớp",
};
export const VALIDATION_FULLNAME = { required: "Bạn phải nhập họ tên" };
export const VALIDATION_PHONE = {
  required: "Bạn phải nhập số điện thoại",
  matches: "Số điện thoại bắt buộc phải bắt đầu bằng số 0 và có 9 chữ số",
  regex: /0[0-9]{9}/g,
};
export const VALIDATION_ADDRESS = { required: "Bạn nhập địa chỉ" };
export const VALIDATION_BIRTHDAY = {
  required: "Bạn phải nhập ngày sinh",
  max: "Ngày sinh không được lớn hơn ngày hiện tại",
};
export const VALIDATION_GENDER = { required: "Bạn phải chọn giới tính" };
export const VALIDATION_PAYMETHOD = {
  required: "Bạn phải chọn phương thức thanh toán",
};
export const VALIDATION_RESET_PASSWORD = {
  required: "Bạn phải nhập mật khẩu mới",
  notOneOf: "Mật khẩu không được trùng với mật khẩu cũ",
};
export const VALIDATION_CONFIRM_RESET_PASSWORD = {
  required: "Bạn phải nhập lại mật khẩu mới",
  oneOf: "Mật khẩu không khớp",
};
