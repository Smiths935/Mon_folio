/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
"use client"

import { useState, useRef, useEffect } from "react"
import { Button } from "./ui/button"
import { Settings } from "lucide-react"
import { Card } from "./ui/card"
import { useMotionValue, motion, animate } from "framer-motion"

export default function FlotingButton() {
    const x = useMotionValue(50)
    const y = useMotionValue(50)
    const [isDrapping, setIsDrapping] = useState(false)
    const [showCard, setShowCard] = useState(false)
    const [screenSize, setScreenSize] = useState({ width: 0, height: 0 })

    //Dimmension de l'ecan
    const screenWidth = typeof window !== 'undefined' ? window.innerWidth : 0
    const screenHeight = typeof window !== 'undefined' ? window.innerHeight : 0

    const BUTTON_SIZE = 36

    useEffect(() => {
        const updateSize = () => {
            setScreenSize({
                width: window.innerWidth,
                height: window.innerHeight
            })
        }
        updateSize()

        window.addEventListener('resize', updateSize)
        return () => window.addEventListener('resize', updateSize)

    }, [])

    //Initialisation de la position quand on connait la taille de l'ecran
    useEffect(() => {
        if (screenSize.width && screenSize.height) {
            x.set(screenSize.width - BUTTON_SIZE - 10) //a droite
            y.set(screenSize.height / 2 - BUTTON_SIZE / 2) // centrer verticalement
        }
    }, [screenSize])


    const handlerDragEnd = (_, info) => {
        setIsDrapping(false)

        if (!screenSize.width) return;

        // si on relache pret d'un board -> on "snap au board"
        const distanceTotalLeft = x.get()
        const distanceTotalRight = screenSize.width - x.get() - BUTTON_SIZE // BUTTON_SIZE est la taille du button
        if (distanceTotalLeft < distanceTotalRight) {
            animate(x, 10, { type: 'spring', stiffness: 300, damping: 20 })
        } else {
            animate(x, screenSize.width - BUTTON_SIZE - 10, { type: 'spring', stiffness: 300, damping: 20 })
        }

        //bloauer le button dans l'ecran
        if (y.get() < 0) animate(y, 10);
        if (y.get() > screenSize.height - BUTTON_SIZE) animate(y, screenSize.height - BUTTON_SIZE - 10);
    }

    //Gestion du clic pour ouvrir la card

    const handleClick = () => {
        if (!isDrapping) {
            setShowCard((prev) => !prev)
        }
    }

    return (
        <motion.div
            drag
            dragMomentum
            className={`fixed left-[${x}] top-[${y} z-50] z-50`}
            dragElastic={0.2}
            dragConstraints={{
                left: 0,
                right: screenSize.width - BUTTON_SIZE,
                top: 0,
                bottom: screenSize.height - BUTTON_SIZE
            }}
            onDragStart={() => setIsDrapping(true)}
            onDragEnd={handlerDragEnd}>
            <Button
                onClick={handleClick} variant={'outline'} size={'icon'} className=" select-none touch-none">
                <Settings />
            </Button>
            {
                showCard && (
                    <Card className={`absolute top-[${BUTTON_SIZE + 10}] left-0 p-2`}>
                        <p className="m-0">Option 1</p>
                        <p className="m-0">Option 2</p>
                        <p className="m-0">Option 3</p>
                    </Card>
                )
            }
        </motion.div>
    )
}
