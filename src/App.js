import logo from './logo.svg';
import './App.css';
import MainPage from './components/MainPage';
import { withAuthenticator } from '@aws-amplify/ui-react';

function App() {
  return (
    <div className='news'>
      <header className='news-header'></header>
      <body>
        <MainPage />
      </body>
    </div>
  );
}

export default withAuthenticator(App);
