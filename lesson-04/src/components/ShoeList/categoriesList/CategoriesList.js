import "./CategoriesList.css";
import { BsChevronRight } from "react-icons/bs";
function CategoriesList({text, style}) {
  return (
    <div className="categoriesList" style={style}>
      <p>
        {text}
        <span>
          <BsChevronRight />
        </span>
      </p>
    </div>
  );
}

export default CategoriesList;
