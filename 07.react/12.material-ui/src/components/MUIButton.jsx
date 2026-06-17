import Button from '@mui/material/Button';

export default function MUIButton({ text, variant, color }) {
    return (
        <Button variant={variant} color={color}>{text}</Button>
    );
}