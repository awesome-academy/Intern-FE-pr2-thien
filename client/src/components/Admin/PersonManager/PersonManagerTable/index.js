import PersonInfoForm from "components/User/PersonInfoForm";
import React, { useState } from "react";
import {
  Button,
  Table,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "reactstrap";

import moment from "moment";

const PersonManagerTable = ({ users, onDelete, onUpdate }) => {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  const [user, setUser] = useState(null);

  const handleViewDetailUser = (currentUser) => {
    if (currentUser) {
      setUser(() => ({ ...currentUser }));
      setModal(() => true);
    }
  };

  const handleUpdateUser = (userId) => (values) => {
    values.gender = values.gender === 2;
    onUpdate(values, userId);
    setModal(() => false);
  };

  return (
    <Table bordered>
      {user && (
        <Modal isOpen={modal} toggle={toggle}>
          <ModalHeader toggle={toggle}>Chi tiết người dùng</ModalHeader>
          <ModalBody>
            <PersonInfoForm
              initialValues={{
                username: user.username,
                email: user.email,
                fullname: user.fullname,
                phone: user.phone,
                address: user.address,
                birthday: moment(user.birthday).format("YYYY-MM-DD"),
                gender: !user.gender ? 1 : 2,
              }}
              onSubmit={handleUpdateUser(user._id)}
            />
          </ModalBody>
        </Modal>
      )}

      <thead>
        <tr>
          <th>#</th>
          <th>Username</th>
          <th>Họ tên</th>
          <th>Email</th>
          <th>Địa chỉ</th>
          <th>Chi tiết</th>
          <th>Xóa</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user, index) => (
          <tr>
            <th scope="row">{index + 1}</th>
            <td>{user.username}</td>
            <td>{user.fullname}</td>
            <td>{user.email}</td>
            <td>{user.address}</td>
            <td>
              <Button
                block
                color="success"
                onClick={() => handleViewDetailUser(user)}
              >
                Xem
              </Button>
            </td>
            <td>
              <Button block color="danger" onClick={() => onDelete(user._id)}>
                Xóa
              </Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default PersonManagerTable;
