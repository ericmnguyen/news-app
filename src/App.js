import logo from './logo.svg';
import './App.css';
import MainPage from './components/MainPage';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';

function App() {
  return (
    <div className='news'>
      <header className='news-header'></header>
      <body>
        {/* <MainPage /> */}
        <AmplifySignOut />
      </body>
    </div>
  );
}

export default withAuthenticator(App);
