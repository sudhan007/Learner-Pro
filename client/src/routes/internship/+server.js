// @ts-nocheck
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

/** @type {import('./$types').RequestHandler} */

export async function POST({ request }) {
    const pathname = request.url
    const parts = pathname.split('/').filter(part => part !== '');
    const lastEndpoint = parts[parts.length - 1];
    console.log(lastEndpoint, "last pooit");

    console.log(lastEndpoint == "internshipform", "true orffff");
    console.log(lastEndpoint == "faqquery", "wdwjdkw")
    if (lastEndpoint == "internshipform") {
        try {
            const data = await request.formData();

            const name = data.get("name");
            const collegeName = data.get("collegeName");
            const phoneNumber = data.get("phoneNumber");
            const email = data.get("email");
            const areaofInterest = data.get("areaofInterest");
            const fieldofStudy = data.get("fieldofStudy");
            const gender = data.get("gender");
            const classMode = data.get("classMode");


            console.log(name, collegeName, phoneNumber, email, areaofInterest, fieldofStudy, gender, "sdlkheif")
            if (!name || !collegeName || !phoneNumber || !email || !areaofInterest || !fieldofStudy || !gender || !classMode) {
                return new Response(
                    JSON.stringify({
                        failed: true,
                    })
                )
            }

            let studentExists = await prisma.internshipForm.findFirst({
                where: {
                    email: email,
                    phoneNumber: phoneNumber
                }
            })

            if (studentExists) {
                return new Response(JSON.stringify({
                    ok: false,
                    message: "Email / Phone number already exists"
                }))
            }

            const newStudent = await prisma.internshipForm.create({
                data: {
                    name: name.toString(),
                    collegeName: collegeName.toString(),
                    phoneNumber: phoneNumber.toString(),
                    email: email.toString(),
                    areaofInterest: areaofInterest.toString(),
                    fieldofStudy: fieldofStudy.toString(),
                    gender: gender.toString(),
                    classMode: classMode.toString(),
                },
            })
            return new Response(JSON.stringify({
                ok: true,
                message: "Registration successfully",
                data: newStudent
            }))

        } catch (error) {
            return new Response(JSON.stringify({
                ok: false,
                message: error.message
            }))
        }
    } else if (lastEndpoint == "faqquery") {
        try {
            const data = await request.formData();

            const query = data.get("query");

            const newQuery = await prisma.faqQuestions.create({
                data: {
                    query: query.toString()
                }
            })

            return new Response(JSON.stringify({
                ok: true,
                message: "Query submitted"
            }))

        } catch (error) {
            return new Response(JSON.stringify({ ok: false, message: error.message }))
        }

    }

}


