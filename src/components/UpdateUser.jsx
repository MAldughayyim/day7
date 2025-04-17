import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { Modal, Button } from "react-bootstrap";

function UpdateUser() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [userData, setUserData] = useState({});
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await axios.get(`http://localhost:3000/users/${id}`);
      setUserData(response.data);
    };
    fetchUsers();
  }, [id]);

  async function handleUpdateUserSubmit(e) {
    e.preventDefault();
    await axios.put(`http://localhost:3000/users/${id}`, userData);
    setShowSuccessModal(true);

    setTimeout(() => {
      setShowSuccessModal(false);
      navigate("/user");
    }, 2000);
  }

  return (
    <div className="container mt-5 mx-auto" style={{ maxWidth: "600px" }}>
      <form onSubmit={handleUpdateUserSubmit}>
        <h1 className="mb-4">Update User</h1>

        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            value={userData.name || ""}
            onChange={(e) =>
              setUserData((prev) => ({ ...prev, name: e.target.value }))
            }
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            className="form-control bg-light text-muted"
            value={userData.email || ""}
            readOnly
            onChange={(e) =>
              setUserData((prev) => ({ ...prev, email: e.target.value }))
            }
          />
        </div>

        <Button type="submit" variant="primary" className="mt-3 w-100">
          Save Changes
        </Button>
      </form>

      <Modal
        show={showSuccessModal}
        onHide={() => setShowSuccessModal(false)}
        centered
        backdrop="static"
        keyboard={false}
      >
        <Modal.Body className="text-center fw-bold fs-5">
          User updated successfully!
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default UpdateUser;
