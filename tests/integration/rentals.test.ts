import supertest from 'supertest';
import app from "../../src/app";
import httpStatus from "http-status";
import { cleanDb } from "../utils/index";
import { createRental } from '../factories/rentals-factory';
import { createUser } from '../factories/users-factory';
import { timeStamp } from 'console';

beforeEach(async () => {
  await cleanDb();
})

const server = supertest(app);

describe("GET /rentals integration tests", () => {
  it("should respond with status 200 and with a list of rentals", async () => {
    
    const user = await createUser();
    await createRental(user.id);
    
    const rentals = await server.get("/rentals");

    expect(rentals.status).toBe(httpStatus.OK);
  })
});