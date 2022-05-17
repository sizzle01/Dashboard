import * as React from 'react'
import Box from '@mui/material/Box'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'

function BasicSelect() {
  const [transaction, setTransaction] = React.useState('')

  const handleChange = (event) => {
    setTransaction(event.target.value)
  }

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label"></InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={transaction}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value={10}>All</MenuItem>
          <MenuItem value={20}>Reconciled</MenuItem>
          <MenuItem value={30}>Unreconciled</MenuItem>
        </Select>
      </FormControl>
    </Box>
  )
}
export default BasicSelect
