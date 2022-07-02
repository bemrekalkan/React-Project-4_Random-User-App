const Button = (props) => {
  return (
    <button onClick={props.handleClick} className="btn">
      Random User
    </button>
  );
};

export default Button;
