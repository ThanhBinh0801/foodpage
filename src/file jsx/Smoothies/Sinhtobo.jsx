import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Food from "./Food";
function Detail() {
  const { id } = useParams();
  const [sanpham, setsanpham] = useState({});
  const getSanphams = () => {
    fetch(`https://65d55b923f1ab8c63436c64d.mockapi.io/smoothies/${id}`, {
      method: "GET",
      headers: { "content-type": "application/json" },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        // handle error
      })
      .then((sp) => {
        //console.log("Student List: " + studentList);
        setsanpham(sp);
      })
      .catch((error) => {
        console.log("Error: " + error);
      });
  };
  useEffect(() => {
    getSanphams();
  }, []);
  // console.log(sanpham);
  return (
    <div>
      <Food Name={sanpham.Name} img={sanpham.img} />
    </div>
  );
}
export default Detail;
