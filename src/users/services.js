import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
export const createUser = async (data) => {
    return await prisma.user.create({
        data,
      });
}

export const login = async (username) => {
    return username
}

/* export const getUser = async (id) => {
    return id
} */
export const getUser = async (id) => {
    return await prisma.user.findUnique({
        where: {
            id
        }, include: {
            tasks: {
                where: {
                    completed: true
                }
            },
            _count: {
                select: {
                    tasks: true
                }
            }
          }
    })
}


