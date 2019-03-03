import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './MenuComponent';
import { DISHES } from '../shared/dishes';
import DishDetail from './DishdetailComponent';

class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
      dishes : DISHES,
      selectedDish : null
    };
  }

  onDishSelect(dishId) {
    this.setState({ selectedDish : this.state.dishes.filter( dish => dish.id === dishId)[0]});
  }

  render() {
    return (
        <div>
            <Navbar dark color="primary">
            <div className="container">
                <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
            </div>
            </Navbar>
            <div className="container">
                <Menu dishes={this.state.dishes}
                    onClick={(dishId) => this.onDishSelect(dishId)} />
                <DishDetail dish={this.state.selectedDish} />
            </div>
        </div>
    );
  }
}

export default Main;
