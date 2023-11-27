import { useLocation } from 'react-router-dom';
import './Main.css';
import { useState, useReducer } from 'react';
import { Autocomplete, TextField } from '@mui/material';
import '@mui/material/styles';
import Cartimage from './foods/cart.png';
import Biller from './Biller.js';
import Food from './foods/food.png';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import profile from './foods/profile.png';
import { useNavigate } from 'react-router-dom';
import { isVisible } from '@testing-library/user-event/dist/utils';
import dosaimage from './foods/dosa.jpg';
import biriyaniimage from './foods/biriyani.jpg';
import butterimage from './foods/butterChicken.jpg';
import chaatimage from './foods/chaat.jpg';
import chickenimage from './foods/chickenTikka.jpg';
import gulabimage from './foods/gulabJamun.jpg';
import palakimage from './foods/palakPaneer.jpg';
import paniimage from './foods/panipuri.jpg';
import pavimage from './foods/pavBhaji.jpg';
import samosaimage from './foods/samosa.jpg';
import vadaimage from './foods/vadapav.jpg';
import tandooriimage from './foods/tandooriChicken.jpg';
import Carter from './Carter.js';
// import { useLocation } from 'react-router-dom';

const Main: React.FC=()=>{

  const[carval,setcartval]=useState('Cart is Empty');
const[display,setdisplay]=useState('none');
const displaycart=()=>{
  setdisplay('inline');
  if(newquantities.length>0){
  setcartval('Place Order');
  }
}
const placeorder=()=>{
  if(newquantities.length>0){
    
  }
}
const foodImages = [
  dosaimage,
  biriyaniimage,
  butterimage,
  chaatimage,
  chickenimage,
  gulabimage,
  palakimage,
  paniimage,
  pavimage,
  samosaimage,
  tandooriimage,
  vadaimage,
];

const[qnt1,setquant1]=useState(0);
const[amt1,setamt1]=useState(10);
const[qnt2,setquant2]=useState(0);
const[amt2,setamt2]=useState(15);

  const[qnt3,setquant3]=useState(0);
  const[amt3,setamt3]=useState(20);
  
  const[qnt4,setquant4]=useState(0);
  const[amt4,setamt4]=useState(10);

  const[qnt5,setquant5]=useState(0);
  const[amt5,setamt5]=useState(10);
  
  const[qnt6,setquant6]=useState(0);
  const[amt6,setamt6]=useState(5);

  const[qnt7,setquant7]=useState(0);
  const[amt7,setamt7]=useState(25);
  
  const[qnt8,setquant8]=useState(0);
  const[amt8,setamt8]=useState(10);
  
  const[qnt9,setquant9]=useState(0);
  const[amt9,setamt9]=useState(15);
  
  const[qnt10,setquant10]=useState(0);
  const[amt10,setamt10]=useState(30);
  
  const[qnt11,setquant11]=useState(0);
  const[amt11,setamt11]=useState(20);
  
  const[qnt12,setquant12]=useState(0);
  const[amt12,setamt12]=useState(10);
  const quantities=[
    qnt1,
    qnt2,
    qnt3,
    qnt4,
    qnt5,
    qnt6,
    qnt7,
    qnt8,
    qnt9,
    qnt10,
    qnt11,
    qnt12,
  ];
  const amounts=[
    amt1,
    amt2,
    amt3,
    amt4,
    amt5,
    amt6,
    amt7,
    amt8,
    amt9,
    amt10,
    amt11,
    amt12,
  ]
  const newquantities=[];
  const newamounts=[];
  const newfoodImages=[];


  for (let i = 0; i < 12; i++) {
    if (quantities[i] !== 0) {
     
      newquantities.push(quantities[i]);
      newamounts.push(amounts[i]);
      newfoodImages.push(foodImages[i]);
    }
  }

  
 

  const change1 = (newQuant: number) => {
    setquant1(newQuant);
  };
  const change2 = (newQuant: number) => {
    setquant2(newQuant);
  };
  const change3 = (newQuant: number) => {
    setquant3(newQuant);
  };
  const change4 = (newQuant: number) => {
    setquant4(newQuant);
  };
  const change5 = (newQuant: number) => {
    setquant5(newQuant);
  };
  const change6 = (newQuant: number) => {
    setquant6(newQuant);
  };
  const change7 = (newQuant: number) => {
    setquant7(newQuant);
  };
  const change8 = (newQuant: number) => {
    setquant8(newQuant);
  };
  const change9 = (newQuant: number) => {
    setquant9(newQuant);
  };
  const change10 = (newQuant: number) => {
    setquant10(newQuant);
  };
  const change11 = (newQuant: number) => {
    setquant11(newQuant);
  };
  const change12 = (newQuant: number) => {
    setquant12(newQuant);
  };




  const [totalAmount, setTotalAmount] = useState(0);

  const handleTotalChange = (newTotal: number) => {
    setTotalAmount(newTotal);
  };
  
  



  const navigate=useNavigate();
  function handleChange(event: React.ChangeEvent<HTMLSelectElement>) {
    const selectedValue = event.target.value;
    if (selectedValue === 'logout') {
      navigate('/');
    }
    // Handle other options if needed
  }
  

  const foods=['dosa','biriyani','butter chicken','chaat','chicken tikka','gulab jamun','palak paneer','pani puri','pavBhaji','samosa','tandoori chicken','vadapav'];
  const [val, setVal] =useState<string | null>('');
  const[idosa,setidosa]=useState('inline');
  const[ibiriyani,setibiriyani]=useState('inline');
  const[ibutter,setibutter]=useState('inline');
  const[ichaat,setichaat]=useState('inline');
  const[ichicken,setichicken]=useState('inline');
  const[igulab,setigulab]=useState('inline');
  const[ipalak,setipalak]=useState('inline');
  const[ipani,setipani]=useState('inline');
  const[ipav,setipav]=useState('inline');
  const[isamosa,setisamosa]=useState('inline');
  const[itandoori,setitandoori]=useState('inline');
  const[ivada,setivada]=useState('inline');


  const location = useLocation();
  const email = new URLSearchParams(location.search).get('email');
  

  const showDosa = () => {
    toast.success('Dosa added to cart... 🦄', {
      containerId: "first",
      position: "bottom-left",
      autoClose: 1250,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "dark",
      });
  };
  const showBiriyani = () => {
    toast.success('Biriyani added to cart... 😊', {
      containerId: "first",
      position: "bottom-left",
      autoClose: 1250,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "dark",
      });
  };
  const showButter = () => {
    toast.success('Butter Chicken added to cart... 🌟', {
      containerId: "first",
      position: "bottom-left",
      autoClose: 1250,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "dark",
      });
  };
  const showChaat = () => {
    toast.success('Chaat added to cart... 🌺', {
      containerId: "first",
      position: "bottom-left",
      autoClose: 1250,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "dark",
      });
  };
  const showChicken = () => {
    toast.success('Chicken Tikka added to cart... 🎉', {
      containerId: "first",
      position: "bottom-left",
      autoClose: 1250,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "dark",
      });
  };
  const showGulab = () => {
    toast.success('Gulab Jamun added to cart... 🌈', {
      containerId: "first",
      position: "bottom-left",
      autoClose: 1250,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "dark",
      });
  };
  const showPalak = () => {
    toast.success('Palak Paneer added to cart... 🦄', {
      containerId: "first",
      position: "bottom-left",
      autoClose: 1250,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "dark",
      });
  };
  const showPani = () => {
    toast.success('Pani Puri added to cart... 🌍', {
      containerId: "first",
      position: "bottom-left",
      autoClose: 1250,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "dark",
      });
  };
  const showPav = () => {
    toast.success('Pav Bhaji added to cart... 🌞', {
      containerId: "first",
      position: "bottom-left",
      autoClose: 1250,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "dark",
      });
  };
  const showSamosa = () => {
    toast.success('Samosa added to cart... 🦋', {
      containerId: "first",
      position: "bottom-left",
      autoClose: 1250,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "dark",
      });
  };
  const showTandoori = () => {
    toast.success('Tandoori Chicken added to cart... 🍀', {
      containerId: "first",
      position: "bottom-left",
      autoClose: 1250,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "dark",
      });
  };
  const showVada = () => {
    toast.success('Vadapav added to cart... 🚀', {
      containerId: "first",
      position: "bottom-left",
      autoClose: 1250,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "light",
      });
  };

  const showDosa1 = () => {
    toast.error('Dosa removed from cart... 🦄', {
      containerId: "second",
      position: "bottom-right",
      autoClose: 1250,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "dark",
      });
  };
  const showBiriyani1 = () => {
    toast.error('Biriyani removed from cart... 😊', {
      containerId: "second",
      position: "bottom-right",
      autoClose: 1250,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "dark",
      });
  };
  const showButter1 = () => {
    toast.error('Butter Chicken removed from cart... 🌟', {
      containerId: "second",
      position: "bottom-right",
      autoClose: 1250,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "dark",
      });
  };
  const showChaat1 = () => {
    toast.error('Chaat removed from cart... 🌺', {
      containerId: "second",
      position: "bottom-right",
      autoClose: 1250,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "dark",
      });
  };
  const showChicken1 = () => {
    toast.error('Chicken Tikka removed from cart... 🎉', {
      containerId: "second",
      position: "bottom-right",
      autoClose: 1250,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "dark",
      });
  };
  const showGulab1 = () => {
    toast.error('Gulab Jamun removed from cart... 🌈', {
      containerId: "second",
      position: "bottom-right",
      autoClose: 1250,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "dark",
      });
  };
  const showPalak1 = () => {
    toast.error('Palak Paneer removed from cart... 🦄', {
      containerId: "second",
      position: "bottom-right",
      autoClose: 1250,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "dark",
      });
  };
  const showPani1 = () => {
    toast.error('Pani Puri removed from cart... 🌍', {
      containerId: "second",
      position: "bottom-right",
      autoClose: 1250,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "dark",
      });
  };
  const showPav1 = () => {
    toast.error('Pav Bhaji removed from cart... 🌞', {
      containerId: "second",
      position: "bottom-right",
      autoClose: 1250,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "dark",
      });
  };
  const showSamosa1 = () => {
    toast.error('Samosa removed from cart... 🦋',{
      containerId: "second",
      position: "bottom-right",
      autoClose: 1250,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "dark",
      },);
  };
  const showTandoori1 = () => {
    toast.error('Tandoori Chicken removed from cart... 🍀', {
      containerId: "second",
      position: "bottom-right",
      autoClose: 1250,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "dark",
      });
  };
  const showVada1 = () => {
    toast.error('Vadapav removed from cart... 🚀', {
      containerId: "second",
      position: "bottom-right",
      autoClose: 1250,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "dark",
      });
  };

  const searcher=(val: string)=>{
    setVal(val);
    if(val===''){
      setidosa('inline');
      setibiriyani('inline');
      setibutter('inline');
      setichaat('inline');
      setichicken('inline');
      setigulab('inline');
      setipalak('inline');
      setipani('inline');
      setipav('inline');
      setisamosa('inline');
      setitandoori('inline');
      setivada('inline');
    }
    let i=0;
    for(i=0; i<13; i++){
      if(foods[i]===val){
        if(i===0){
          setidosa('inline');
          setibiriyani('none');
          setibutter('none');
          setichaat('none');
          setichicken('none');
          setigulab('none');
          setipalak('none');
          setipani('none');
          setipav('none');
          setisamosa('none');
          setitandoori('none');
          setivada('none');
        }
        else if(i===1){
          setidosa('none');
          setibiriyani('inline');
          setibutter('none');
          setichaat('none');
          setichicken('none');
          setigulab('none');
          setipalak('none');
          setipani('none');
          setipav('none');
          setisamosa('none');
          setitandoori('none');
          setivada('none');

        }
        else if(i===2){
          setidosa('none');
          setibiriyani('none');
          setibutter('inline');
          setichaat('none');
          setichicken('none');
          setigulab('none');
          setipalak('none');
          setipani('none');
          setipav('none');
          setisamosa('none');
          setitandoori('none');
          setivada('none');

        }
        else if(i===3){
          setidosa('none');
          setibiriyani('none');
          setibutter('none');
          setichaat('inline');
          setichicken('none');
          setigulab('none');
          setipalak('none');
          setipani('none');
          setipav('none');
          setisamosa('none');
          setitandoori('none');
          setivada('none');

        }
        else if(i===4){
          setidosa('none');
          setibiriyani('none');
          setibutter('none');
          setichaat('none');
          setichicken('inline');
          setigulab('none');
          setipalak('none');
          setipani('none');
          setipav('none');
          setisamosa('none');
          setitandoori('none');
          setivada('none');

        }
        else if(i===5){
          setidosa('none');
          setibiriyani('none');
          setibutter('none');
          setichaat('none');
          setichicken('none');
          setigulab('inline');
          setipalak('none');
          setipani('none');
          setipav('none');
          setisamosa('none');
          setitandoori('none');
          setivada('none');

        }
        else if(i===6){
          setidosa('none');
          setibiriyani('none');
          setibutter('none');
          setichaat('none');
          setichicken('none');
          setigulab('none');
          setipalak('inline');
          setipani('none');
          setipav('none');
          setisamosa('none');
          setitandoori('none');
          setivada('none');

        }
        else if(i===7){
          setidosa('none');
          setibiriyani('none');
          setibutter('none');
          setichaat('none');
          setichicken('none');
          setigulab('none');
          setipalak('none');
          setipani('inline');
          setipav('none');
          setisamosa('none');
          setitandoori('none');
          setivada('none');

        }
        else if(i===8){
          setidosa('none');
          setibiriyani('none');
          setibutter('none');
          setichaat('none');
          setichicken('none');
          setigulab('none');
          setipalak('inline');
          setipani('none');
          setipav('none');
          setisamosa('none');
          setitandoori('none');
          setivada('none');

        }
        else if(i===9){
          setidosa('none');
          setibiriyani('none');
          setibutter('none');
          setichaat('none');
          setichicken('none');
          setigulab('none');
          setipalak('none');
          setipani('none');
          setipav('none');
          setisamosa('inline');
          setitandoori('none');
          setivada('none');

        }
        else if(i===10){
          setidosa('none');
          setibiriyani('none');
          setibutter('none');
          setichaat('none');
          setichicken('none');
          setigulab('none');
          setipalak('none');
          setipani('none');
          setipav('none');
          setisamosa('none');
          setitandoori('inline');
          setivada('none');

        }
        else if(i===11){
          setidosa('none');
          setibiriyani('none');
          setibutter('none');
          setichaat('none');
          setichicken('none');
          setigulab('none');
          setipalak('none');
          setipani('none');
          setipav('none');
          setisamosa('none');
          setitandoori('none');
          setivada('inline');

        }
        
      }
    }



  }
  return (
    <>
    <div id="bar">
      <div id='imgt'>
        <img src={Food} className="icon"></img>
        <h1 className='head'>FEAST FINDER</h1>
      </div>
    <Autocomplete
          options={foods}
          disableCloseOnSelect
          renderInput={(params) => <TextField {...params} label="Search..." />}
          value={val}
          onInputChange={(_, newValue) => searcher(newValue) }
          onChange={(event, newValue) => setVal(newValue)}
          style={{
             width: 500,
             backgroundColor:'whitesmoke',
             border:'none',
             borderRadius:30,
            }}
             sx={{
              width: 300,
              '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                border: 'none',
              },
            }}
          freeSolo
        />
  
        <a href="#cartend">
        <div className="cartdiv" onClick={displaycart}>
          <img src={Cartimage} className="cartimage"></img>
        </div> </a>

        <a href='#abouthead' style={{textDecoration:'none', color:'black'}}>
        <div className="aboutdiv">
    <p className="about">About Us</p>
        </div>
        </a>
        <div className='email'>
          <img src={profile} className='profileimage' alt='Profile' />
      <select className="option" onChange={handleChange}>
        <option value="" className='opt' hidden selected>{email}</option>
        <option value="logout" className='opt'>Logout</option>
      </select>
        </div>
        
    </div>
    <ToastContainer
    containerId="first"
position="bottom-right"
autoClose={1000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
/>
<ToastContainer
containerId="second"
position="bottom-left"
autoClose={1000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="dark"
/>





    <div id="block"> 
        <div className='food' id="1" style={{display:idosa}}>
              <h1 className='title'>Dosa</h1>
              <Biller   onQuantityChange={change1}
  amt={amt1} qnty={qnt1} showToast1={showDosa} showToast2={showDosa1} className='billerdiv' ></Biller>
        </div>
        
        <div className='food' id="2" style={{display:ibiriyani}}>
              <h1 className='title'>Biriyani</h1>
              <Biller onQuantityChange={change2} amt={amt2} qnty={qnt2} showToast1={showBiriyani} showToast2={showBiriyani1} className='billerdiv'></Biller>

        </div>

        <div className='food' id="3" style={{display:ibutter}}>
              <h1 className='title'>Butter Chicken</h1>
              <Biller onQuantityChange={change3} amt={amt3} qnty={qnt3} showToast1={showButter} showToast2={showButter1} className='billerdiv'></Biller>

        </div>

        <div className='food' id="4" style={{display:ichaat}}>
              <h1 className='title'>Chaat</h1>
              <Biller onQuantityChange={change4} amt={amt4} qnty={qnt4} showToast1={showChaat} showToast2={showChaat1} className='billerdiv'></Biller>

        </div>

        <div className='food' id="5" style={{display:ichicken}}>
              <h1 className='title'>Chicken Tikka</h1>
              <Biller onQuantityChange={change5} amt={amt5} qnty={qnt5} showToast1={showChicken} showToast2={showChicken1} className='billerdiv'></Biller>

        </div>

        <div className='food' id="6" style={{display:igulab}}>
              <h1 className='title'>Gulab Jamun</h1>
              <Biller onQuantityChange={change6} amt={amt6}  qnty={qnt6} showToast1={showGulab} showToast2={showGulab1} className='billerdiv'></Biller>

        </div>

        <div className='food' id="7" style={{display:ipalak}}>
              <h1 className='title'>Palak Paneer</h1>
              <Biller onQuantityChange={change7} amt={amt7} qnty={qnt8} showToast1={showPalak} showToast2={showPalak1} className='billerdiv'></Biller>

        </div>

        <div className='food' id="8" style={{display:ipani}}>
              <h1 className='title'>Pani Puri</h1>
              <Biller onQuantityChange={change8} amt={amt8} qnty={qnt8} showToast1={showPani} showToast2={showPani1} className='billerdiv'></Biller>

        </div>

        <div className='food' id="9" style={{display:ipav}}>
              <h1 className='title'>Pav Bhaji</h1>
              <Biller onQuantityChange={change9} amt={amt9} qnty={qnt9} showToast1={showPav} showToast2={showPav1} className='billerdiv'></Biller>

        </div>

        <div className='food' id="10" style={{display:isamosa}}>
              <h1 className='title'>Samosa</h1>
              <Biller onQuantityChange={change10} amt={amt10} qnty={qnt10} showToast1={showSamosa} showToast2={showSamosa1} className='billerdiv'></Biller>

        </div>

        <div className='food' id="11" style={{ display: itandoori }}>
              <h1 className='title'>Tandoori</h1>
              <Biller onQuantityChange={change11} amt={amt11} qnty={qnt11} showToast1={showTandoori} showToast2={showTandoori1} className='billerdiv'></Biller>

        </div>

        <div className='food' id="12" style={{display:ivada}}>
              <h1 className='title'>Vadapav</h1>
              <Biller onQuantityChange={change12} amt={amt12} qnty={qnt12} showToast1={showVada} showToast2={showVada1} className='billerdiv'></Biller>

        </div>

    </div>
        <div id="cartend"></div>
        <br></br>
    <hr className='hrline' ></hr>
    <div id="cart" style={{display:display}}>
    <div><h1 style={{textAlign:'center', marginTop:'2%'}} className="total">Final Bill Amount: <span style={{backgroundColor:'rgb(27, 255, 27)'}}>${totalAmount}</span></h1></div>
    <div><Carter quantities={newquantities} amounts={newamounts} foodImages={newfoodImages} onTotalChange={handleTotalChange}/></div>
    <div><input type="button" value={carval} className="place" onClick={placeorder}></input></div>
    <hr className='hrline' ></hr>
    </div>

<div id="abouthead">

    <div id="about">
      <div >
      <h1 style={{marginTop:'80px'}} >About Us</h1>

      </div>
      <div id="imageroll">
        <div className='aboutimage1'>
          <h2>Love</h2>
        </div>

        <div className='mainimage'>
          <h2>Food</h2>
          
        </div>

        <div className='aboutimage2'>
          <h2>ForeEver</h2>
          
        </div>

      </div>
      <div id="para">
        <p>
          
Welcome to Foody, where your culinary cravings meet convenience! At Foody, we take pride in offering you a delectable array of dishes to elevate your dining experience. Our mission is simple: to make ordering food a breeze while ensuring that each bite is a celebration of taste. Whether you're yearning for the robust spices of global cuisines, the comforting familiarity of home-cooked meals, or the innovation of contemporary culinary delights, Foody has something for every palate. We are committed to delivering not just meals but memorable dining experiences to your doorstep. Join us on a gastronomic journey where the love for good food meets the ease of online ordering. Foody believes in the joy of sharing meals with loved ones, and we are here to facilitate those connections. Embrace the world of flavors with Foody – where every order is a step toward a more delightful dining adventure. Welcome to Foody, where good food is just a click away!
        </p>
      </div>
</div>
    </div>

          </>
  )
}
export default Main;
