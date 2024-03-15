import { useNavigate } from "react-router-dom";
function Food(props) {
  const navigate = useNavigate();
  return (
    <div onClick={() => navigate(`/smoothies/${props.id}`)}>
      <div className="cacsanphamchinh">
        <div className="tenthanhphan">{props.Name}</div>
        <div>
          <img src={props.img} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Food;