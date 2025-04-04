import { CustomIcon } from "@/components/CustomIcon";
import { Building } from "lucide-react";
import { CustomersTable } from "../CustomersTable";

export  function LasCustomers() {
  return (
    <div className="shadow-sm bg-background rounded-lg p-5">
        <div className="flex gap-x-2 items-center">
            <CustomIcon icon={Building} />
            <p className="text-lg">Last Customers</p>
        </div>
        <div className="">
            <CustomersTable />
        </div>
    </div>
  )
}
