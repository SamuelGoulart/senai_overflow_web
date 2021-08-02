import login from './icone_login.svg';

import './App.css';

function App() {
  return (
    <div className="App">
      <main>

        <div class="img" >
          <img src={login} className="icone-logo" />
        </div>

        <section class="form-section">
            <h1>Entrar</h1>

            <div class="form-wrapper">
              <form>
                <div class="input-block">
                  <label for="login-email">Email</label>
                  <input type="email" id="login-email" />
                </div>
                <div class="input-block">
                  <label for="login-password">Password</label>
                  <input type="password" id="login-password" />
                </div>
                <button type="submit" class="btn-login">Login</button>
              </form>
            </div>
          </section>        
      </main>

    </div>

  );
}

export default App;
