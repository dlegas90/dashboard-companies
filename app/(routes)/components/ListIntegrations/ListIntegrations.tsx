import { CustomIcon } from "@/components/CustomIcon"
import {List} from "lucide-react"
import { TableIntegrations } from "../TableIntegrations"


export function ListIntegrations() {
  return (
    <div className="shadow-sm bg-background rounded-lg p-5 flex-1 ml-2">
        <div className="flex gap-x-2 items-center">
            <CustomIcon icon={List}/>
            <p className="text-xl">List of integrations</p>
        </div>
        <div className="shadow-sm bg-background rounded-lg p-5 flex-1 ,l-2">
            <TableIntegrations />
        </div>
    </div>
  )
}
