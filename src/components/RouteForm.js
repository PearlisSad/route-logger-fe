import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';

function RouteForm({ wallId, onAdd, onCancel }) {
  const [color, setColor] = useState('');
  const [grade, setGrade] = useState('');
  const [rating, setRating] = useState('');
  const [error, setError] = useState(null);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!color || !grade) {
      setError('Color and Grade are required');
      return;
    }

    setSubmitting(true);
    setError(null);

    // Build the route data
    const newRoute = {
      wall: parseInt(wallId, 10),
      color,
      grade,
      rating: rating ? parseInt(rating, 10) : null,
      date_set: new Date().toISOString().split('T')[0], // auto-set date_set to today (YYYY-MM-DD)
    };

    fetch('/api/route/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newRoute),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error('Failed to add route');
        }
        return res.json();
      })
      .then((data) => {
        onAdd(data); // pass newly added route to parent
        // Reset form
        setColor('');
        setGrade('');
        setRating('');
      })
      .catch(() => {
        setError('Failed to add route. Please try again.');
      })
      .finally(() => {
        setSubmitting(false);
      });
  };

  return (
    <Form onSubmit={handleSubmit} className="mb-3">
      {error && <Alert variant="danger">{error}</Alert>}

      <Form.Group controlId="color" className="mb-2">
        <Form.Label>Color</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter route color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
          required
        />
      </Form.Group>

      <Form.Group controlId="grade" className="mb-2">
        <Form.Label>Grade</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter route grade"
          value={grade}
          onChange={(e) => setGrade(e.target.value)}
          required
        />
      </Form.Group>

      <Form.Group controlId="rating" className="mb-3">
        <Form.Label>Rating (optional)</Form.Label>
        <Form.Control
          type="number"
          placeholder="Enter rating"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
          min={1}
          max={5}
        />
      </Form.Group>

      <Button variant="primary" type="submit" disabled={submitting}>
        {submitting ? 'Adding...' : 'Add Route'}
      </Button>{' '}
      <Button variant="secondary" onClick={onCancel} disabled={submitting}>
        Cancel
      </Button>
    </Form>
  );
}

export default RouteForm;
