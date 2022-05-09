import React, { useState , useMemo} from "react";
import Cart from "./Cart";

//   // Cách khác: đem biến cart ra bên ngoài export
// let cart = [
//     { id: 1, name: "iphone", price: 1000 },
//     { id: 2, name: "htc phone", price: 2000 },
//     { id: 3, name: "lg phone", price: 3000 },
//   ];

export default function DemoUseMemo() {

  let [like, setLike] = useState(1);
  let cart = [
    { id: 1, name: "iphone", price: 1000 },
    { id: 2, name: "htc phone", price: 2000 },
    { id: 3, name: "lg phone", price: 3000 },
  ];

  // Giữ lại giá trị sau mỗi lần render
  // Tăng like nhưng component cart ko render lại
  const cartMemo = useMemo(() => cart, []);

  return (
    <div className="m-5">
      Like: {like} ♥
      <br />
      <span
        style={{ cursor: "pointer", color: "red", fontSize: 35 }}
        onClick={() => {
          setLike(like + 1);
        }}
      >
        ♥
      </span>
      <br />
      <br />
      <Cart cart={cartMemo} />
    </div>
  );
}
