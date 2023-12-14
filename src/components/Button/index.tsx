interface ButtonProps {
  title: string;
  onClick?: any;
}

function Button({ title, onClick }: ButtonProps) {
  return <button onClick={onClick} style={{ margin: "1rem", fontSize: "2rem" }}>{title}</button>;
}

export default Button;
