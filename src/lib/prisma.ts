// This file will create a Prisma singleton so that we don't have 10 different active prisma clients!
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
export default prisma