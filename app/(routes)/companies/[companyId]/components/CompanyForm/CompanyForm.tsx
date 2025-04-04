"use client"
/* FOrmulario Para la actualizacion del id de la company */

import { useRouter } from "next/navigation"
import { useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import axios from "axios"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Toast } from "@/components/ui/toast"

import { UploadButton } from "@/utils/uploadthing"

import { CompanyFormProps } from "./CompanyForm.type"
import { formSchema } from "./CompanyForm.form"
import { toast } from "@/hooks/use-toast"


export function CompanyForm(props: CompanyFormProps) {

    const { company } = props
    const router = useRouter ()
    const [photoUploaded, setPhotoUploaded] = useState (false)
    const [loading, setLoading] = useState(false);

    
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues:{
            name: company.name,
            description: company.description,
            country: company.country,
            website: company.website,
            phone: company.phone,
            code: company.code,
            profileImage: company.profileImage || "",

        }
    })

    const onSubmit = async (values: z.infer<typeof formSchema>) =>{
        console.log("on submit")
        setLoading(true);
        try {
            await axios.patch(`/api/company/${company.id}`, values);
            toast ({
                title: "Company updated!"
            })
            router.refresh()
        } catch (error) {
            toast ({
                title: "Something went wrong",
                variant: "destructive"
            })
        } finally {
        setLoading(false); 
    }
    }

    return (
        <Form { ...form }>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <div className="grid grid-cols-2 gap-3">
                    <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Company name</FormLabel>
                                <FormControl>
                                    <Input placeholder="Company name..." type="text" {...field} />
                                </FormControl>
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="country"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Country</FormLabel>
                                <Select
                                    onValueChange={field.onChange}
                                    defaultValue={field.value}
                                >

                                    <FormControl>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Select country" />
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
                    <FormField
                        control={form.control}
                        name="website"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Website</FormLabel>
                                <FormControl>
                                    <Input placeholder="www.tupagina.com" type="text" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Phone</FormLabel>
                                <FormControl>
                                    <Input placeholder="11 0000-0000" type="number" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="code"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Code</FormLabel>
                                <FormControl>
                                    <Input placeholder="123456" type="text" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="profileImage"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>CIF / NIF</FormLabel>
                                <FormControl>
                                    <div>
                                        {photoUploaded ? (
                                            <p className="text-sm">Image uploaded</p>
                                        ): (
                                            <UploadButton
                                                className="bg-slate-600/20 text-slate-800 rounded-lg outline-dotted outline-2" 
                                                {... field}
                                                endpoint="profileImage"
                                                onClientUploadComplete={(res) => {
                                                    form.setValue("profileImage", res?.[0].url)
                                                    setPhotoUploaded(true)
                                                }}
                                                onUploadError={(error: Error) => {
                                                    Toast ({title: "Error de uploaded"})
                                                }}
                                            />
                                        )}
                                    </div>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="description"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Company Description</FormLabel>
                                <FormControl>
                                    <Textarea placeholder="description...." {...field}  value={form.getValues().description ?? ''} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>
                <Button type="submit">Edit Company</Button>
            </form>
        </Form>
    )
}
