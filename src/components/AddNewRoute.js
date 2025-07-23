import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import RouteForm from './RouteForm';

function AddNewRoute({ wallId, onAdd }) {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="mb-4">
      {!showForm && (
        <Button onClick={() => setShowForm(true)}>Add Route</Button>
      )}
      {showForm && (
        <RouteForm
          wallId={wallId}
          onAdd={(newRoute) => {
            onAdd(newRoute);
            setShowForm(false);
          }}
          onCancel={() => setShowForm(false)}
        />
      )}
    </div>
  );
}

export default AddNewRoute;
