import React, { useState } from 'react'
import Button from '../Forms/Button'

const LoginCreate = () => {

  const [usuario, setUsuario] = useState('')
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')

  return (
    <div>
      <h1>Cadastre-se</h1>
      <div>
        <label htmlFor="usuario">Usuário</label>
        <input value={usuario} onChange={(e => setUsuario(e.target.value))} type="text" id='usuario' />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input value={email} onChange={(e => setEmail(e.target.value))} type="email" id='email' />
      </div>
      <div>
        <label htmlFor="senha">Senha</label>
        <input value={senha} onChange={(e => setSenha(e.target.value))} type="password" id='senha' />
      </div>
      <Button children='Entrar'/>
    </div>
  )
}

export default LoginCreate
