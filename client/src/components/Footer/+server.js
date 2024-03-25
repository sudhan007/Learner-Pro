// @ts-nocheck
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

/** @type {import('./$types').RequestHandler} */


export async function POST({ request }) {
    const data = await request.formData()

    const email1 = data.get('email1')
    try {

        const newemail = await prisma.footerForm.create({
            data: {
                email1: email1.toString()
            }
        })

        return new Response(JSON.stringify({
            ok: true,
            data: newemail
        }))
    } catch (error) {
        return new Response(JSON.stringify({
            ok: false,
            message: error.message
        }))
    }

}