// @ts-nocheck
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

/** @type {import('./$types').RequestHandler} */

export async function POST({ request }) {
  const pathname = new URL(request.url).pathname;
  console.log(pathname, "pathname")

  if (pathname === "/workshopform") {
    const data = await request.formData();

    const name = data.get("name");
    const email = data.get("email");
    const phoneNumber = data.get("phoneNumber");
    const collegeName = data.get("collegeName");
    const currentPosition = data.get("currentPosition");


    if (!name || !email || !phoneNumber || !currentPosition || !collegeName) {
      return new Response(
        JSON.stringify({
          failed: true,
        })
      )
    }

    try {
      let studentExists = await prisma.workshopForm.findFirst({
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

      const newStudent = await prisma.workshopForm.create({
        data: {
          name: name.toString(),
          email: email.toString(),
          phoneNumber: phoneNumber.toString(),
          collegeName: collegeName.toString(),
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
  else if (pathname === "/workshopform") {
    return new Response(JSON.stringify({
      ok: true
    }))
  }


}