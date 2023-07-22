'use client'
import { useCartStore } from "@/store"
import { AddCartType } from "@/types/AddCartType"
import { useState } from "react"

const AddCart = ({
    name,      
    id,
    image,
    unit_amount, 
    quantity,
     
}: AddCartType) => {
    const cartStore = useCartStore()
    const [added, setAdded] = useState(false)
    const handleAddCart = () => {
        cartStore.addProduct({id, name, unit_amount, quantity, image})
        setAdded(true)
        setTimeout(() => {
            setAdded(false)
        },500)
    }

    return (
        <>
            <button
                onClick={handleAddCart}
                disabled={added}                         
                className="my-4 btn btn-primary w-full"
            >
                {!added && <span>Add to Cart</span>}
                {added && <span>Adding to Cart :)</span>}
            </button>
        </>
    )
}

export default AddCart;