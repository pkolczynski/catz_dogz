import './ProductCard.scss';
import itemIcon from '../../resources/item.jpg';
import cartIcon from '../../resources/cart.png';

const ProductCard = (props) => {

    return (
        <div className="card">
            <img src={itemIcon} alt="zdjecie" className="item-img" />
            <h4>{props.product.name}</h4>
            <div className="card-footer">

                <h4>{props.product.cena}    </h4>
                <h4 className="prom-price">{Math.round((props.product.cena * 1.2)* 100) / 100}    </h4>
                <div className="add-button" onClick={()=>alert("dodano "+props.product.name+" do koszyka!")}><img src={cartIcon} alt="koszyk" className="cart-icon" />
                    <h4>Dodaj do koszyka</h4></div> 
            </div>


        </div>
    )
}

export default ProductCard;