const Button = (props) => {
  return (
    <button onClick={props.handleClick} className="btn btn-danger">
      Random User
    </button>
  );
};

export default Button;
