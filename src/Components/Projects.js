import React from "react";
import { ThemeProvider } from '@mui/material/styles';
import { Box, Typography, Button } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Theme from "./Theme";
import '../assets/style.css';
import FormHandlerImage from '../assets/project-images/form-handler.png';
import BloodDonationImage from '../assets/project-images/blood-donation.png';
import LibrarySystemImage from '../assets/project-images/library.png';
import VaccineImage from '../assets/project-images/vaccine.png';
import WeatherImage from '../assets/project-images/weather-app.png';
import GithubLogo from '../assets/github-logo.png';
import ExternalLinkLogo from '../assets/external-link-logo.svg';

const Projects = () => {
    return (
        <ThemeProvider theme={Theme}>

            <Box sx={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap',
                justifyContent: 'space-evenly',
                backgroundColor: 'primary.dark',
                fontFamily: 'monospace'
            }}>
                <h1 className='about-head' style={{ backgroundColor: '#142850', width: '100vw', textAlign: 'center' }}>

                    Projects

                </h1>

                <Card className='card' sx={{ maxWidth: 345 }}>
                    <CardMedia
                        component="img"
                        height="170"
                        image={FormHandlerImage}
                        alt="form handler"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Form Handler
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Form Hadler made on Express, EJS, Bootstrap and MongoDB (Frontend + Backend + Database).
                        </Typography>
                    </CardContent>

                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <div>
                            <Button className='project-logos'>
                                <a href="https://github.com/singhanubhavme/From-Handler" target='_blank' rel="noreferrer">
                                    <img src={GithubLogo} width='55%' alt="" sx={{ padding: '0', margin: '0' }} />
                                </a>
                            </Button>
                        </div>
                        <div>
                            <Button className='project-logos'>
                                <a href="https://formhandler.xyz/" target='_blank' rel="noreferrer">
                                    <img src={ExternalLinkLogo} width='60%' alt="" sx={{ padding: '0', margin: '0' }} />
                                </a>
                            </Button>
                        </div>
                    </div>

                </Card>

                <Card className='card' sx={{ maxWidth: 345 }}>
                    <CardMedia
                        component="img"
                        height="170"
                        image={BloodDonationImage}
                        alt="blood donation camp"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Blood Donation Camp
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Blood Donation Camp made using NodeJs, BootStrap and MongoDB with secure Login System.
                        </Typography>
                    </CardContent>

                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <div>
                            <Button className='project-logos'>
                                <a href="https://github.com/singhanubhavme/blood-donation" target='_blank' rel="noreferrer">
                                    <img src={GithubLogo} width='55%' alt="" sx={{ padding: '0', margin: '0' }} />
                                </a>
                            </Button>
                        </div>
                        <div>
                            <Button className='project-logos'>
                                <a href="https://blood-donatio-camp.herokuapp.com/" target='_blank' rel="noreferrer">
                                    <img src={ExternalLinkLogo} width='60%' alt="" sx={{ padding: '0', margin: '0' }} />
                                </a>
                            </Button>
                        </div>
                    </div>
                </Card>

                <Card className='card' sx={{ maxWidth: 345 }}>
                    <CardMedia
                        component="img"
                        height="170"
                        image={VaccineImage}
                        alt="covid vaccine finder"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Covid Vaccine Finder
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Covid Vaccine finder app that sends email if vaccine slot is available, made using NodeJS, EJS, CSS, MongoDB and Cowin API
                        </Typography>
                    </CardContent>

                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <div>
                            <Button className='project-logos'>
                                <a href="https://github.com/singhanubhavme/Covid-Vaccine" target='_blank' rel="noreferrer">
                                    <img src={GithubLogo} width='55%' alt="" sx={{ padding: '0', margin: '0' }} />
                                </a>
                            </Button>
                        </div>
                        <div>
                            <Button disabled style={{ opacity: '40%' }}>
                                <img src={ExternalLinkLogo} width='60%' alt="" sx={{ padding: '0', margin: '0' }} />
                            </Button>
                        </div>
                    </div>
                </Card>

                <Card className='card' sx={{ maxWidth: 345 }}>
                    <CardMedia
                        component="img"
                        height="170"
                        image={WeatherImage}
                        alt="weather app"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Weather App
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Weather app that tells current weather of entered location, made using Vanilla JS, HTML, CSS and weather api.
                        </Typography>
                    </CardContent>

                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <div>
                            <Button className='project-logos'>
                                <a href="https://github.com/singhanubhavme/weather-app" target='_blank' rel="noreferrer">
                                    <img src={GithubLogo} width='55%' alt="" sx={{ padding: '0', margin: '0' }} />
                                </a>
                            </Button>
                        </div>
                        <div>
                            <Button className='project-logos'>
                                <a href="https://anubhavsingh.dev/weather-app/" target='_blank' rel="noreferrer">
                                    <img src={ExternalLinkLogo} width='60%' alt="" sx={{ padding: '0', margin: '0' }} />
                                </a>
                            </Button>
                        </div>
                    </div>
                </Card>

                <Card className='card' sx={{ maxWidth: 345 }}>
                    <CardMedia
                        component="img"
                        height="170"
                        image={LibrarySystemImage}
                        alt="library management image"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Library Management
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Library Management System made using Express, EJS, Bootstrap and MongoDB (Frontend + Backend + Database).
                        </Typography>
                    </CardContent>

                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <div>
                            <Button className='project-logos'>
                                <a href="https://github.com/singhanubhavme/Library-Management-System-NodeJS" target='_blank' rel="noreferrer">
                                    <img src={GithubLogo} width='55%' alt="" sx={{ padding: '0', margin: '0' }} />
                                </a>
                            </Button>
                        </div>
                        <div>
                            <Button className='project-logos'>
                                <a href="https://library-management-system3.herokuapp.com/" target='_blank' rel="noreferrer">
                                    <img src={ExternalLinkLogo} width='60%' alt="" sx={{ padding: '0', margin: '0' }} />
                                </a>
                            </Button>
                        </div>
                    </div>
                </Card>

            </Box>
        </ThemeProvider>
    );
}

export default Projects;