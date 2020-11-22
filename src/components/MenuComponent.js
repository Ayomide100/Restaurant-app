import React, {Component} from 'react';
import { Card, CardImg, CardImgOverlay,
    CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import {Link} from 'react-router-dom'

class MenuComponent extends Component{
    constructor(props){
        super(props)
        this.state= {
           selectedDish: null,
           commentId: [],
           commentName: [],
           commentDate: [],
           comments: [],
           commentRating: []
        }
    }
    
    

  

    render(){
        
        const menu =this.props.dishes.map((dish) => {
                
            return (
                    <div key={dish.id} className="col-12 col-md-5 m-1">
                        <div className="card" style={{width: "auto"}}>  
                            <Link to={"/menu/" + dish.id}>
                                <img className= "card-img-top" src={dish.image} alt={dish.image}/>    
                            <div className="card-img-overlay">
                                    <h3>{dish.name}</h3>     
                            </div>
                            </Link>
                        </div>
                    </div>
            );
                
        })


        return(
            <div className="container">
                <div className="row">
                    <div className='breadcrumb'>
                        <div className="breadcrumb-item ">
                            <Link to= '/home'>Home</Link>
                        </div>
                        <div className="breadcrumb-item active">
                            Menu
                        </div>
                    </div>
                    <div className="col-12">
                        <h3>Menu</h3>
                        <hr/>
                    </div>
                </div>
                <div className="row">
                    {menu}
                </div>
            </div>
          )
    }

  }
  
  
  
  
  export default MenuComponent;
 