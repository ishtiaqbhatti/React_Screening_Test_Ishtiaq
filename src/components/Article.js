import React from "react";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";

const Article = ({ article }) => {
  return (
    <Card className="my-3 p-3 rounded">
      <Link to={`/article/${article.id}`}>
        <Card.Img src={article.image} variant="top" />
      </Link>

      <Card.Body>
        <Link to={`/article/${article.id}`}>
          <Card.Title as="div">
            <strong>{article.title}</strong>
          </Card.Title>
        </Link>

        <Card.Text as="div">
          <span>
            <i className="fas fa-thumbs-up pr-2 pb-2"></i>
            {article.no_of_upVotes}
          </span>
        </Card.Text>

        <Card.Text as="p">{article.published_date}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Article;
