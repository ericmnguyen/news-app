import React from 'react';
import NewsPage from './NewsPage';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';

import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';
import './styles.scss'

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


const MainPage = () => {
  return (<div>
    <div className='news-container'>
      <NewsPage />
    </div>
    <Grid container spacing={2}>
      <Grid item xs={6}>
        <Item><Button variant="contained" style={{ width: '100%', height: '50px' }}>Create a post</Button></Item>
      </Grid>
      <Grid item xs={6}>
        <Item><AmplifySignOut /></Item>
      </Grid>
    </Grid>
  </div>)
};

export default MainPage;
