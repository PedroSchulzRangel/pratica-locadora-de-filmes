import prisma from '../../src/database/index';

export async function createUser(){
return await prisma.user.create({
    data: {
        firstName: "João",
        lastName: "Moreira",
        email: "email@email.com",
        cpf: "12345678910",
        birthDate: new Date('06/13/1980')

    }
})
}