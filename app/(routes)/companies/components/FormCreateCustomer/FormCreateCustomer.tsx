// FOrmulario Para company 

"use client"

import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button";
import axios from "axios" 
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
  } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { FormCreateCustomerProps } from "./FormCreateCustomer.type";
import { useState } from "react";
import { Select, SelectItem, SelectContent, SelectTrigger, SelectValue } from "@/components/ui/select";
import { UploadButton } from "@/utils/uploadthing";
import { toast } from "@/hooks/use-toast";
import { useRouter } from "next/navigation";

const formSchema = z.object({
    name: z.string(),
    country: z.string(),
    website: z.string().min(2),
    phone: z.string().min(6),
    code: z.string().min(6),
    profileImage: z.string(),
  })



export  function FormCreateCustomer(props:FormCreateCustomerProps) {
    const {setOpenModalCreate} = props
    const router = useRouter ()
    const [photoUploaded, setPhotoUploaded] = useState(false)

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
            defaultValues: {
                name: "",
                country: "",
                website: "",
                phone: "",
                code: "",
                profileImage: "", 
            },
    })
    
    const {isValid} = form.formState 

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        try {
            axios.post("/api/company", values)
            toast ({title: "Company created"})
            router.refresh ()
            setOpenModalCreate(false)

        } catch (error) {
            toast ( {
                title: "Something went...",
                variant: "destructive"
           } )
        }
    }
    


    return (
    <div>
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <div className="grid grid-cols-2 gap-3">
                    {/* name */}
                    <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem>
                        <FormLabel>Company name</FormLabel>
                        <FormControl>
                            <Input placeholder="company name..." type="text" {...field} />
                        </FormControl>
                        <FormMessage />
                        </FormItem>
                    )}
                    />
                    {/* Country */}
                    <FormField
                    control={form.control}
                    name="country"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Country</FormLabel>
                            <Select value={field.value} onValueChange={field.onChange}>
                                <FormControl>
                                    <SelectTrigger>
                                        <SelectValue placeholder="España" />
                                    </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                    <SelectItem value="spain">España</SelectItem>
                                    <SelectItem value="united-kingdom">United Kingdom</SelectItem>
                                    <SelectItem value="portugal">Portugal</SelectItem>
                                    <SelectItem value="grecia">Grecia</SelectItem>
                                    <SelectItem value="italia">Italia</SelectItem>
                                </SelectContent>
                            </Select>
                            <FormMessage />
                        </FormItem>
                    )}
                    />
                    {/* Website */}
                    <FormField
                    control={form.control}
                    name="website"
                    render={({ field }) => (
                        <FormItem>
                        <FormLabel>Website</FormLabel>
                        <FormControl>
                            <Input placeholder="www.ondiss.com.ar" type="text" {...field} />
                        </FormControl>
                        <FormMessage />
                        </FormItem>
                    )}
                    />
                    {/* Phone */}
                    <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                        <FormItem>
                        <FormLabel>Phone</FormLabel>
                        <FormControl>
                            <Input placeholder="+54 9 11 0000 0000" type="number" {...field} />
                        </FormControl>
                        <FormMessage />
                        </FormItem>
                    )}
                    />
                    {/* code */}
                    <FormField
                    control={form.control}
                    name="code"
                    render={({ field }) => (
                        <FormItem>
                        <FormLabel>Code</FormLabel>
                        <FormControl>
                            <Input placeholder="1234" type="text" {...field} />
                        </FormControl>
                        <FormMessage />
                        </FormItem>
                    )}
                    />
                    {/* profileImage */}
                    <FormField
                    control={form.control}
                    name="profileImage"
                    render={({ field }) => (
                        <FormItem>
                        <FormLabel>Profile Image</FormLabel>
                        <FormControl>
                            {photoUploaded ? (
                                <p className="text-sm">Image uploading</p>
                            ) : (
                           
                            <UploadButton
                                className="rounded-lg bg-slate-600/20 text-slate-800 outline-dotted ouline-3"
                                {...field}
                                endpoint="profileImage"
                                onClientUploadComplete={(res: any) => {
                                    if (res && res[0]?.url) {
                                        form.setValue("profileImage", res[0].url);
                                        toast({
                                            title: "Photo uploaded"
                                        })
                                        setPhotoUploaded(true);
                                    } else {
                                        console.log("Error: Missing image URL in the response", res);
                                    }
                                }}
                                onUploadError={(error: Error) => {
                                    toast({
                                        title: "Error uploading photo"
                                    })
                                }}
                            />
                        )}
                        </FormControl>
                        <FormMessage />
                        </FormItem>
                    )}
                    />
                </div>
                <Button type="submit" >Submit</Button>
                {/* <Button type="submit" disabled={!isValid}>Submit</Button> */}

            </form>
        </Form>
    </div>
    )
}
