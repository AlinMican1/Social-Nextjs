import { NextResponse } from "next/server"
import { prisma } from "../../../lib/prisma"
import {hash} from "bcrypt"

export async function POST(req: Request){
    try{
        const {name,email,password} = await req.json()   
        const hashed = await hash(password,12)
    
        const user = await prisma.user.create({
            data:{
                name,
                email,
                password:hashed
                
            },
            include: {
                accounts: true
              }
        })
    
        return NextResponse.json({
            user:{
                email: user.email,
                name: user.name,
            }
        })
    }catch (err: any){
        return new NextResponse(JSON.stringify({
            error: err.message
        }),{
            status:500
        }
       
    )}
   
}