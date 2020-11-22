import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import {DISHES} from '../shared/Dishes.js';
import Header from './Header.js';
import HomeComponent from './HomeComponent';
import MenuComponent from './MenuComponent';
import About from './About'
import ContactComponent from './ContactComponent';
import RenderSelected from './RenderSelected';
import Footer from './Footer';
import {COMMENTS} from '../shared/Comments.js';
import {LEADERS} from '../shared/Leaders.js';
import {PROMOTIONS} from '../shared/Promotions.js';
import {Switch, Route, Redirect, Link} from 'react-router-dom'
class MainComponent extends Component {
    constructor(props) {
        super(props);
        this.state= {
            dishes: DISHES,
            comments: COMMENTS,
            promotions : PROMOTIONS,
            leaders: LEADERS
        }
        
    }

    
    
    render() {
        const Post = ({match}) =>{
            return (
                <RenderSelected dish = {this.state.dishes.filter(dish => dish.id === parseInt(match.params.id, 10))[0]}
                comment= {this.state.comments.filter(com => com.dishId === parseInt(match.params.id, 10))} />
                
            );
        
        }
        return (
            <div> 
                <Header/>
                    <Switch>
                        <Route path='/Home' 
                        component={() => <HomeComponent dish= {this.state.dishes.filter(dish => dish.featured)[0]}
                        promotion= {this.state.promotions.filter(promotion => promotion.featured)[0]}
                        leader= {this.state.leaders.filter(leader => leader.featured)[0]}
                        />} />
                        <Route exact path='/Menu' component={() => <MenuComponent dishes = {this.state.dishes}/>} />
                        <Route path ='/aboutus' component={() => <About leaders= {this.state.leaders}/>} />
                        <Route path='/contactus' component= {ContactComponent} />
                        <Route path='/menu/:id' component= {Post}/>
                        <Redirect to='/Home'/>
                    </Switch>
                <Footer/>
            </div>
        );
    }
}

export default MainComponent;