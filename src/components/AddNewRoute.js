// src/components/AddNewRoute.js
import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import RouteForm from './RouteForm';

function AddNewRoute({ wallId, onAdd }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="success" onClick={handleShow}>
        Add Route
      </Button>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Add New Route</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <RouteForm
            wallId={wallId}
            onAdd={(newRoute) => {
              onAdd(newRoute);
              handleClose(); // close modal after submit
            }}
          />
        </Modal.Body>
      </Modal>
    </>
  );
}

export default AddNewRoute;
