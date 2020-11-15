import React, { useState, useEffect } from "react";
import { Row, Col, Button } from "react-bootstrap";
import Article from "../components/Article";
import data from "../data";

const HomeScreen = () => {
  const [articles, setArticles] = useState(
    data.articles.sort((a, b) => {
      return b.no_of_upVotes - a.no_of_upVotes;
    })
  );

  const sortByDate = () => {
    const sortedByDate = [...articles].sort((a, b) => {
      return Date.parse(b.published_date) - Date.parse(a.published_date);
    });

    setArticles(sortedByDate);
  };

  const sortByUpvotes = () => {
    const sortedByUpVotes = [...articles].sort((a, b) => {
      return b.no_of_upVotes - a.no_of_upVotes;
    });

    setArticles(sortedByUpVotes);
  };

  return (
    <>
      <h1>Latest articles</h1>
      <Row>
        <Col sm={12} md={6} lg={4} xl={2}>
          <Button variant="primary" onClick={sortByDate}>
            Most Recent
          </Button>
        </Col>
        <Col sm={12} md={6} lg={4} xl={2}>
          <Button variant="success" onClick={sortByUpvotes}>
            Most Upvoted
          </Button>
        </Col>
      </Row>
      <>
        <Row>
          {articles
            ? articles.map((article) => (
                <Col key={article.id} sm={12} md={6} lg={4} xl={3}>
                  <Article article={article} />
                </Col>
              ))
            : null}
        </Row>
      </>
    </>
  );
};

export default HomeScreen;
