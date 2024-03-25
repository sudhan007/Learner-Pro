// @ts-nocheck
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

/** @type {import('./$types').Actions} */

export async function POST({ request }) {
    const data = await request.formData();

    const name = data.get("name");
    const email = data.get("email");
    const phoneNumber = data.get("phoneNumber");
    const certificateName = data.get("certificateName");
    const currentPosition = data.get("currentPosition");


    if (!name || !email || !phoneNumber || !certificateName || !currentPosition) {
        return new Response(
            JSON.stringify({
                failed: true,
            })
        )
    }

    try {
        let studentExists = await prisma.webinarForm.findFirst({
            where: {
                phoneNumber: phoneNumber,
                email: email
            },
        })


        if (studentExists) {
            return new Response(
                JSON.stringify({
                    ok: false,
                    message: "Email / Phone number already exists"
                })
            )
        }

        const newStudent = await prisma.webinarForm.create({
            data: {
                name: name.toString(),
                email: email.toString(),
                phoneNumber: phoneNumber.toString(),
                certificateName: certificateName.toString(),
                currentPosition: currentPosition.toString(),
            },
        })
        return new Response(JSON.stringify({
            ok: true,
            message: "Registration successfully"
        }))

    } catch (error) {
        return new Response(JSON.stringify({
            ok: false,
            message: error.message
        }))
    }
}

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

// kwndw