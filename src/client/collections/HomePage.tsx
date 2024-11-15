import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import flakeGuardLogo from "../assets/flakeGuardLogo.png"; 
import butterfly from "../assets/butterfly.jpg";
function HomePage() {
    const useExternalLink = (href: string) => {
        const handleClick = () => {
          window.location.href = href;
        };
      
        return handleClick;
      };
      
      const handleWebsiteClick = () => {
        const handleClick = useExternalLink('https://flakeguard.com'); // Specify string type for href
        handleClick();
      };
  return (
    <>
    <header className='chilanka-regular' id="project-header">My Projects</header>
    <div className='card-container'>
      <Card sx={{ maxWidth: 345 }} className='flake-guard'>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={flakeGuardLogo}
          alt="flake guard logo" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Open Source Contribution
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Flake Guard is a free, open-source, software that allows developers to automatically run Jest testing files to detect,
            report, and manage flaky tests in development. By identifying and handling these inconsistent tests, Flake Guard helps maintain test reliability.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" onClick={handleWebsiteClick}>
          Website
        </Button>
      </CardActions>
    </Card><Card sx={{ maxWidth: 345 }} className='mini-projects'>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={butterfly}
            alt="green iguana" />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Mini Projects
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              Misc mini projects
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary" onClick={handleWebsiteClick}>
            See More
          </Button>
        </CardActions>
      </Card>
      </div>
      </>
  );
}

export default HomePage;

