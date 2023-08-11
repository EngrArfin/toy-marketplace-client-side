import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Providers/AuthProviders';
import { data } from 'autoprefixer';

const Booking = () => {
    const {user} = useContext(AuthContext);
    const [booking, setBooking] = useState([]);

    const url  = `http://localhost:5000/booking?email=${user.email}`;
    useEffect(() => {
        fetch(url)
        .then(res => res.json())
        .then(data => console.log(data))
    }, [])

    return (
        <div>
            
        </div>
    );
};

export default Booking;