import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';



    function RenderDish(dish) {
        return (
            <div className="col-12 col-md-5 m-1">
                <Card>
                    <CardImg top src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            </div>
        );
    }

    function renderFormatedDate(date) {
        return (
            <div>
                {
                    new Intl.DateTimeFormat('en-US', {
                        year: 'numeric',
                        month: 'short',
                        day: '2-digit'
                    }).format(new Date(date))
                }
            </div>
        );
    }

function RenderComments(comments) {
    return comments.map((comment) => {
        return (
            <div className="li" key={comment.id}>
                <br />
                <div className="row">
                    <div className="col-12">
                        {comment.comment}
                    </div>
                </div>
                <br />
                <div className="row">
                    <div className="col-7">
                        -- {comment.author},
                    </div>
                    <div className="col-5">
                        {renderFormatedDate(comment.date)}
                    </div>
                </div>
            </div>
        );
    });
}


const  DishDetail = (props) => {

    if (props.dish != null)
        return (
            <div className="row">
                {RenderDish(props.dish)}
                <div className="col-12 col-md-5 m-2">
                    <h4>Comments</h4>
                    <div className="ul list-unstyled">
                        {RenderComments(props.dish.comments)}
                    </div>
                </div>
            </div>
        );
    else
        return (
            <div></div >
        );    
    
}


export default DishDetail;