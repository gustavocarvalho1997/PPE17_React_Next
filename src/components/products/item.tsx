"use client";

import { Product } from "@/types/product";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { useCartStore } from "@/stores/cart-store";

type Props = {
    item: Product;
};

export const ProductItem = ({ item }: Props) => {
    const { upsertCartItem } = useCartStore((state) => state);

    const handleAddButton = () => {
        upsertCartItem(item, 1);

        toast("Item adicionado ao carrinho!", {
            description: `${item.name} foi adicionado ao seu carrinho.`,
            duration: 3000,
            icon: "🛒",
        });
    };
    return (
        <div>
            <div className="rounded-md overflow-hidden">
                <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-32 object-cover"
                />
            </div>
            <div className="mt-3 flex flex-col gap-2">
                <p className="text-lg">{item.name}</p>
                <p className="text-sm opacity-50">R$ {item.price.toFixed(2)}</p>
                <Button variant="outline" onClick={handleAddButton}>
                    Adicionar
                </Button>
            </div>
        </div>
    );
};
