"use client"

import {motion} from 'framer-motion'
import Image from 'next/image'
import bear from "@/public/bear.gif" 
import Link from 'next/link'
import { useCartStore } from "@/store"
import { useEffect } from "react"

const OrderConfirmed = ()=> {
    const cartStore = useCartStore()

    useEffect(() => {
        cartStore.setPaymentIntent("")
        cartStore.clearCart()
      }, [])

      
    
    const checkoutOrder = () => {
        setTimeout(() => {
          cartStore.setCheckout("cart")
        }, 1000)
        cartStore.toggleCart()
      }

    return(
        <motion.div
        className="flex items-center justify-center my-12" 
            initial={{scale: 0.5, opacity: 0}} 
            animate={{scale: 1, opacity: 1 }}
        >
        <div className="p-12 rounded-md text-center " >
            <h1 className="text-xl font-medium">Your Order has been placed OK</h1>
            <h2 className="text-sm my-4 "> Check your email for the receipt.</h2>
            <Image src={bear} className="py-8" alt="writing bear" />
        <div className="flex items-center justify-center gap-12">        
            <Link href={'/dashboard'}>
                <button onClick={checkoutOrder} className="font-medium">
                    Check Your Order
                </button>
            </Link>
            
        </div>
        </div>            
        </motion.div>
    )
}

export default OrderConfirmed; 