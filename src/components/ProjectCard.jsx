import React from 'react';
import { Card } from 'react-bootstrap';

function ProjectCard({ image, title, description }) {
  return (
    <Card className="project-card border-0">
      <div className="project-image-wrapper">
        <Card.Img variant="top" src={image} alt={title} className="project-image" />
        <div className="project-overlay">
          <div className="overlay-content">
            <h5 className="text-white fw-bold mb-3">{title}</h5>
            <button className="btn btn-light btn-sm">
              <i className="fas fa-arrow-right me-2"></i>View Project
            </button>
          </div>
        </div>
      </div>
      <Card.Body>
        <Card.Title className="fw-bold">{title}</Card.Title>
        <Card.Text className="text-muted small">{description}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default ProjectCard;
