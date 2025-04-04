import { Separator } from "@/components/ui/separator"
import { SidebarItem } from "../SidebarItem/SidebarItem"
import { dataGeneralSidebar, dataSupportSidebar, dataToolsSidebar } from "./SidebarRoutes.data";

export  function SidebarRoutes() {
  return (
    <div className="flex flex-col justify-between h-full">
        <div>
            <div className="p-2 md:p-6">
                <p>GENERAL</p>
                {dataGeneralSidebar.map((item) => (
                    <SidebarItem key={item.label} item={item} />
                ))}

            </div>
            <Separator />
            <div className="p-2 md:p-6">
                <p>TOOLS</p>
                {dataToolsSidebar.map((item) => (
                    <SidebarItem key={item.label} item={item} />
                ))}

            </div>
            <Separator />
            <div className="p-2 md:p-6">
                <p>SUPPORT</p>
                {dataSupportSidebar.map((item) => (
                    <SidebarItem key={item.label} item={item} />
                ))}

            </div>
           
        </div>
    </div>
  )
}
