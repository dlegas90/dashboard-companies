import React from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

import { dataFaqs } from "./AcoordionFaqs.data";

export  function AcoordionFaqs() {
    return (
        <>
        <div>
            <Accordion type="single" collapsible>   
                {dataFaqs.map(({ id, question, answer }) => (
                    <AccordionItem key={id} value={question}>
                        <AccordionTrigger>{question}</AccordionTrigger>
                        <AccordionContent>{answer}</AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>       
        </div>
        </>
    )
}
