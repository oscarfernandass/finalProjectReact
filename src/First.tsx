
import './Fi.css';
import { AppBar, Toolbar, Stack, Button } from '@mui/material';
import { Search, MapPinned } from 'lucide-react';
import { useEffect,useContext} from 'react';
import { useLocation } from 'react-router-dom';
import {toast,Toaster} from 'react-hot-toast';
import image1 from './chennai.jpeg'
import image2 from './coimbatore.jpeg'
import image3 from './Madurai.jpg'
import image4 from './thirunelveli.webp'
import image5 from './Tiruchy.jpeg'
import image6 from './thanjavur.webp'
import Marquee from 'react-fast-marquee';
import { useNavigate } from 'react-router';
import UserContext from './UserContext';

const First = () => {
    const navigate=useNavigate();
    const location = useLocation();
    const email = new URLSearchParams(location.search).get('em');
    const userContext = useContext(UserContext);
    function press(){
        navigate(`/main?email=${email}`);
    }

    useEffect(() => {
        toast.success(`Logged In!`);
    })
    return (
        <>
            <div className='out'>
                <AppBar style={{ backgroundColor: 'black', zIndex: '2' }}>
                    <Toolbar>
                        <h1 style={{ fontFamily: 'Okra, Helvetica, sans-serif' }}>FEAST FINDER</h1>

                        <Stack direction={'row'} flexGrow={1} justifyContent="flex-end">
                            <Button size='medium' color='inherit'>ABOUT</Button>
                            <Button size='medium' color='inherit'>CONTACT US</Button>
                        </Stack>
                    </Toolbar>
                </AppBar>
               
                <div className='te'>
                    <h1 style={{ fontFamily: 'Okra, Helvetica, sans-serif', fontSize: '50px', marginLeft: '20px' }}>HOTSPOTS</h1>
                </div>
                <div className='in'>

                    <button>
                        <div className='cit' onClick={press} style={{ backgroundImage: `url(${image1})` }}
                        > <div className='osc'>                 <h2  className='pp' style={{fontSize:'40px'}}>CHENNAI</h2></div>

                        </div></button>

                    <button><div className='cit' onClick={press} style={{ backgroundImage: `url(${image2})` }}><div className='osc'>
                        <h2 className='pp' style={{fontSize:'40px'}}>COIMBATORE</h2></div>
                    </div></button>
                    <button><div className='cit' onClick={press} style={{ backgroundImage: `url(${image3})` }}><div className='osc'>
                        <h2 className='pp' style={{fontSize:'40px'}}>MADURAI</h2></div>
                    </div></button>
                </div>
                <div className='kj'>
                    <button>
                        <div className='cit' onClick={press} style={{ backgroundImage: `url(${image4})` }}><div className='osc'>
                            <h2 className='pp' style={{fontSize:'40px'}}>TIRUNELVELI</h2></div>
                        </div></button>
                    <button>
                        <div className='cit' onClick={press} style={{ backgroundImage: `url(${image5})` }}><div className='osc'>
                            <h2 className='pp' style={{fontSize:'40px'}}>TRICHY</h2></div>
                        </div></button>
                    <button>
                        <div className='cit' onClick={press} style={{ backgroundImage: `url(${image6})` }}><div className='osc'>
                            <h2 className='pp' style={{fontSize:'40px'}}>TANJORE</h2></div>
                        </div></button>

                </div>
                <div className='ma'>
                <Marquee><b>
  LIMITED OFFER : USE CODE FF100 FOR $3.45 DISCOUNT!!</b>
</Marquee></div>
                
            </div>
            <Toaster
  position="top-right"
  reverseOrder={false}
/>
        </>
    );
}
export default First;