
import React, { Component } from "react";
import Card from "react-bootstrap/Card"
import CardColumns from "react-bootstrap/CardColumns"
import Button from "react-bootstrap/Button"
import CardDeck from "react-bootstrap/CardDeck"
import "./App.css"

class Home extends Component {
  render() {
    return (
      <div className="intro">
        <br />
        <h3>Magdalena Gorka • Krakow, Poland</h3>
        <br />
        <CardDeck>
      <Card className="card" style={{display:"inline-flex",marginLeft: '12rem',height: '18rem'}}>  
        <Card.Img variant="top" src="/images/image-card.jpg" alt="image card"/>
        <Card.Body>
          <Card.Title>Gallery</Card.Title>
          <Card.Text>Random images to test image optimization</Card.Text>
        </Card.Body>
        <Button variant="primary" href="/Gallery">Go to gallery</Button>
</Card>
<Card className="card" style={{display:"inline-flex",marginRight:'10rem',height: '18rem'}}>
        <Card.Img variant="top" src="images/videos-card.jpg" alt="video card"/>
        <Card.Body>
          <Card.Title>Videos</Card.Title>
          <Card.Text>Random videos to test image optimization</Card.Text>
        </Card.Body>
        <Button variant="primary" href="/Videos">Go to Videos</Button>
</Card>
</CardDeck>
   </div>
    );
  }
}

export default Home;