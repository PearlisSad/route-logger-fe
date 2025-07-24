import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Container, Row, Col, Card, Spinner, Alert, Button } from 'react-bootstrap';
import AddNewRoute from '../components/AddNewRoute';

function RouteList() {
  const { id } = useParams(); // wall ID from URL
  const [routes, setRoutes] = useState([]);
  const [wallName, setWallName] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch wall info and routes
  useEffect(() => {
    setLoading(true);
    Promise.all([
      fetch(`/api/walls/${id}/`).then((res) => {
        if (!res.ok) throw new Error('Failed to fetch wall');
        return res.json();
      }),
      fetch(`/api/route/?wall=${id}`).then((res) => {
        if (!res.ok) throw new Error('Failed to fetch routes');
        return res.json();
      }),
    ])
      .then(([wallData, routesData]) => {
        setWallName(wallData.name);
        setRoutes(routesData);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError('Could not load wall or routes');
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <Container className="mt-4 text-center">
        <Spinner animation="border" />
      </Container>
    );
  }

  if (error) {
    return (
      <Container className="mt-4">
        <Alert variant="danger">{error}</Alert>
      </Container>
    );
  }

  return (
    <Container className="mt-4">
      {/* Back to Walls button */}
      <div className="mb-3">
        <Link to="/">
          <Button variant="secondary">← Back to Walls</Button>
        </Link>
      </div>

      <h2 className="mb-4">Routes in {wallName}</h2>

      <AddNewRoute
        wallId={id}
        onAdd={(newRoute) => setRoutes((prevRoutes) => [...prevRoutes, newRoute])}
      />

      <Row className="mt-4">
        {routes.length > 0 ? (
          routes.map((route) => (
            <Col md={4} key={route.id} className="mb-3">
              <Card>
                <Card.Body>
                  <Card.Title>Color: {route.color}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    Grade: {route.grade}
                  </Card.Subtitle>
                  <Card.Text>Rating: {route.rating || 'N/A'}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))
        ) : (
          <Col>
            <Alert variant="info">No routes yet for this wall.</Alert>
          </Col>
        )}
      </Row>
    </Container>
  );
}

export default RouteList;
