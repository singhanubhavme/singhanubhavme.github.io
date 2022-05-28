import React from "react";
import { ThemeProvider } from '@mui/material/styles';
import { Box, Button } from '@mui/material';
import TextField from '@mui/material/TextField';
import Fab from "@mui/material/Fab";
import FavoriteIcon from '@mui/icons-material/Favorite';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Theme from "./Theme";
import '../assets/style.css';
import RightImage from '../assets/about_head.svg';
import LeftImage from '../assets/about_stack.svg';
import BootstrapLogo from '../assets/tech-stack/bootstrap.svg';
import CSSLogo from '../assets/tech-stack/css.svg';
import EJSLogo from '../assets/tech-stack/ejs.svg';
import ExpressLogo from '../assets/tech-stack/expressjs.svg';
import GitLogo from '../assets/tech-stack/git.svg';
import JavascriptLogo from '../assets/tech-stack/javascript.svg';
import MaterialUILogo from '../assets/tech-stack/materialui.svg';
import MongodbLogo from '../assets/tech-stack/mongodb.svg';
import NodejsLogo from '../assets/tech-stack/nodejs.svg';
import ReactLogo from '../assets/tech-stack/react.png';
import JavaLogo from '../assets/tech-stack/java.svg';
import PythonLogo from '../assets/tech-stack/python.svg';
import SocialSVG from "./SocialSVG";
const itemData = [
    {
        img: BootstrapLogo,
        title: 'BootStrap'
    },
    {
        img: JavaLogo,
        title: 'Java'
    },
    {
        img: PythonLogo,
        title: 'Python'
    },
    {
        img: CSSLogo,
        title: 'CSS'
    },
    {
        img: EJSLogo,
        title: 'EJS'
    },
    {
        img: ExpressLogo,
        title: 'Express'
    },
    {
        img: GitLogo,
        title: 'GIT'
    },
    {
        img: JavascriptLogo,
        title: 'JavaScript'
    },
    {
        img: MaterialUILogo,
        title: 'Material UI'
    },
    {
        img: MongodbLogo,
        title: 'Mongo DB'
    },
    {
        img: NodejsLogo,
        title: 'Node JS'
    },
    {
        img: ReactLogo,
        title: 'React JS'
    }
];

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};


