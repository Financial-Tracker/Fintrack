import _ from "lodash";
import React, { Component } from "react";
import { render } from "react-dom";
import {connect} from 'react-redux'
import {
Container,
Icon,
Image,
Menu,
Sidebar,
Responsive
} from "semantic-ui-react";
import { HashRouter, Route, Switch, Link } from "react-router-dom";
import {getDataFromFireStore} from '../../Store/plaidContainer'

import logo from '../../pictures/fintracklogo.png'

const NavBarMobile = ({
children,
leftItems,
onPusherClick,
onToggle,
rightItems,
visible
}) => (
<Sidebar.Pushable>
    <Sidebar
    as={Menu}
    animation="overlay"
    icon="labeled"
    inverted
    items={leftItems}
    vertical
    width='thin'
    visible={visible}
    > 
    {
        leftItems.map((el,index)=>{
            return (
                <Menu.Item as='a' onClick={()=> console.log(el.content)} key={index}>
                {el.content}
                </Menu.Item>
            )
        })
    }


    </Sidebar>
    <Sidebar.Pusher
    dimmed={visible}
    onClick={onPusherClick}
    style={{ minHeight: "100vh" }}
    >
    <Menu fixed="top" inverted>
        <Menu.Item>
        <Image size="mini" src={logo} />
        </Menu.Item>
        <Menu.Item onClick={onToggle}>
        <Icon name="sidebar" />
        </Menu.Item>
        <Menu.Menu position="right">
        
        {_.map(rightItems, item => <Menu.Item {...item} onClick={() => console.log('right')} /> )}
        </Menu.Menu>
    </Menu>
    {children}
    </Sidebar.Pusher>
</Sidebar.Pushable>
);

const NavBarDesktop = ({ leftItems, rightItems }) => (
<Menu fixed="top" inverted>
    <Menu.Item>
    <Image size="mini" src={logo} />
    </Menu.Item>
    {_.map(leftItems, (item) => <Menu.Item {...item} onClick={() => console.log('left')}/>)}


    <Menu.Menu position="right">
    {_.map(rightItems, item => <Menu.Item {...item} onClick={() => console.log('right')}/>)}
    </Menu.Menu>
</Menu>
);

const NavBarChildren = ({ children }) => (
<Container style={{ marginTop: "5em" }}>{children}</Container>
);

class NavBar extends Component {
state = {
    visible: false
};

handlePusher = () => {
    const { visible } = this.state;
    if (visible) this.setState({ visible: false });
};

handleToggle = () => this.setState({ visible: !this.state.visible });

render() {
    const { children, leftItems, rightItems } = this.props;
    const { visible } = this.state;

    return (
    <div>
        <Responsive {...Responsive.onlyMobile}>
        <NavBarMobile
            leftItems={leftItems}
            onPusherClick={this.handlePusher}
            onToggle={this.handleToggle}
            rightItems={rightItems}
            visible={visible}
        >
            <NavBarChildren>{children}</NavBarChildren>
        </NavBarMobile>
        </Responsive>
        <Responsive minWidth={Responsive.onlyTablet.minWidth}>
        <NavBarDesktop leftItems={leftItems} rightItems={rightItems} />
        <NavBarChildren>{children}</NavBarChildren>
        </Responsive>
    </div>
    );
}
}





class Nav extends Component {
    constructor(){
        super()
        this.state = {
            isLogedInLeftItems : [
                { as: "a", content: "Bank Information", key: "bankinfo" },
                { as: "a", content: "All Transactions", key: "alltransactions" },
            ],
            isLogedInRightItems : [ { as: "a", content: "Log out", key: "logout" },
            { as: "a", content: "User", key: "User" },
            ],
            isLogedOutRightItems : [
                { as: "a", content: "Login", key: "login" },
                { as: "a", content: "Register", key: "register" },
                ],
            isLogOutLeftItems : [
                { as: "a", content: "Home", key: "home" },
                { as: "a", content: "About us", key: "Aboutus" },
                ] 
        }
    }

    componentDidMount(){
        this.props.getFireStore()
    }
    render() {
        const log = this.props.plaidObj['email'] ? true : false 
        return (
            <div>
                {
                    log ? <NavBar leftItems={this.state.isLogedInLeftItems} rightItems={this.state.isLogedInRightItems} /> 
                    :  <NavBar leftItems={this.state.isLogOutLeftItems} rightItems={this.state.isLogedOutRightItems} /> 
                }
                
            </div>
        )
    }
    }


const mapState =(state)=>{
    return{
        plaidObj: state.plaidContainer
    }
}
const mapDispatch=(dispatch)=>{
    return{
        getFireStore: ()=>dispatch(getDataFromFireStore())
    }
}


export default connect(mapState, mapDispatch)(Nav)