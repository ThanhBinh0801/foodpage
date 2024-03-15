import { useNavigate } from "react-router-dom";
function Food(props) {
  const navigate = useNavigate();
  return (
    <div>
      <div
        className="cacsanphamchinh"
        onClick={() => navigate(`/smooth/${props.id}`)}
      >
        <p className="tenthanhphan">{props.Name}</p>
        <img src={props.img} alt="" />
      </div>
    </div>
  );
}
export default Food;
