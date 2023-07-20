import prisma from '../../src/database/index';

export async function createRental(userId: number){
    return await prisma.rental.create({
        data: {
          userId,
          endDate: new Date('07/23/2023'),
        }
})
}