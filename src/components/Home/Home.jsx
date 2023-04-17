import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
const Home = () => {

    const {user} = useContext(AuthContext);
    console.log(user);

    return (
        <div>
            <h2>This is home compo</h2> 
            {
                user && <span>{user.displayName}</span>
            }
        </div>
    );
};

export default Home;