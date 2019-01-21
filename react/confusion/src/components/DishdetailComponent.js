import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

class DishDetail extends Component {

    constructor(props) {
        super(props);

        this.state = {

        };
    }

    renderDish(dish) {
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

    renderFormatedDate(date) {
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

    renderComments(comments) {
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
                            {this.renderFormatedDate(comment.date)}
                        </div>
                    </div>
                </div>
            );
        });
    }

    render() {
        if (this.props.dish != null)
            return (
                <div className="row">
                    {this.renderDish(this.props.dish)}
                    <div className="col-12 col-md-5">
                        <h4>Comments</h4>
                        <div className="ul list-unstyled">
                            {this.renderComments(this.props.dish.comments)}
                        </div>
                    </div>
                </div>
            );
        else
            return (
                <div></div >
            );
    }

}

export default DishDetail;