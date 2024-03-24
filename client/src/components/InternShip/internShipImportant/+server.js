// @ts-nocheck
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

/** @type {import('./$types').RequestHandler} */

export async function POST({ request }) {
    const data = await request.formData()

    const name = data.get('name')
    const collegeName = data.get('collegeName')
    const phoneNumber = data.get('phoneNumber')
    const email = data.get('email')
    const areaofInterest = data.get('areaofInterest')
    const fieldofStudy = data.get('fieldofStudy')
    const gender = data.get('gender')
    const classMode = data.get('classMode')

    if (!name || !collegeName || !phoneNumber || !email || !areaofInterest || !fieldofStudy || !gender || !classMode) {
        return new Response(
            JSON.stringify({
                failed: true
            })
        )
    }

    try {
        let studentExists = await prisma.internshipForm.findFirst({
            where: {
                email: email,
                phoneNumber: phoneNumber
            }
        })

        if (studentExists) {
            return new Response(
                JSON.stringify({
                    ok: false,
                    message: "Email / phone number already exists"
                })
            )
        }

        const internForm = await prisma.internshipForm.create({
            data: {
                name: name,
                collegeName: collegeName,
                phoneNumber: phoneNumber,
                email: email,
                areaofInterest: areaofInterest,
                fieldofStudy: fieldofStudy,
                gender: gender,
                classMode: classMode
            }
        })
        return new Response(
            JSON.stringify({
                ok: true,
                data: internForm,
                message: "Form submitted successfully"
            })
        )
    } catch (error) {
        return new Response(
            JSON.stringify({
                ok: false,
                message: error.message
            })
        )
    }


}