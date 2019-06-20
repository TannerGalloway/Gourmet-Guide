import React, { Component } from 'react'
import { InputGroup, FormControl, Button, Row, Col } from 'react-bootstrap'
import './css/header.css';
 class header extends Component {
     state={
        query: ''
     };

    render() {

        return (
            <div className="heading">
                    <Row>
                        <Col><h1>Food &amp; Recipes</h1></Col>
                        <Col xs={6}><InputGroup className="mb-3">
                        <FormControl onChange = {this.onChange} value={this.state.query}
                            placeholder='Search Recipes from around the world'
                        />
                        <InputGroup.Append onClick={this.onSubmit}>
                            <Button type='submit' variant='secondary'><i className="fas fa-search"></i></Button>
                        </InputGroup.Append>
                    </InputGroup></Col>
                    </Row>
            </div>
        )
    }

    onChange = (event) =>{
        this.setState({query: event.target.value});
    };

    onSubmit = (event) =>{
        event.preventDefault();
        this.setState({query: ''});
    };
}

export default header;
