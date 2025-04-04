import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";

export async function DELETE(req: Request, {params}: { params: {eventId: string }}){
   try{
        const {userId} = auth()

        if (!userId) {
            return new NextResponse("unauthorized", { status: 401 });
        }

        const deleteEvent = await db.event.delete({
            where: {
                id: params.eventId,
            }
        })

        return NextResponse.json(deleteEvent);

   }catch (error){
    console.log ("DELETE EVENT", error);
    return new NextResponse("internal error", {status: 500})
   } 
}