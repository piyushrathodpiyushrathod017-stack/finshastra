import 'dotenv/config';
import { PrismaClient } from '../src/generated/prisma';
import { PrismaPg } from '@prisma/adapter-pg';
import bcrypt from 'bcryptjs';

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL });
const prisma = new PrismaClient({ adapter });

const DEFAULT_ADMIN = {
  email: process.env.ADMIN_EMAIL || 'piyush1111@gmail.com',
  name: 'Super Admin',
  password: process.env.ADMIN_PASSWORD || 'piyush@172762008',
  role: 'SUPER_ADMIN' as const,
};

async function main() {
  console.log('Seeding database...');

  const existingAdmin = await prisma.adminUser.findUnique({
    where: { email: DEFAULT_ADMIN.email },
  });

  if (existingAdmin) {
    console.log('Admin user already exists, skipping...');
    return;
  }

  const passwordHash = await bcrypt.hash(DEFAULT_ADMIN.password, 12);

  const admin = await prisma.adminUser.create({
    data: {
      email: DEFAULT_ADMIN.email,
      name: DEFAULT_ADMIN.name,
      passwordHash,
      role: DEFAULT_ADMIN.role,
      isActive: true,
    },
  });

  console.log('Created admin user:', {
    id: admin.id,
    email: admin.email,
    name: admin.name,
    role: admin.role,
  });

  console.log('\nDefault credentials:');
  console.log('Email:', DEFAULT_ADMIN.email);
  console.log('Password:', DEFAULT_ADMIN.password);
  console.log('\n⚠️  Change these credentials in production!');
}

main()
  .catch((e) => {
    console.error('Seed failed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
