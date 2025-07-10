import "./Product.css";
import Price from "./price.jsx";
function Product({title, idx}){
    let oldPrices = ["12,495", "11,900", "1,599","599" ];
    let newPrices = ["8,999", "9,999", "1,199","499"];
    let description = [["8,000 DPI", "5 Programmable Buttons"],
        ["intutive surface","designed for Apple Pencil"],
        ["RGB lighting","Dual 2.4GHz and Bluetooth"],
       [ "Bluetooth 5.0", "IPX4 Water Resistant"]
    ];
   return (
<div className="Product">
  <h4>{title}</h4>  
  <p>{description[idx][0]}</p>
    <p>{description[idx][1]}</p>
 <Price oldPrice={oldPrices[idx]} newPrice={newPrices[idx]}/>
</div>
    );
}
export default Product;