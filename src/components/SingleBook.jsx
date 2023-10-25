import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Component } from "react";

class SingleBook extends Component {
   state = {
      selected: false,
   };

   render() {
      return (
         <Card className="h-100" border={this.state.selected ? "danger" : ""}>
            <Card.Img
               onClick={() => {
                  this.setState({ selected: !this.state.selected });
               }}
               variant="top"
               className="h-75"
               src={this.props.currentBook.img}
            />
            <Card.Body>
               <Card.Title>{this.props.currentBook.title}</Card.Title>
               <Card.Text>Price: $ {this.props.currentBook.price}</Card.Text>
               <Button variant="primary">Order</Button>
            </Card.Body>
         </Card>
      );
   }
}

export default SingleBook;
