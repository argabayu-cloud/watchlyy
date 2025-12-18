import { PrismaClient } from "@prisma/client";

let prisma;
// Prevent creating multiple PrismaClient instances in development (HMR)
if (process.env.NODE_ENV === "production") {
  prisma = new PrismaClient();
} else {
  if (!global.prisma) {
    global.prisma = new PrismaClient();
  }
  prisma = global.prisma;
}

export default prisma;
