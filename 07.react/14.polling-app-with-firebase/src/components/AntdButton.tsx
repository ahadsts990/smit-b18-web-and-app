import { Button } from 'antd';

export const AntdButton = ({ text, onClick }: any) => (
    <Button type="primary" onClick={onClick}
        style={{ width: "100%" }}
    >{text}</Button>
);
