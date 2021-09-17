import './styles.css';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import { PersonData } from './components/PersonData';
function App() {
  const formSchema = yup.object().shape({
      user: yup.string().required('Usuário obrigatório'),
      name: yup.string().required('Nome Obrigatório'),

      email: yup.string().required('E-mail obrigatório').email(),

      senha: yup.string().required('Senha obrigatória')
      .matches("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])", 'senha inválida'),
      
      confirmsenha: yup.string().oneOf([yup.ref('senha')], null ).required('Confirme sua senha')
  })
  const[newData, setNewData] = useState([])

  const{register, 
    handleSubmit, 
    formState: {errors} 
  } = useForm({
    resolver: yupResolver(formSchema)
  })

  const onSubmitFunction = data => {
      setNewData(data)
  }

  console.log(errors)
  return (
    <>
      <div className="container">
        <h3>Formulário</h3>
        <form className="form" onSubmit={handleSubmit(onSubmitFunction)}>
          <input name="user" placeholder="Nome de Usuário" {...register('user')}></input>
          {errors.user?.message}

          <input name="name" placeholder="Nome completo" {...register('name')}></input>
          {errors.name?.message}

          <input name="email" placeholder="Email" {...register('email')}></input>
          {errors.email?.message}
          
          <input type="password" name="senha" placeholder="Senha" {...register('senha')}></input>
          {errors.senha?.message}

          <input type="password" name="confirmsenha" placeholder="Confirme sua senha" {...register('confirmsenha')}></input>
          {errors.confirmsenha?.message}
          
          <button type="submit">Cadastrar</button>
        </form>
      </div>

      <PersonData newData={newData}/>
    </>
    
  );
}

export default App;
