import React, { Component } from 'react';
import { Navbar, Nav} from 'react-bootstrap';
import '../components/css/navbar.css';

class navbar extends Component {

    // state={  
    //     clickeditem: '',
    //     classNameActive: '',
    //     classNameNotActive: ''
    //  };

    // toggleClass = (event) => {
    //     // const currentState = this.state.active;
    //     // this.setState({ active: !currentState });
    //     this.setState({clickeditem: event.target.text});
    //     console.log(typeof(this.state.clickeditem));
    //     console.log(typeof(this.state.clickeditem));
    //     if(this.state.clickeditem === event.target.text){
    //         this.setState({classNameActive: 'active'});
    //     }
    //     else{
    //         this.setState({classNameNotActive: ''});
    //     }

    //     };

    render() {
        
        return (
            <React.Fragment>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#">Home</Nav.Link>
                        <Nav.Link href="#">About</Nav.Link>
                        <Nav.Link href="#">Featured Recipes</Nav.Link>
                        <Nav.Link href="#">Recipe Categories</Nav.Link>
                        <Nav.Link href="#">Videos</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Navbar>
            
        </React.Fragment>
        )
    };
}

export default navbar;
