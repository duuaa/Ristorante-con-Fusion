import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';



function RenderComments({ comments }) {

    const com = comments.map((commente) => {
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
                <div className="row" >
                    <div className="col-5 col-sm-5 col-12" >
                        <RenderDish dish={props.dish} />
                    </div>
                    <div className="col-5 col-sm-5 col-10" >
                        <RenderComments comments={props.dish.comments} />
                    </div>
                </div>
            </div>
        );
    } else {
        return (<div>
        </div>
        );
    }
}

export default Details;