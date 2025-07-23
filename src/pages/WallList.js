import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function WallList() {
  const [walls, setWalls] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/walls/')
      .then(res => res.json())
      .then(data => {
        setWalls(data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="text-center mt-5">
        <Spinner animation="border" />
        <p>Loading walls...</p>
      </div>
    );
  }

  return (
    <Container className="mt-4">
      <h2>Walls</h2>
      <Row>
        {walls.map(wall => (
          <Col md={4} key={wall.id} className="mb-4">
            <Card>
              <Card.Body>
                <Card.Title>{wall.name}</Card.Title>
                <Card.Text>Status: {wall.open ? 'Open' : 'Closed'}</Card.Text>
                <Link to={`/walls/${wall.id}`} className="btn btn-primary">View Routes</Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default WallList;
