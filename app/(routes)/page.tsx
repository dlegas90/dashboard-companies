import { Button } from "@/components/ui/button"
import { UserButton } from "@clerk/nextjs"
import { BookOpenCheck, UsersRound, Waypoints } from "lucide-react"
import { CardSummary } from "./components/CardSummary/CardSummary"
import { LasCustomers } from "./components/LastCustomers"
import { TotalSuscribers } from "./components/TotalSuscribers/TotalSuscribers"
import { SalesDistributor } from "./components/SalesDistributors"
import { ListIntegrations } from "./components/ListIntegrations"


export const dataCardSummary = [
    {
    icon: UsersRound,
    total: "12.450",
    average: 15,
    title: "Soy la primer Card",
    tooltipText: "Se creo el 28 de enero de 2025",
    },  
    {
        icon: Waypoints,
        total: "12.450",
        average:40,
        title: "Soy la segunda Card",
        tooltipText: "Se creo el 31 de enero de 2025",
    },  
    {
        icon: BookOpenCheck,
        total: "12.450",
        average: 85,
        title: "Soy la tercera Card",
        tooltipText: "Se creo el 31 de enero de 2025",
    },  
]

export default function Home() {
    return (
        <>
        <div>
            {/* <UserButton></UserButton> */}
            <h2 className="text-2xl mb-4">Dashboard</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"> 
                {dataCardSummary.map (({icon, total, average, title, tooltipText}) => (
                    <CardSummary
                    key={title}
                    icon={icon}
                    total={total}
                    average={average}
                    title={title}
                    tooltipText= {tooltipText}
                    />
                ))}
            </div>
            <div className="grid grid-cols-1 xl:grid-cols-2 md:gap-x-10 mt-12 " >
                <LasCustomers/>
                <SalesDistributor/>
            </div>
            <div className="flex-col justify-center mt-12 md:gap-x-10 xl:flex xl:flex-row gap-y-4 md:gap-y-0 md:mb-10">
                <TotalSuscribers />
                <ListIntegrations />
            </div>
        </div>
    </>
    )
}

