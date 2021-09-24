import React from 'react';
import NewsPage from './NewsPage';
// import CreatePost from './CreatePost';
// import Modal from 'react-bootstrap/Modal';
// import Button from 'react-bootstrap/Button';
import './styles.css'

const MainPage = () => {
  return (<div>
    {/* <CreatePost /> */}
    <div className='news-container'>
      <NewsPage />
    </div>

  </div>)
};

export default MainPage;