const About = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <ThemeProvider theme={Theme}>

            <Box style={{ display: 'flex', fontFamily: 'monospace' }}>
                <Box className='about-one'
                    style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'flex-start', flexDirection: 'column' }}
                    sx={{
                        width: '70vw',
                        minHeight: '100vh',
                        backgroundColor: 'primary.dark',
                    }}
                >
                    <h1 className='about-head'>
                        About
                    </h1>
                    <p className='about-text'>
                        Hey, I am Anubhav Singh, Full Stack Developer from INDIA. <br />
                        I am a passionate Developer having an experience of building responsive applications with JavaScript / ReactJS / NodeJS and some other cool libraries and frameworks.
                    </p>
                    <Box>
                        <Button
                            className='about-btn-get-in-touch'
                            variant="contained"
                            style={{
                                color: 'secondary',
                                marginLeft: '4em'
                            }}
                        >
                            Get in Touch
                        </Button>

                        <span style={{ opacity: '0' }}>ss</span>

                        <Fab aria-label="like" style={{ width: '40px', height: 'auto' }}>
                            <FavoriteIcon style={{ width: '70%', height: 'auto', color: '#E94560' }} />
                        </Fab>

                    </Box>
                </Box>
                <Box className='about-one-img'
                    style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                    sx={{
                        width: '50vw',
                        height: '100vh',
                        backgroundColor: 'primary.dark',
                    }}
                >
                    <img src={RightImage} style={{ width: '75%' }} alt='about me' />
                </Box>
            </Box>



            <Box className='about-tech-stacks'
                style={{ display: 'flex', fontFamily: 'monospace' }}>
                <Box
                    className='about-tech-stacks-img'
                    style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                    sx={{
                        width: '50vw',
                        height: '100vh',
                        backgroundColor: 'primary.main',
                    }}
                >
                    <img src={LeftImage} style={{ width: '75%' }} alt='about me' />
                </Box>

                <Box className='about-tech-stacks-text'
                    style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}
                    sx={{
                        width: '70vw',
                        height: '100vh',
                        backgroundColor: 'primary.main',
                    }}
                >
                    <h1 className='about-head'>
                        My Tech Stacks
                    </h1>
                    <div className='tech-stacks' style={{ height: "70%", width: "100%" }}>
                        <ImageList style={{ gridTemplateColumns: 'repeat(4, .2fr)', gap: '4px', 'justifyContent': 'end' }} >
                            {itemData.map((item) => (
                                <ImageListItem className='tech-stack-list' key={item.img} sx={{ alignItems: 'center' }}>
                                    <img
                                        src={`${item.img}`}
                                        srcSet={`${item.img}`}
                                        alt={item.title}
                                        loading="lazy"
                                        style={{ width: '60px' }}
                                    />
                                    <ImageListItemBar
                                        title={item.title}
                                        position="below"
                                        style={{ color: '#e1d6e1' }}
                                    />
                                </ImageListItem>
                            ))}
                        </ImageList>
                    </div>
                </Box>
            </Box>

            <Box className='contact-me' style={{ display: 'flex', fontFamily: 'monospace' }}>
                <Box className='contact-me-text'
                    style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'flex-start', flexDirection: 'column' }}
                    sx={{
                        width: '70vw',
                        height: '100vh',
                        backgroundColor: 'primary.dark',
                    }}
                >
                    <h1 className='about-head'>
                        Contact Me
                    </h1>
                    <p className='about-text'>
                        Hey, I am Anubhav Singh, Full Stack Developer from INDIA. <br />
                        I am a passionate Developer having an experience of building responsive applications with JavaScript / ReactJS / NodeJS and some other cool libraries and frameworks.
                    </p>
                    <Box>
                        <Button
                            onClick={handleOpen}
                            variant="contained"
                            style={{
                                color: 'secondary',
                                marginLeft: '4em'
                            }}
                        >
                            Get in Touch
                        </Button>

                        <Modal
                            open={open}
                            onClose={handleClose}
                        >
                            <Box sx={style}>
                                <Typography id="modal-modal-title" variant="h6" component="h2" sx={{ textAlign: 'center' }}>
                                    Contact Form
                                </Typography>
                                <Typography id="modal-modal-description" sx={{ mt: 2 }}>



                                    <Box
                                        component="form"
                                        sx={{
                                            '& .MuiTextField-root': { m: 1, width: '25ch' },
                                        }}
                                        noValidate
                                        autoComplete="off"
                                    >
                                        <div style={{ textAlign: 'center' }}>
                                            <TextField id="outlined-basic" label="Name" variant="outlined" />
                                            <TextField id="outlined-basic" label="Email" variant="outlined" />
                                            <TextField id="outlined-basic" label="Message" variant="outlined" />
                                            <br />
                                            <Button
                                                variant="contained"
                                                style={{
                                                    color: 'secondary',
                                                }}
                                            // on click here
                                            >
                                                Submit
                                            </Button>


                                        </div>
                                    </Box>




                                </Typography>
                            </Box>

                        </Modal>

                        <span style={{ opacity: '0' }}>ss</span>

                        <Fab aria-label="like" style={{ width: '40px', height: 'auto' }}>
                            <FavoriteIcon style={{ width: '70%', height: 'auto', color: '#E94560' }} />
                        </Fab>

                    </Box>
                </Box>
                <Box
                    className='contact-me-img'
                    style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                    sx={{
                        width: '50vw',
                        height: '100vh',
                        backgroundColor: 'primary.dark',
                    }}
                >
                    <SocialSVG className='social-img' />

                </Box>
            </Box>



        </ThemeProvider>
    );
}
export default About;