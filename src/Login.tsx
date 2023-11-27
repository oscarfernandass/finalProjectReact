    import './Login.css';
    import { useState ,useEffect,createContext} from 'react';
    import { toast,Toaster } from 'react-hot-toast';
    import {useNavigate} from 'react-router-dom';
    import axios from 'axios';
    import { TextField, Toolbar, Button } from '@mui/material';
    const Login2 = () => {
        const [dat, setdat] = useState(false);
        const[em,setem]=useState('');
        const[pa,setpa]=useState('');
        const[fi,setfi]=useState('');
        const[la,setla]=useState('');
        const[em1,setem1]=useState('');
        const[pa1,setpa1]=useState('');
        const[da,setda]=useState('');
        const a=useNavigate();
        function def() {
            setdat(true);
        }
        function aa(e: React.FormEvent<HTMLFormElement>): void {
            e.preventDefault();
        axios.get(`http://localhost:3002/users?em1=${em}&pa1=${pa}`)
        .then(res=>
            {
                if(res.data.length>0)
                {
                    a(`/first?em=${em}`);
                }
                else
                {
                    toast.error("Incorrect userId or password", {
                        style: {
                        width: '400px', 
                        fontSize:'30px',
                        height:'100px',
                        },
                    });

                }
            })
            .catch(err=>{console.log(err)})
        }
        useEffect(() => {
            document.title = "Feast Finder";  
        }, []);
        function ab(f: React.FormEvent<HTMLFormElement>): void {
            f.preventDefault();
            axios.get(`http://localhost:3002/users?em1=${em1}`)
            .then(res=>
            {
                if(res.data.length>0)
                {
                    toast.error(`Email Id already exist`)
                }
                else{

                    axios.post(`http://localhost:3002/users`,{fi,la,em1,pa1,da})
                    .then(res=>{toast.success(`Account Created Successfully!`)})
                    .catch(err=>{console.log(err)})
                    setdat(false)
                }
            })
            .catch(err=>{console.log(err)})
        }
        return (
            <>
                <div className="h">
                    <div className="im">
                        <div className='oscar'>
                        <div>
                            <h1 className='one' style={{ fontSize: '70px' }}>WELCOME</h1></div>
                        <div>
                            <h2 className='one' style={{ fontSize: '50px' }}>To FEAST FINDER!!</h2>
                        </div>
                        <div>
                            <h3 className='one' style={{ fontSize: '40px' }}>
                                "Delight Your Palate, Anytime, Anywhere – Order Now!"</h3>
                        </div>
                        <div ><h4 className='one' style={{ fontSize: '30px' }}>{dat ? 'Please SignUp to Continue' : 'Please Login to Continue'}</h4><br />,<br /></div>
                            <h4 className={dat ? "hi" : ""} style={{ fontSize: '30px' }}>If you do not have a account please <Button onClick={def} color='warning' size='medium'>click here</Button> to Sign Up</h4></div>
                    </div>
                    <div className='lo'>

                        <div className={dat?"a2":"h1"}>
                            <h1 style={{ textAlign: 'center', color: "white", fontSize: '50px' }}><i>LOGIN</i></h1>
                            <div className="for">
                                <form style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }} onSubmit={aa}>
                                    <div style={{ marginBottom: '20px' }}></div>
                                    <Toolbar>
                                        <TextField label='Email Id' variant='filled' type="email" size='medium' className='t1' color="success" style={{ backgroundColor: 'white', borderRadius: '9px',marginRight:'0px'}} required value={em} onChange={(e)=>{setem(e.target.value)}}/>
                                    </Toolbar>   <div style={{ marginBottom: '40px' }}></div>
                                    <Toolbar>
                                        <TextField label='Password' type="password" size='medium' variant='filled' className='t2' color='success' style={{ backgroundColor: 'white', borderRadius: '9px',marginLeft:'0px'}} required  value={pa} onChange={(e)=>{setpa(e.target.value)}}/>
                                    </Toolbar><div style={{ marginBottom: '65px' }}></div>
                                    <button value='Submit' className='b1'>Submit</button>
                                </form>
                            </div>
                        </div>
                        <div className={dat?"a1":"a2"}>
                            <h1 style={{ textAlign: 'center', color: "white", fontSize: '50px' }}><i>Sign Up</i></h1>
                            <div className="form">
                                <form style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }} onSubmit={ab}>
                                    <div style={{ marginBottom: '20px' }}></div>
                                    <Toolbar>
                                        <TextField label='First Name' variant='filled' size='medium' className='t1' color='success' style={{ backgroundColor: 'white', borderRadius: '6px' }} required value={fi} onChange={(e)=>{setfi(e.target.value)}}/>
                                    </Toolbar>   <div style={{ marginBottom: '20px' }}></div>
                                    <Toolbar>
                                        <TextField label='Last Name' variant='filled' size='medium' className='t1' color='success' style={{ backgroundColor: 'white', borderRadius: '6px' }} required value={la} onChange={(e)=>{setla(e.target.value)}}/>
                                    </Toolbar>   <div style={{ marginBottom: '20px' }}></div>
                                    <Toolbar>
                                        <TextField label='Email Id' variant='filled' size='medium' className='t1' color='success' style={{ backgroundColor: 'white', borderRadius: '6px' }} type='email' required value={em1} onChange={(e)=>{setem1(e.target.value)}}/>
                                    </Toolbar>   <div style={{ marginBottom: '20px' }}></div>
                                    <Toolbar>
                                        <TextField label='Password' type="password" size='medium' variant='filled' className='t2' color='success' style={{ backgroundColor: 'white', borderRadius: '6px' }} required value={pa1} onChange={(e)=>{setpa1(e.target.value)}}/>
                                    </Toolbar><div style={{ marginBottom: '20px' }}></div>
                                    <Toolbar>
                                        <TextField label='' type="date" variant='filled' size='medium' className='t1' color='success' style={{ backgroundColor: 'white', borderRadius: '6px', width: '230px' }} required value={da} onChange={(e)=>{setda(e.target.value)}}/>
                                    </Toolbar>   <div style={{ marginBottom: '25px' }}></div>
                                    <button value='Submit' className='b1'>Submit</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <Toaster
    position="top-right"
    reverseOrder={false}
    />
            </>
        );
    }
    export default Login2;