import axiosClient from "../apiClient";

import { baseURLAdminUser } from "constants/index";

export const getAllApi = (page) => {
  return axiosClient.get(`${baseURLAdminUser}/getAll?_page=${page}`);
};

export const deleteUserApi = (userId) => {
  axiosClient.get(`${baseURLAdminUser}/delete/${userId}`);
};

export const updateUserApi = (userId, data) => {
  return axiosClient.post(`${baseURLAdminUser}/updateInfo/${userId}`, data);
};
