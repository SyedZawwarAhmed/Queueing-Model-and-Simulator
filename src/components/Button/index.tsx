interface ButtonProps {
  title: string;
  onClick?: any;
}

function Button({ title, onClick }: ButtonProps) {
  return <button onClick={onClick} style={{ margin: "3rem 1rem", fontSize: "2rem" }} className="text-white">{title}</button>;
}

export default Button;
