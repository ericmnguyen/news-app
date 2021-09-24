import React, { useState, useEffect } from 'react';
import NewsPage from './NewsPage';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import TextareaAutosize from '@mui/material/TextareaAutosize';

import { API, Auth } from 'aws-amplify';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';
import { createTodo as createPostMutation } from '../graphql/mutations';

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
const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const initialFormState = { title: '', description: '', userName: '', name: '' };

const MainPage = () => {
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [userName, setUsername] = useState('');
  // const [formData, setFormData] = useState(initialFormState);
  const [posts, setPosts] = useState([]);

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setTitle('');
    setDescription('');
    setOpen(false);
  }

  useEffect(() => {
    Auth.currentAuthenticatedUser()
      .then(data => setUsername(data))
      .catch(err => console.log(err));
  }, []);

  const createNewPost = async (params) => {
    if (!params.name || !params.description) return;
    await API.graphql({ query: createPostMutation, variables: { input: params } });
    setPosts([...posts, params]);
  }

  const handleCreate = () => {
    if (title && description) {
      const createParams = {
        title,
        description,
        userName: userName.username,
        name: title,
      }
      createNewPost(createParams);
      setOpen(false);
    }
  }

  return (<div>
    <div className='news-container' style={{ marginBottom: '16px' }}>
      <NewsPage />
    </div>
    <Grid container spacing={2}>
      <Grid item xs={6}>
        <Item><Button variant="contained" onClick={handleOpen} style={{ width: '100%', height: '50px' }}>Create a post</Button></Item>
      </Grid>
      <Grid item xs={6}>
        <Item><AmplifySignOut /></Item>
      </Grid>
    </Grid>

    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <TextField
          id="standard-basic"
          label="Input Title"
          variant="standard"
          onChange={(e) => setTitle(e.target.value)}
          sx={{ width: '100%', marginBottom: '16px' }}
        />
        <TextareaAutosize
          aria-label="minimum height"
          minRows={3}
          placeholder="Minimum 3 rows"
          style={{ width: '100%', marginBottom: '16px' }}
          onChange={(e) => setDescription(e.target.value)}
        />
        <Button variant="contained" onClick={handleCreate}>Create</Button>
      </Box>
    </Modal>
  </div>)
};

export default MainPage;
