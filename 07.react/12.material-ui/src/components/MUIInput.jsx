import TextField from '@mui/material/TextField';

export default function MUIInput({ label, variant, color }) {
    return (
        <TextField label={label} variant={variant} color={color} />
    );
}
