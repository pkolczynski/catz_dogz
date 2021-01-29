import './ProductCardWrapper.scss';
import ProductCard from '../productCard/ProductCard';

const ProductCardWrapper = () => {
    const productData = [
        {name: "produkt1", cena: 12.50},
        {name: "produkt2", cena: 40.00},
        {name: "produkt3", cena: 60.99},
        {name: "produkt4", cena: 29.99},
        {name: "produkt5", cena: 11.6},
        {name: "produkt6", cena: 63.99},
        {name: "produkt7", cena: 45.99},
        {name: "produkt8", cena: 13.99},
        {name: "produkt9", cena: 84.99},
        {name: "produkt10", cena: 23.99},
        {name: "produkt11", cena: 15.99},
        {name: "produkt12", cena: 123.99},
        {name: "produkt13", cena: 12.99},
        {name: "produkt14", cena: 15.99},
        {name: "produkt15", cena: 71.99}
    ];

    return (
        <div className="card-wrapper">
            {productData.map(product =>(  
                <ProductCard product = {product}/>
    )) }
        </div>
    )
}

export default ProductCardWrapper;


