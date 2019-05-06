import React, {Component} from 'react';
import Navbar from './MyAppBar';
import FoodCard from "./FoodCard";
import SimpleMap from "./SimpleMap";

class App extends Component {
    constructor(){
        super();
        this.state = {
            foods : [
                {
                    title : 'Fried rice with Onion',
                    date : '29 January 2019',
                    desc : 'Lorem i[sum sit dolor amet'
                },
                {
                    title : 'Fried rice without Onion',
                    date : '29 January 2019',
                    desc : 'Lorem i[sum sit dolor amet'
                }
            ]
        }
    }
    render() {
        return (
            <div>
                <Navbar/>
                <SimpleMap/>
                <br/>
                {this.state.foods.map((data)=>{
                    return(
                        <div>
                            <FoodCard title={data.title} date={data.date} description={data.desc}/>
                            <br/>
                        </div>
                    )
                })}
            </div>

        );
    }
}

export default App;
