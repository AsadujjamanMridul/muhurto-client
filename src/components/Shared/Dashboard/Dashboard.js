import React, { useContext, useEffect, useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import Book from '../../UserDashboard/Book/Book';
import BookingList from '../../UserDashboard/BookingList/BookingList';
import Review from '../../UserDashboard/Review/Review';
import './Dashboard.css'

import { UserContext, ServiceContext } from '../../../App'
import OrderList from '../../AdminDashboard/OrderList/OrderList';
import AddService from '../../AdminDashboard/AddService/AddService';
import MakeAdmin from '../../AdminDashboard/MakeAdmin/MakeAdmin';
import ManageServices from '../../AdminDashboard/ManageServices/ManageServices';
import WelcomeScreen from '../WelcomeScreen/WelcomeScreen';


const Dashboard = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [selectedService, setSelectedService] = useContext(ServiceContext);
    const [role, setRole] = useState('')
    
    
    let defaultDisplay = <WelcomeScreen/>;

    useEffect(()=> {
        fetch(`http://localhost:5000/isAdmin?email=${loggedInUser.email}`)
        .then(res => res.json())
        .then(data => {
            if(data){
                setRole('admin');
                defaultDisplay = <OrderList/>;
                setDisplayToggle(defaultDisplay);
            }
            else{
                setRole('user');
                defaultDisplay = <Book/>;
                setDisplayToggle(defaultDisplay)
            }
        })
    }, [])

    const [displayToogle, setDisplayToggle] = useState(defaultDisplay);

    const handleNavigation = (to) =>{
        switch(to){
            case 'Book': setDisplayToggle(<Book/>); break;
            case 'Booking List' : setDisplayToggle(<BookingList/>); break;
            case 'Review' : setDisplayToggle(<Review/>); break;
            case 'Order List' : setDisplayToggle(<OrderList/>); break;
            case 'Add Service' : setDisplayToggle(<AddService/>); break;
            case 'Make Admin' : setDisplayToggle(<MakeAdmin/>); break;
            case 'Manage Services' : setDisplayToggle(<ManageServices/>); break;
            default : setDisplayToggle(<WelcomeScreen/>); break;
        }
    }


    return (
        <div className='row w-100 d-flex m-0 p-0'>
            <Sidebar role={role} handleNavigation={handleNavigation}/>
            {
                displayToogle
            }
        </div>
    );
};

export default Dashboard;