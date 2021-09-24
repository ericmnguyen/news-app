import React from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const NewsPage = () => {
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Item>
            <h2>TITITIT</h2>
            <Divider />
            DeSSSSCCription
            <Divider />
            <sub>by username</sub>
          </Item>
        </Grid>
      </Grid>
    </div>
  )
};

export default NewsPage;
