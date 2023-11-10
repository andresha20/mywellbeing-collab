import { useLocation, useNavigate } from 'react-router-dom';
import * as React from 'react';

const Navigation = ({  }) => {

    const navigate = useNavigate();
    const location = useLocation();

    const redirectTo = (id) => {
        switch (id) {
            case 0:
                navigate(`/`)
                console.log('test 1')
                break;
            case 1:
                navigate(`/dashboard`)
                console.log('test 2')
                break;
            case 2:
                navigate(`/survey`)
                console.log('test 3')
                break;
            default:
                break;
        }
    }

    return <>
        <header>
            <img src="../../../public/Logo.PNG" alt="Logo" width={250} height={70}/>
        </header>
    </>
}

export default Navigation;