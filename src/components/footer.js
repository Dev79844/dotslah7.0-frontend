import React from 'react';
import { Box, Grid, Typography, Link } from '@mui/material';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InputBase from '@mui/material/InputBase';

import '../footer.css';

const Footer = () => {
  return (
    <Box sx={{ backgroundColor: '#f7f7f7', padding: '3rem', mt: '4rem' }}>
      <Grid container spacing={4} justifyContent="center">
        {/* Sellers Column */}
        <Grid item xs={12} sm={3}>
          <Typography variant="subtitle1" gutterBottom>
            Sellers
          </Typography>
          <Link href="#" variant="body2" display="block">List Your Startup</Link>
          <Link href="#" variant="body2" display="block">Pricing</Link>
          <Link href="#" variant="body2" display="block">Get help selling</Link>
        </Grid>

        {/* Buyers Column */}
        <Grid item xs={12} sm={3}>
          <Typography variant="subtitle1" gutterBottom>
            Buyers
          </Typography>
          <Link href="#" variant="body2" display="block">Browse Startups</Link>
          <Link href="#" variant="body2" display="block">Pricing</Link>
          <Link href="#" variant="body2" display="block">Instant Slack Alerts</Link>
        </Grid>

        {/* Company Column */}
        <Grid item xs={12} sm={3}>
          <Typography variant="subtitle1" gutterBottom>
            Company
          </Typography>
          <Link href="#" variant="body2" display="block">About us</Link>
          <Link href="#" variant="body2" display="block">Testimonials</Link>
          <Link href="#" variant="body2" display="block">Legal</Link>
        </Grid>

        {/* Resources Column */}
        <Grid item xs={12} sm={3}>
          <Typography variant="subtitle1" gutterBottom>
            Resources
          </Typography>
          <Link href="#" variant="body2" display="block">Help Center</Link>
          <Link href="#" variant="body2" display="block">Blog</Link>
        </Grid>
      </Grid>

      {/* Contact Column */}
      <Grid container justifyContent="center" sx={{ mt: '2rem' }}>
        <Grid item xs={12} sm={3}>
          <Typography variant="subtitle1" gutterBottom>
            Contact us
          </Typography>
          <Typography variant="body2">support@godseye.com</Typography>
        </Grid>
      </Grid>

      {/* Footer Bottom */}
      <Box sx={{ textAlign: 'center', mt: '2rem' }}>
        {/* <Typography variant="body2" color="text.secondary" sx={{ mb: '1rem' }}>
          © 2024 Acquire.com, Inc™
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: '1rem' }}>
          Acquire.com Brokerage Services, Inc., CA DRE #01862915
        </Typography> */}
        <Box>
          <Link href="#" color="inherit" sx={{ mr: '1rem' }}><TwitterIcon /></Link>
          <Link href="#" color="inherit" sx={{ mr: '1rem' }}><LinkedInIcon /></Link>
          <Link href="#" color="inherit" sx={{ mr: '1rem' }}><FacebookIcon /></Link>
          <Link href="#" color="inherit"><YouTubeIcon /></Link>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;