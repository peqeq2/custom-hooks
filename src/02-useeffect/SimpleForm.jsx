import { useEffect, useState } from "react"
import { Message } from "./Message";


export const SimpleForm = () => {

  const [formState, setFormState] = useState({
    username: 'fernando',
    email: 'sergiosantana.m@gmail.com',
  });

  const {username, email} = formState;

  const onInputChange = ({target}) => {
    const {name, value} = target;
    setFormState({
      ...formState,
      [name]: value
    });
  };

  useEffect(() => {
    // console.log('use efect called');
  }, []);

  useEffect(() => {
    // console.log('ooh called');
  }, [formState]);

  useEffect(() => {
    // console.log('yakata called');
  }, [email]);





  return (
    <>
      <h1>Formulario simple</h1>

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

      {
        (username === 'fernando2') && <Message/>

      }



    </>
  )
}
