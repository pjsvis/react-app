import * as React from 'react';
import {
    Button,
    Col,
    Collapse,
    Container,
    Jumbotron,
    Nav,
    Navbar,
    NavbarBrand,
    NavbarToggler,
    NavItem,
    NavLink,
    Row
} from 'reactstrap';
import logo from '../logo.svg';

export interface IHeaderNavState {
    isOpen: boolean;
}

class HeaderNav extends React.Component<any, IHeaderNavState> {
    constructor(props: any) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }
    public toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    public render() {
        return (
            <div>
            <Navbar color="dark" className="navbar-dark navbar-exand-sm" light={true} expand="md">
              <NavbarBrand> <img src={logo} className="App-logo" alt="logo" /></NavbarBrand>
                    <NavbarBrand href="/">reactstrap</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar={true}>
                        <Nav className="ml-auto" navbar={true}>
                            <NavItem>
                                <NavLink href="/components/">Components</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="https://github.com/reactstrap/reactstrap">
                                    Github
                                </NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
                <Jumbotron>
                    <Container>
                        <Row>
                            <Col>
                                <h1>Welcome to React</h1>
                                <p>
                                    <Button
                                        tag="a"
                                        color="success"
                                        size="large"
                                        href="http://reactstrap.github.io"
                                        target="_blank"
                                    >
                                        View Reactstrap Docs
                                    </Button>
                                </p>
                            </Col>
                        </Row>
                    </Container>
                </Jumbotron>
            </div>
        );
    }
}

export default HeaderNav;
