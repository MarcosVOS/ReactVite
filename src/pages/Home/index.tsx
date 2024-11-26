import React, { useState } from 'react';
import styles from './style.module.css';
import Warning from '../../components/warning'; 

const users = [
  { name:"A mestre do frontend Julia", email: 'julia@julia.com', password: 'julia1234' },
  { name:"lucas", email: 'lucas@lucas.com', password: 'lucas1234' },
  { name:"o rolezeiro renan", email: 'renan@renan.com', password: 'renan' },
  { name:"stefany", email: 'stefany@stefany.com', password: 'stefany1234' },
];

function verifyLogin(email: string, password: string) {
  return users.some(user => user.email === email && user.password === password);
}

const Home = () => {
  const [message, setMessage] = useState<string | null>(null); 

  const login = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;

    if (verifyLogin(email, password)) {
      document.cookie = 'auth=true; path=/; max-age=3600';
      setMessage('Login realizado com sucesso!'); 
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
        </form>
      </div>
    </div>
  );
};

export default Home;
