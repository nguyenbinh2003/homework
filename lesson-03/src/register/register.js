import "./register";
import "./register.css";
function Register({ type, placeholder }) {
  return (
    <div className="register">
      <input type={type} placeholder={placeholder} />
    </div>
  );
}

export default Register;
