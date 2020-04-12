import React from 'react';
import CardList from '../Components/CardList';
import SearchBox from '../Components/SearchBox';
import {robots} from '../Components/robots';
import Scroll from '../Components/Scroll';

class App extends React.Component {

    constructor(){
        super();
        this.state = {
            robots : robots,
            searchField:""
        }
    }

    onSearchChange = (event) =>{
        this.setState({
            searchField : event.target.value});
    }
       
    render(){
        const filteredRobot = this.state.robots.filter(robots => {
            return robots.name.toLowerCase().includes(this.state.searchField.toLowerCase())
        })
    return(
        <div className = "tc">
           <h1> Robo Friends</h1>
           <SearchBox searchChange = {this.onSearchChange}/>
           <Scroll>
            <CardList robots ={filteredRobot}/>
          </Scroll>
        </div>
    );
    }
}
export default App;