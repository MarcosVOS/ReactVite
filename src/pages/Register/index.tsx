import { useState } from 'react';
import verifyLogin from '../../utils/Auth';
import styles from './style.module.css';
import Warning from '../../components/warning';
import { useNavigate } from 'react-router-dom';


const Register = () =>{
  const [message, setMessage] = useState<string | null>(null);
  const navigate = useNavigate();
  

  
  const register = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const Nome = formData.get('nome') as string;
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;
    const passwordRepeat = formData.get('passwordRepeat') as string;

    console.log("Nome: ",Nome)
    console.log("email: ",email)
    console.log("password: ",password)
    console.log("passwordRepeat: ",passwordRepeat)

    const matchedUser = verifyLogin(email, password);

    if (matchedUser == null) {
      document.cookie = `fable-auth-v.1.0.0=${encodeURIComponent(
        JSON.stringify({
          name: Nome, 
          email: email, 
          password: password 
        })
      )}; path=/; max-age=3600`; 
    } else {
      setMessage('E-mail ou senha inválidos.');
    }
  };

  return (
    <div className={styles.labelStyle}>
      {message && <Warning message={message} />}
      <div>
        <form className={styles.formStyle} onSubmit={register}>
        <div>
            <label htmlFor="email">Nome</label>
            <input type="text" placeholder="nome" name="nome" />
          </div>
          <div>
            <label htmlFor="email">E-mail</label>
            <input type="text" placeholder="e-mail" name="email" />
          </div>
          <div>
            <label htmlFor="password">Senha</label>
            <input type="password" placeholder="senha" name="password" />
          </div>
          <div>
            <label htmlFor="password">Senha</label>
            <input type="password" placeholder="senha" name="passwordRepeat" />
          </div>
          <button>Criar</button>
          <button type='button' onClick={()=>{navigate('/')}}>Login</button>
        </form>
      </div>
    </div>
  );
}

export default Register;