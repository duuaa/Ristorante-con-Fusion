import React from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle} from 'reactstrap';
import { Loading } from './LoadingComponent';
import { BaseUrl } from '../shared/baseurl';

function RenderCard({item,isLoading,errMess}){ 
    if (isLoading){
        return(
            <div className="container">
                <div className="row">
                    <Loading />
                </div>
            </div>
        );
    }
    if(errMess){
        return(
            <div className="container">
                <div className="row">
                    <h4>{errMess}</h4>
                </div>
            </div>
        );
    }  else{
        console.log(errMess);
    return (item?<Card>
        <CardBody>
        <CardImg src={BaseUrl + item.image} alt={item.name} />
            <CardTitle>{item.name}</CardTitle>
            {item.designation ? <CardSubtitle>{item.designation}</CardSubtitle>: null}
            <CardText>{item.description}</CardText>
        </CardBody>
    </Card>:null);}
}


function Home(props) {
    return(
        <div className="container">
            <div className="row align-items-start">
                <div className="col-12 col-md m-1">
                    <RenderCard item={props.dish} isLoading={props.dishesLoading} errMess={props.dishesErrMess} />
                </div>
                <div className="col-12 col-md m-1">
                <RenderCard item={props.promotion} isLoading={props.promoLoading} errMess={props.promoErrMess} />
                </div>
                <div className="col-12 col-md m-1">
                    <RenderCard item={props.leader} />
                </div>
            </div>
        </div>
    );
}

export default Home;