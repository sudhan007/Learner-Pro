import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

/** @type {import('./$types').Actions} */
export const actions = {
  login: async ({ request }) => {
    const data = await request.formData();

    const phone = data.get("phoneNumber") || "";

    const user = await prisma.user.findFirst({
      where: {
        phoneNumber: phone.toString(),
      },
    });

    if (user) {
      return {
        user,
      };
    }

    const newUser = await prisma.user.create({
      data: {
        phoneNumber: phone.toString(),
      },
    });
    return {
      newUser,
    };
  },
};
// wdjwdw