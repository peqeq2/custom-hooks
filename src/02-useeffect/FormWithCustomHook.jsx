
import { useForm } from "../Hooks/useForm";



export const FormWithCustomHook = () => {

  const { onInputChange, onResetForm, username, email, password} = useForm({

    username: '',
    email: '',
    password: ''
  });

  // const {username, email, password} = formState;


  return (
    <>
      <h1>Formulario con custom hook</h1>

      <hr />

      <input type="text"
        className="form-control"
        placeholder="Username"
        name="username"
        value={username}
        onChange={onInputChange}
      />

      <input type="email"
        className="form-control mt-2"
        placeholder="123@gmail.com"
        name="email"
        value={email}
        onChange={onInputChange}
      />

      <input type="password"
        className="form-control mt-2"
        placeholder="contrasena"
        name="password"
        value={password}
        onChange={onInputChange}
      />

      <button className="btn btn-primary mt-3" onClick={onResetForm}>borrar</button>

    </>
  )
}
