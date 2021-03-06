import React, {Component} from 'react'
import Form from 'react-bootstrap/Form'
//import FormFile from 'react-bootstrap/FormFile'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'


class Signup extends Component {




    render() {
        return(
            <div className="Login-container">
                <h5>Welcome to Jmod Tracker!<br></br>This website is still in development and is not endorsed by or affiliated with Jagex.<br></br>
                    <br></br>DO NOT use your RuneScape password for this site.
                </h5>
                <Container>
                <Form>
                    <Form.Label> Signup</Form.Label>
                    <Form.Group >
                        <Form.Label>Username</Form.Label>
                        <Form.Control name="username" placeholder="Enter username" onChange={(e) => this.props.handleLoginChange(e)}/>
                        <Form.Text className="text-muted">
                        Do not use your RuneScape username/email.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control name="password" type="password" placeholder="Password" onChange={(e) => this.props.handleLoginChange(e)}/>
                        <Form.Text className="text-muted">
                        Do not use your RuneScape password.
                        </Form.Text>
                    </Form.Group>
                    <div className="buttons">
                    <Button variant="success" type="button" className="create" onClick={(e) => this.props.handleSignupSubmit(e)}>
                    </Button>
                    <Button variant="primary" type="button" className="signin" onClick={(e) => this.props.toggleLogin(e)}>
                    </Button>
                    </div>
                </Form>
                </Container>
                <p className="jmodList"> This website uses your browser's localStorage to store your username, token, the list of jmods you follow,
                    and compare changes based on the last time you visited the 'Feed' page. This website's backend is hosted on heroku.com and frontend on netlify.com
                    Jmod Tracker does not send any information to third party advertisers.<br></br>
                    For questions/concerns reach out to JmodTracker@altmails.com</p> 
            </div>
        )
    }
}

export default Signup