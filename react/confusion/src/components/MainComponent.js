import React, { Component } from 'react';
import Menu from './MenuComponent';
import { DISHES } from '../shared/dishes';
import Header from './HeaderComponent'
import Footer from './FooterComponent';
import Home from './HomeComponent'
import DishDetail from './DishdetailComponent';
import {Switch,Route,Redirect} from 'react-router-dom';



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
            <div className="container">
                <Header/>
                {/* <Menu dishes={this.state.dishes}
                    onClick={(dishId) => this.onDishSelect(dishId)} /> */}
                {/* <DishDetail dish={this.state.selectedDish} /> */}
                <Switch>
                  <Route path="/home" component={HomePage}/>
                  <Route exact path="/menu" component={()=> <Menu dishes={this.state.dishes}/>} />
                  <Redirect to="/home" />
                </Switch>
                <Footer/>
            </div>
        </div>
    );
  }
}

export default Main;
