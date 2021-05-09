import logo from './logo.svg';
import './App.scss';

function App() {
  return (
    <div className="App">
      <header className="header">
        <h1>Tela de Login</h1>
        </header>
        <div className="login-content">
          <h2 className="login">
            Entrar
          </h2>
         
          <div className="box-login">
          <div className="form">
          <label for="name" className="legend">Usuário
          </label>
          <input type="text"
           className="user" 
           name="user" 
           placeholder="Digite o usuário">
          </input>
          </div>
          <div className="form">
          <label for="password" className="legend">Senha:  
          </label>
          <input type="text"
           className="user" 
           name="user" 
           placeholder="Digite sua senha">
           </input>
           </div>
           </div>
           <div>
           <button className="submit-login"
           onClick={""} 
           type="submit"> Entrar
           </button> 
           </div>

        </div>
       </div>
    
  );
}

export default App;
