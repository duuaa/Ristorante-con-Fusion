import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

class Details extends Component {

    renderComments(dish) {
        
        if (dish != null) {
            var commentlist=dish.comments;
            const com = commentlist.map((commente) => {
                return (
                    <div key={commente.id} >
                        <div className="row" >
                            <div className="container" >

                                <br /> {commente.comment}
                                <div className="container" >
                                    --{commente.author}--{new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(Date.parse(commente.date)))} < br />
                                </div>

                            </div>

                        </div>
                    </div>
                );
            });
            return (
                <div>
                    <h4> Comment </h4> {com}
                </div>);
        }
        else {
            return (<div> </div>
            );
        }
    }

    renderDish(dish) {
        if (dish != null) {
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

        } else {
            return (<div>
            </div>
            );
        }
    }

    render() {
        return (
            <div className="container">
                <div className="row" >
                    <div className="col-5 col-sm-5 col-12" > {this.renderDish(this.props.dish)}
                    </div>
                    <div className="col-5 col-sm-5 col-10" >
                        {this.renderComments(this.props.dish)}
                    </div>
                </div>
            </div>
        );
    }
}
export default Details;