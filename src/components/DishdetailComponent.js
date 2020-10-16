import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';
import Menu from './menuComponent';

class Details extends Component {
    constructor(props) {
        super(props);
    }


    renderComments(commentlist) {
        if (commentlist != null) {
            const com = this.props.commentlist.map((commente) => {
                return (
                    <div key={commente.id}>
                        <div className="row">
                            <div className="container">

                            <br/> {commente.comment} 
                                <div className="container">
                                    --  {commente.author} -- {commente.date} <br/> 
                                </div>

                            </div>

                        </div>
                    </div>
                );
            });
            return (
                <div>
                    <h4> Comment </h4>
                    {com}
                </div>);
        } else {
            return (
                <div></div>
            );
        }
    }

    renderDish(dish) {

        if (dish != null) {
            return (
                <Card>
                    <CardImg width="100%" src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>
                            <b>{dish.name}</b>
                        </CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            );

        } else {
            return (
                <div></div>
            );
        }
    }

    render() {
        return (
            <div className="row">
                <div className="col-5 col-sm-5 col-12">
                    {this.renderDish(this.props.selected)}

                </div>
                <div className="col-5 col-sm-5 col-10">

                    {this.renderComments(this.props.commentlist)}
                </div>
            </div>
        );
    }
}
export default Details;