import { FaCartFlatbed } from "react-icons/fa6";
import "./Benefit.css";

function Benefit({ text, p }) {
  return (
    <div className="benefit">
      <div className="icon">
        <FaCartFlatbed />
      </div>
      <div>
        <h4>{text}</h4>
        <p>{p}</p>
      </div>
    </div>
  );
}

export default Benefit;
