import { Product } from "@/types/product";
import { products } from "@/data/products";

export const getAllProducts = async (): Promise<Product[]> => {
    // Simulating a delay to mimic an API call
    return new Promise((resolve, reject) => {
        return setTimeout(() => {
            resolve(products);
        }, 1000);
    });
};
