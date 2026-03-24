import React from 'react';
import { Card } from 'react-bootstrap';

function ServiceCard({ icon, title, description }) {
  return (
    <Card className="service-card h-100 border-0">
      <Card.Body className="text-center p-4">
        <div className="service-icon mb-4">
          <i className={`${icon} fa-3x`} style={{ color: '#007bff' }}></i>
        </div>
        <Card.Title className="fw-bold fs-5 mb-3">
          {title}
        </Card.Title>
        <Card.Text className="text-muted">
          {description}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default ServiceCard;
