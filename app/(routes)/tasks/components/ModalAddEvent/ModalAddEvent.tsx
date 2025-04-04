"use client"
import { Dialog, DialogHeader, DialogContent, DialogTitle  } from "@/components/ui/dialog";
import { ModalAddEventProps } from "./ModalAddEvent.type";
import { FormEvent } from "../FormEvent";

export  function ModalAddEvent(props: ModalAddEventProps) {
    const {open, setOpen, companies, setNewEvent, setOnSaveNewEvent} = props

        return (
            <Dialog open={open} onOpenChange={setOpen}>
                <DialogContent className="sm-max-w-[425px]">
                    <DialogHeader>
                        <DialogTitle>Add a new event</DialogTitle>
                    </DialogHeader>
                    <FormEvent
                    setNewEvent={setNewEvent}
                    setOpen={setOpen}
                    companies={companies}
                    setOnSaveNewEvent={setOnSaveNewEvent}
                    />
                </DialogContent>
            </Dialog>
    )
}
