import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
import { Container, Row, Col, Card, Button, Modal } from "react-bootstrap";

function UsersList() {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [userToDelete, setUserToDelete] = useState(null);

  const fetchUsers = async () => {
    try {
      const response = await axios.get("http://localhost:3000/users");
      setUsers(response.data);
    } catch (err) {
      console.error("error for get users   ", err);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleDeleteClick = (userId) => {
    setUserToDelete(userId);
    setShowConfirmModal(true);
  };

  const confirmDelete = async () => {
    try {
      await axios.delete(`http://localhost:3000/users/${userToDelete}`);
      setShowConfirmModal(false);
      setShowSuccessModal(true);
      fetchUsers();
    } catch (err) {
      console.error("خطأ في الحذف", err);
    }
  };

  const handleUpdateUser = (id) => {
    navigate(`/user/update/${id}`);
  };

  const handleAddUserClick = () => {
    navigate("/user/add");
  };

  return (
    <Container className="mt-5 text-center">
      <Row className="mb-4">
        <Col>
          <Button variant="primary" onClick={handleAddUserClick}>
            + Add User
          </Button>
        </Col>
      </Row>

      <Row>
        {users.map((user) => (
          <Col key={user.id} md={4} className="mb-4">
            <Card>
              <Card.Body>
                <Card.Title>{user.name}</Card.Title>
                <Card.Text>Email: {user.email}</Card.Text>
                <div className="d-flex justify-content-between">
                  <Button
                    variant="danger"
                    onClick={() => handleDeleteClick(user.id)}
                  >
                    Delete
                  </Button>
                  <Button
                    variant="secondary"
                    onClick={() => handleUpdateUser(user.id)}
                  >
                    Edit
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      <Modal
        show={showConfirmModal}
        onHide={() => setShowConfirmModal(false)}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title> Validation message delete user</Modal.Title>
        </Modal.Header>
        <Modal.Body> Are you sure to delete this user account? </Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={() => setShowConfirmModal(false)}
          >
            Cancel
          </Button>
          <Button variant="danger" onClick={confirmDelete}>
            Yes, Delete
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal
        show={showSuccessModal}
        onHide={() => setShowSuccessModal(false)}
        centered
      >
        <Modal.Body className="text-center">
           successfully Delete User !
        </Modal.Body>
      </Modal>
    </Container>
  );
}

export default UsersList;
