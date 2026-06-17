import { Input } from 'antd';

export const AntdInput = ({ placeholder, type, onChange }: any) => {
    return (
        <Input placeholder={placeholder} type={type}
            onChange={onChange}
        />
    )
};
