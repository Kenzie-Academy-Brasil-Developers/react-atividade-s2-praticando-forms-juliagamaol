import './styles.css';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
// import { Cards } from './components/Card';
function App() {
  const formSchema = yup.object().shape({
      user: yup.string().required('Usuário obrigatório'),
      name: yup.string().required('Nome Obrigatório'),

      email: yup.string().required('E-mail obrigatório').email(),

      senha: yup.string().required('Senha obrigatória')
      .matches('^(?=.*[A-Za-z])(?=.*d)[A-Za-zd]{8,}$', 'senha inválida'),
      
      confirmsenha: yup.string().required('Confirme sua senha')
  })

  const{register, 
    handleSubmit, 
    formState: {errors} 
  } = useForm({
    resolver: yupResolver(formSchema)
  })

  const onSubmitFunction = data => {
      // <Cards data={data} />
      console.log(data)
  }

  console.log(errors)
  return (
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
        
        <button type="submit" >Cadastrar</button>
      </form>
    </div>
  );
}

export default App;
