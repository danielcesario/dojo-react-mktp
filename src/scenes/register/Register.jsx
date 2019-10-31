import React from 'react'
import { TextField, Button, Typography, Snackbar } from '@material-ui/core'
import IconButton from '@material-ui/core/IconButton'
import CloseIcon from '@material-ui/icons/Close'
import { savePerson } from '../../services/FirebaseService';

import './Register.css'

export default function Register() {

  const initialState = {
    document: '',
    name: '',
    city: '',
    age: ''
  }

  const [person, setPerson] = React.useState(initialState)
  const [saved, setSaved] = React.useState(false);

  const handleChange = prop => event => {
    setPerson({ ...person, [prop]: event.target.value });
  }

  const handleRegister = () => {
    savePerson(person).then(result => {
      handleClear()
      setSaved(true)
    })
  }

  const handleClear = () => {
    setPerson({ ...initialState });
  }

  const handleCloseMessage = () => {
    setSaved(false)
  }

  return (
    <React.Fragment>
      <Typography variant="h4" component="h2" className="page-title">Register</Typography>

      <form noValidate autoComplete="off">
        <TextField
          id="person-document"
          label="Document"
          margin="normal"
          variant="outlined"
          className="field"
          value={person.document}
          onChange={handleChange('document')}
        />

        <TextField
          id="person-name"
          label="Name"
          margin="normal"
          variant="outlined"
          className="field"
          value={person.name}
          onChange={handleChange('name')}
        />

        <TextField
          id="person-city"
          label="City"
          margin="normal"
          variant="outlined"
          className="field"
          value={person.city}
          onChange={handleChange('city')}
        />

        <TextField
          id="person-age"
          label="Age"
          margin="normal"
          variant="outlined"
          className="field"
          value={person.age}
          onChange={handleChange('age')}
        />

        <div className="buttons">
          <Button id="save-button" variant="contained" color="primary" onClick={handleRegister}>
            Register
        </Button>

          <Button id="cancel-button" variant="contained" color="secondary" onClick={handleClear}>
            Cancel
        </Button>
        </div>
      </form>

      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        open={saved}
        autoHideDuration={6000}
        onClose={handleCloseMessage}
        ContentProps={{
          'aria-describedby': 'message-id',
        }}
        message={<span id="message-id">Saved with success!</span>}
        action={[
          <IconButton
            key="close"
            aria-label="close"
            color="inherit"
            onClick={handleCloseMessage}
          >
            <CloseIcon />
          </IconButton>,
        ]}
      />
    </React.Fragment>
  )
}