import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import GoogleIcon from '@mui/icons-material/Google';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const Footer = () => {
    return (
        <>
           <footer className="footer-style text-center text-white" >
  
  <div className="container pt-4">
    
    <section className="mb-4">
     
      <a
        className="btn btn-link btn-floating btn-lg text-dark m-1"
        href="#!"
        role="button"
        data-mdb-ripple-color="dark"
        >
        <FacebookIcon />
        </a>

   
      <a
        className="btn btn-link btn-floating btn-lg text-dark m-1"
        href="#!"
        role="button"
        data-mdb-ripple-color="dark"
        >
        <TwitterIcon />
        </a>

      <a
        className="btn btn-link btn-floating btn-lg text-dark m-1"
        href="#!"
        role="button"
        data-mdb-ripple-color="dark"
        >
        <GoogleIcon />
        </a>

      <a
        className="btn btn-link btn-floating btn-lg text-dark m-1"
        href="#!"
        role="button"
        data-mdb-ripple-color="dark"
        >
        <InstagramIcon />
        </a>

      <a
        className="btn btn-link btn-floating btn-lg text-dark m-1"
        href="#!"
        role="button"
        data-mdb-ripple-color="dark"
        >
        <LinkedInIcon />
        </a>

      <a
        className="btn btn-link btn-floating btn-lg text-dark m-1"
        href="#!"
        role="button"
        data-mdb-ripple-color="dark"
        >
        <GitHubIcon />
        </a>

    </section>

  </div>

  <div className="footer-copyright text-center text-dark p-3" >
    © 2020 Copyright:
    <a class="text-dark" href="/">VidPlay</a>
  </div>
  
</footer> 
        </>
    )
}

export default Footer
