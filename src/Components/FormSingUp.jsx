import { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Switch from '@mui/material/Switch';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';

function FormSingUp({handleSubmit}) {
 
  const [name, setName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [promo, setPromo] = useState(true)
  const [novedades, setNovedades] = useState(false)

  const [error, setError] = useState({
    name: {
      error: false,
      message: "Deben ser al menos 3 caracteres"
    }
  })

  function validarNombre(nombre) {
    if(nombre.length>=3){
      return {name:{error: false, message: ""} }
    }else{
      return {name:{error: true, message: "Deben ser al menos 3 caracteres"}
    }
  }
  }  

  return (
    <form onSubmit={(e) => {
      e.preventDefault()
      handleSubmit({name, lastName, email, promo, novedades})
    }}>
      <TextField
        id="name"
        label="Nombre"
        variant='outlined'
        fullWidth
        margin='normal'
        onChange={(e) => 
          setName(e.target.value)
        }
        value={name}
        error={error.name.error}
        helperText={error.name.message ? error.name.error : ""}

        onBlur={(e) => {
          setError(validarNombre(e.target.value))
        }}
      />

      <TextField
        id="lastName"
        label="Apellidos"
        variant='outlined'
        fullWidth
        margin='normal'
        onChange={(e) => 
          setLastName(e.target.value)
        }
        value={lastName}
      />

      <TextField
        id="email"
        label="Email"
        variant='outlined'
        fullWidth
        margin='normal'
        onChange={(e) => 
          setEmail(e.target.value)
        }
        value={email}
      />

      <FormGroup>
        <FormControlLabel
           control={
              <Switch 
                checked = {promo}
                onChange={(e) => 
                  setPromo(e.target.checked)
                }
              />
            } 
           label="Promociones"
          />
          
          <FormControlLabel
           control={
           <Switch 
            checked = {novedades}
            onChange={(e) => 
              setNovedades(e.target.checked)
            }
           />
          } 
           label="Novedades"
        />
          
      </FormGroup>
      
      <Button variant='contained' type='submit'>Registrarse</Button>
      
    </form>
  )
}


export default FormSingUp