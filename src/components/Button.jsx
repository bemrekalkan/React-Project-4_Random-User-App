const Button = (props) => {
  return (
    <button onClick={props.onClick} className="btn btn-danger">
      Random User
    </button>
  );
};

export default Button;
