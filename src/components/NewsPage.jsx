import React, { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';

import { API } from 'aws-amplify';
import { listTodos as listPosts } from '../graphql/queries';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const NewsPage = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchNotes();
  }, []);

  const fetchNotes = async () => {
    await API.graphql({ query: listPosts }).then(data => setPosts(data.data.listTodos.items));
  }

  return (
    <div>
      <Grid container spacing={2}>
        {posts.map(item => {
          return (
            <Grid item xs={12} style={{ marginBottom: '16px' }}>
              <Item>
                <h2>{item.name}</h2>
                <Divider />
                {item.description}
                <Divider />
                <sub>Written by {item.userName}</sub>
              </Item>
            </Grid>
          )
        })}
        <Grid item xs={12}>
          <Item>
            <h2>Example</h2>
            <Divider />
            Example
            <Divider />
            <sub>Written by username</sub>
          </Item>
        </Grid>
      </Grid>
    </div >
  )
};

export default NewsPage;
