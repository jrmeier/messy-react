import React from "react";
import { Card } from "./Card";


describe("Card", () => {
    it('should return a single card', () => {
        const product = {
            name: "World's Best Waffle Maker",
            image: "https://www.restaurantsupply.com/media/catalog/product/cache/acb79d03af3da2b97c59ded0fca57b36/w/a/waring-ww180x_004_1.jpg",
            type: "RETAIL",
            brandName: "Waring",
            price: "$1,000",
            storeName: "Wayfair"
        }
        expect(<Card product={product}/>).toMatchSnapshot();
    })
})