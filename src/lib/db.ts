import { PrismaClient } from '@/generated/prisma';
import { PrismaPg } from '@prisma/adapter-pg';

const globalForPrisma = globalThis as unknown as { prisma: PrismaClient };

let _db: PrismaClient | null = null;

function getDb(): PrismaClient {
  if (!_db) {
    if (globalForPrisma.prisma) {
      _db = globalForPrisma.prisma;
    } else {
      const adapter = new PrismaPg({
        connectionString: process.env.DATABASE_URL,
      });
      _db = new PrismaClient({ adapter });
    }
    if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = _db;
  }
  return _db;
}

// Lazy proxy so module import doesn't trigger PrismaClient construction
export const db = new Proxy({} as PrismaClient, {
  get(_, prop) {
    const client = getDb();
    const val = Reflect.get(client, prop);
    if (typeof val === 'function') {
      return val.bind(client);
    }
    return val;
  },
});
