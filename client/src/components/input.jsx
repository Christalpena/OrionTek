import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';

// eslint-disable-next-line react/prop-types
export default function Input({register,name,label,type,index,placeholder}) {

  return (
    <TextField
    className='input'
    label={label}
    {...(index !== undefined ? register(`addresses.${index}.${name}`, {required: true}) : register(name, { required: true }) )}
    type={type}
    InputProps={{
        startAdornment: <InputAdornment position="start"></InputAdornment>,
    }}
    placeholder={placeholder ? placeholder : ''}
        

/>
  );
}
