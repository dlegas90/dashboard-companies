
import { db } from "@/lib/db"
import { auth } from "@clerk/nextjs"
import {redirect} from "next/navigation"
import CompanyInformation from "./components/CompanyInformation/CompanyInformation"
import Header from "./components/Header/Header"
import { FooterCompany } from "./components/FooterCompany"

export default async function companyIdPage({ params } : {params: { companyId : string } }) {
    
    console.log(params.companyId)
    const {userId} = auth ()

    if (!userId) {
        return redirect ("/")
    }

    const company = await db.company.findUnique ({
        where: {
            id: params.companyId,
            userId
        }
    })

    if (!company) {
        return redirect ("/")
    }
       
    return (
        <div>
            <Header />
            <CompanyInformation company={company} />
            <FooterCompany  companyId={company.id}/>
        </div>
    )
}
