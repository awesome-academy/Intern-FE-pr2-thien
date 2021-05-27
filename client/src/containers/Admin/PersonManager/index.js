import PersonManagerTable from "components/Admin/PersonManager/PersonManagerTable";
import React, { useEffect, useState } from "react";

// Constaint
import {
  RESPONSE_STATUS_FAILED,
  RESPONSE_STATUS_SUCCESS,
} from "constants/index";

// Apis
import { getAllApi, deleteUserApi, updateUserApi } from "api/Admin/userApi";

const PersonManager = () => {
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchData();
  }, [page]);

  const fetchData = async () => {
    try {
      const { status, error, data } = await getAllApi(page);

      if (status === RESPONSE_STATUS_FAILED && error)
        throw new Error(error.message);

      if (status === RESPONSE_STATUS_SUCCESS && data) {
        const { users: currentUsers, total: currentTotal } = data;

        setUsers(() => currentUsers);

        if (total === 0) setTotal(() => currentTotal);
      }
    } catch (error) {
      return console.log(error);
    }
  };

  const handleDeleteUser = async (userId) => {
    try {
      const { status, error, data } = await deleteUserApi(userId);

      if (status === RESPONSE_STATUS_FAILED && error)
        throw new Error(error.message);

      if (status === RESPONSE_STATUS_SUCCESS && data) {
        const { message } = data;

        const index = users.findIndex((item) => item._id === userId);

        if (index >= 0) {
          setUsers(() => [
            ...users.slice(0, index).map((item) => ({ ...item })),
            ...users.slice(index + 1).map((item) => ({ ...item })),
          ]);
          setTotal(() => total - 1);
        }
      }
    } catch (error) {
      return console.log(error);
    }
  };

  const handleUpdateUser = async (values, userId) => {
    try {
      const { status, error, data } = await updateUserApi(userId, values);

      if (status === RESPONSE_STATUS_FAILED && error)
        throw new Error(error.message);

      if (status === RESPONSE_STATUS_SUCCESS && data) {
        const { user } = data;

        const index = users.findIndex((item) => item._id === userId);

        if (index >= 0) {
          setUsers(() => [
            ...users.slice(0, index).map((item) => ({ ...item })),
            { ...user },
            ...users.slice(index + 1).map((item) => ({ ...item })),
          ]);
        }
      }
    } catch (error) {
      return console.log(error);
    }
  };

  return (
    <div>
      <h1 className="h3 mb-4 text-gray-800">Quản lý người dùng</h1>

      {users.length > 0 && (
        <PersonManagerTable
          users={users}
          onDelete={handleDeleteUser}
          onUpdate={handleUpdateUser}
        />
      )}
    </div>
  );
};

export default PersonManager;
