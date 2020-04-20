import React, { useEffect, useState } from 'react';
import { Button, Descriptions } from 'antd';

const { Item } = Descriptions;

function ProductInfo(props) {
    const [Product, setProduct] = useState({});

    useEffect(() => {
        setProduct(props.detail)
    }, [props.detail])

    const addToCartHandler = () => {
        props.addToCart(props.detail._id)
    }

    return (
        <div>
            <Descriptions title="Product Info">
                <Item  label="Price">{Product.price}</Item>
                <Item  label="Sold">{Product.sold}</Item>
                <Item  label="View">{Product.views}</Item>
                <Item  label="Description">{Product.description}</Item>
            </Descriptions>
            <br /><br /><br />
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <Button size="large" shape="round" type="danger"
                    onClick={addToCartHandler}
                >
                    Add to Cart
                </Button>
            </div>
        </div>
    )
}

export default ProductInfo
