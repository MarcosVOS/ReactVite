import React, { useState } from 'react';
import styles from './style.module.css';
import Warning from '../../components/warning';
import { useNavigate } from 'react-router-dom';
import verifyLogin from '../../utils/Auth';


const Login = () => {
  const [message, setMessage] = useState<string | null>(null);
  const navigate = useNavigate();

  const login = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;

    const matchedUser = verifyLogin(email, password);

    if (matchedUser) {
      document.cookie = `fable-auth-v.1.0.0=${encodeURIComponent(
        JSON.stringify(matchedUser)
      )}; path=/; max-age=3600`; 
      navigate('/home')
    } else {
      setMessage('E-mail ou senha inválidos.');
    }
  };

  return (
    <div className={styles.labelStyle}>
      {message && <Warning message={message} />}
      <div>
        <form className={styles.formStyle} onSubmit={login}>
          <div>
            <label htmlFor="email">E-mail</label>
            <input type="text" placeholder="e-mail" name="email" />
          </div>
          <div>
            <label htmlFor="password">Senha</label>
            <input type="password" placeholder="senha" name="password" />
          </div>
          <button>Entrar</button>
          <button type='button' onClick={()=>{navigate('/register')}}>Registar</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
