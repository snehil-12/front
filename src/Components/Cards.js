import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import { Button } from "react-bootstrap";
import { dataAddedToCards } from "../redux/AsyncAction";
import { connect } from "react-redux";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class Cards extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.dataAddedToCards();
  }
  render() {
    return (
      <Row xs={1} md={4} className="g-4">
        {this.props.cardData.map((item, index) => (
          <Col key={index}>
            <Card key={index+1}>
              <Card.Img variant="top" src={item.picture.thumbnail} />
              <Card.Body>
                <Card.Title>{item.name.title+" "+item.name.first+" "+item.name.last}</Card.Title>
                <Card.Text>
                  {item.email}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    );
  }
}

const mapStateToProps = (state) => ({
  cardData: state.cardData,
});

const mapDispatchToProps = {
  dataAddedToCards,
};

export default connect(mapStateToProps, mapDispatchToProps)(Cards);
