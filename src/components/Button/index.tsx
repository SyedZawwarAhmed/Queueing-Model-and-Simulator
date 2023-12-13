interface ButtonProps {
  title: string;
}

function Button({ title }: ButtonProps) {
  return <button style={{ margin: "1rem", fontSize: "2rem" }}>{title}</button>;
}

export default Button;
