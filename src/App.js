import React, { Component} from 'react'
import GoogleLogin from 'react-google-login'
export class App extends Component {
  responseGoogle=(response)=>{
    console.log(response);
    console.log(response.profileObj);
  }
  render () {
    return (
      <div>
        <GoogleLogin
        clienId="https://1082229391296-h4t7pvfoogbpskc5gtpvu1nbi03n73gs.apps.googleusercontent.com/"
        buttonText="Login"
        onSuccess={this.responseGoogle}
        onFailure={this.responseGoogle}
        cookiePolicy={'single_host_origin'}
        
        />

      </div>
    )
  }
}

export default App


// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
