import React,{Component} from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem, Button, Label, Col, Row, Modal, ModalHeader,ModalBody,Input,Form,FormGroup } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Control, LocalForm, Errors } from 'react-redux-form';




const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);
class CommentForm extends Component{
  constructor(props){
      super(props);
      this.state = {
          isModalOpen:false
      }
      this.toggleModal = this.toggleModal.bind(this);
  }

  toggleModal(){
      this.setState({
          isModalOpen: !this.state.isModalOpen
      });
  }
  handleSubmit(values){
      console.log("Current State is "+ JSON.stringify(values));
      alert("Current State is "+ JSON.stringify(values));
      //this prevents from going to another page
      //event.preventDefault();
  }
  render(){
      return(
          <div>
              <Button outline onClick={this.toggleModal}>
              <span className="fa fa-pencil fa-lg">Submit Comment</span>
              </Button>
                  <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                      <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
                      <ModalBody>
                          <div className="col-12">
                              <LocalForm onSubmit={(values) =>this.handleSubmit(values)}>

                              <Row className="form-group">
                                  <Label htmlFor="rating">Rating</Label>
                                  <Control.select model=".rating" name="rating"
                                      className="form-control">
                                      <option>1</option>
                                      <option>2</option>
                                      <option>3</option>
                                      <option>4</option>
                                      <option>5</option>
                                  </Control.select>
                              </Row>

                              <Row className="form-group">
                                  <Label htmlFor="author">Your Name</Label>
                                  <Control.text model=".author" id="author" name="author"  
                                  className="form-control"
                                  validators={{
                                      minLength: minLength(3), maxLength: maxLength(15)
                                  }}
                                   />
                                  <Errors
                                  className="text-danger"
                                  model=".author"
                                  show="touched"
                                  messages={{
                                      minLength: 'Must be greater than 2 characters',
                                      maxLength: 'Must be 15 characters or less'
                                  }}
                               />
                              </Row>

                              <Row className="form-group">
                                  <Label htmlFor="comment">Comment</Label>
                                  <Control.textarea model=".comment" id="comment" name="comment"
                                      rows="6"
                                      className="form-control"
                                  />
                              </Row>
                              <Button type="submit" value="submit" color="primary" onClick={this.toggleModal}>Submit</Button>
                          </LocalForm>
                          </div>
                          
                      </ModalBody>
                  </Modal>
          </div>
          
      );
  }
}


function RenderComments({ comments }) {

    const com = comments.map((commente) => {
        return (
            <div key={commente.id} >
                <div className="row" >
                    <div className="container" >

                        <br /> {commente.comment}
                        <div className="container">
                            --{commente.author}--{new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(Date.parse(commente.date)))} < br />
                        </div>
                    </div>
                </div>
            </div>

        );

    });
    return (
        <div>
            <div>
                <h4> Comment </h4> {com}
            </div>
            <div>
             <CommentForm/>
             </div></div>
    );
}

function RenderDish({ dish }) {

    return (<Card>
        <CardImg width="100%" src={dish.image} alt={dish.name} />
        <CardBody>
            <CardTitle>
                <b> {dish.name} </b>
            </CardTitle>
            <CardText> {dish.description} </CardText>
        </CardBody>
    </Card>
    );

}

const Details = (props) => {
    if (props.dish != null) {
        return (
            <div className="container">
                <div className="row">
                    <Breadcrumb>

                        <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{props.dish.name}</h3>
                        <hr />
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        <RenderDish dish={props.dish} />
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        <RenderComments comments={props.comments} />

                    </div>
                </div>
            </div>
        );
    }
    else {
        return (
            <div></div>
        );
    }
}

export default Details;