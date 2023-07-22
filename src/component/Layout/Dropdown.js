import React, { useState } from 'react';
import ProfileImg from '../../assets/images/profile.png'
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'reactstrap';
import classes from './Header.module.css';
import { Link } from 'react-router-dom';
function Profile(props) {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const { direction, ...args } = props
    const toggle = () => setDropdownOpen((prevState) => !prevState);
    return (
        <div className="d-flex">
            <Dropdown className={`d-flex align-items-center ${classes.profile}`} isOpen={dropdownOpen} toggle={toggle} direction={'bottom'}>
                <DropdownToggle className='p-0 ms-2 bg-white' caret> <img src={ProfileImg} /></DropdownToggle>
                <DropdownMenu {...args}>
                    <DropdownItem header>Welcome</DropdownItem>
                    <DropdownItem><Link to="/">Home</Link></DropdownItem>
                    <DropdownItem text><Link to="/orders">Orders</Link></DropdownItem>
                    <DropdownItem text><Link to="/add-meals">Add Meals</Link></DropdownItem>
                    <DropdownItem disabled>Action (disabled)</DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>Logout</DropdownItem>
                </DropdownMenu>
            </Dropdown>
        </div>
    );
}

export default Profile;