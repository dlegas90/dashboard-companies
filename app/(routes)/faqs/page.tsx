import React from 'react'
import { AcoordionFaqs } from "@/app/(routes)/faqs/components/AcoordionFaqs"; 


export default function PageFaqs() {
  return (
    <div className="max-w-4xl mx-auto p-6 rounded-lg shadow-md bg-background">
        <h2 className="mb-8 text-3xl">FAQS</h2>
        <div className="mb-5">
            <p>Preguntas Frecuentes (FAQs)</p>
            <p>En esta sección encontrarás respuestas a las preguntas más comunes sobre nuestros productos/servicios. Aquí podrás resolver dudas sobre características, precios, procesos de compra, soporte técnico y mucho más. Si no encuentras la respuesta que buscas, no dudes en contactarnos directamente.
            </p>
        </div>
        <AcoordionFaqs />
    </div>
  )
}
