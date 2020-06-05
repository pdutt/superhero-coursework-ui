import React, {Component} from 'react';
import Modules from "./CurriculumData";
import './Curriculum.css';

class Curriculum extends Component {
    state = {
        modules: []
    }

    componentDidMount() {
        fetch('http://localhost:8080/home/curriculum/json')
            .then(res => res.json())
            .then((data) => {
                this.setState({ modules: data})
                console.log(this.state.modules)
        })
            .catch(console.log);
    }
    render() {
        return (
            <Modules modules={this.state.modules} />
        )
    }
}

export default Curriculum;

