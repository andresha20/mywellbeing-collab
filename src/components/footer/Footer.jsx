import { useLocation, useNavigate } from 'react-router-dom';
import * as React from 'react';

const Footer = ({  }) => {

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
        <footer>
            
        </footer>
    </>
}

export default Footer;