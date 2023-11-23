import React, { useState } from 'react'
import Button from '../Forms/Button'

const LoginPasswordLost = () => {
  const [perdeu, setPerdeu] = useState('')
  return (
    <div>
      <h1>Perdeu a senha?</h1>
      <label htmlFor="perdeu">Email / Usuário</label>
      <input type='text' value={perdeu} onChange={(e => setPerdeu(e.target.value))} id='perdeu'></input>
      <Button children=''/>
    </div>
  )
}

export default LoginPasswordLost
