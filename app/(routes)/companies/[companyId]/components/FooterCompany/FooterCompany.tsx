"use client"
import { useRouter } from "next/navigation";
import { FooterCompanyProps } from "./footerCompany.type";
import axios from "axios";
import { Trash } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Toast } from "@/components/ui/toast";

export  function FooterCompany(props: FooterCompanyProps) {
    const { companyId } = props
    const router = useRouter ()

    const onDeleteCompany = async () => {
        console.log ("delete")
        try{
            axios.delete(`/api/company/${companyId}`)
            Toast ({
                title: "Company delete"
            })
            
            router.push("/companies")

        }catch (error){
            Toast({
                title: "Something went wrong",
                variant: "destructive"
            })
        }
    }

    
    return (
        <div className="flex justify-end mt-5">
            <Button variant="destructive" onClick={onDeleteCompany}>
                <Trash className="w-4 h-4 mr-2" />
                Remove Company
            </Button>
        </div>
    )
}
