import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const LoginForm = (props) => {

    return (
        <Form onSubmit={props.handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                    type="email"
                    placeholder="Enter email"
                    value={props.email}
                    onChange={props.handleEmailChange}
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                    type="password"
                    placeholder="Password"
                    value={props.password}
                    onChange={props.handlePasswordChange}
                />
            </Form.Group>
            <Button variant="success" type="submit">
                Submit
            </Button>
        </Form>
    );
};
export default LoginForm;