import * as React from 'react';
import {
    Collapse,
    Nav,
    Navbar,
    NavbarBrand,
    NavbarToggler,
    NavItem,
    NavLink,
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
                    <NavbarBrand href="/">OS Reference App</NavbarBrand>
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
            </div>
        );
    }
}

export default HeaderNav;
