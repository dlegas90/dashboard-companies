"use client"

import React from 'react'
import { Button } from '@/components/ui/button'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
  import { CirclePlus } from 'lucide-react'
import { useState } from 'react'
import { FormCreateCustomer } from '../FormCreateCustomer'


export default function HeaderCompanies() {
    const [openModalCreate, setOpenModalCreate ] = useState (false)
    
    return (
        <div className='flex items-center justify-between'>
            <h2 className='text-2xl'>List of companies</h2>

            <Dialog open={openModalCreate} onOpenChange={setOpenModalCreate}>
                <DialogTrigger asChild>
                    <Button>
                        <CirclePlus className="mr-2" />
                        Create Company
                    </Button>
                </DialogTrigger>
                <DialogContent className='sm:max-w-[625px]'>
                    <DialogHeader>
                        <DialogTitle>Create Company</DialogTitle>
                        <DialogDescription>
                            Fill out the form to create a new company.
                        </DialogDescription>
                    </DialogHeader>
                    <FormCreateCustomer setOpenModalCreate={setOpenModalCreate} />
                </DialogContent>
            </Dialog>
        </div>
    )
}