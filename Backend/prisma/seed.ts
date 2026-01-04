import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
    console.log('🌱 Iniciando seed de base de datos...\n');

    // Limpiar base de datos
    console.log('🗑️  Limpiando base de datos...');
    await prisma.registroAuditoria.deleteMany();
    await prisma.pagoChofer.deleteMany();
    await prisma.gastoViaje.deleteMany();
    await prisma.mantenimiento.deleteMany();
    await prisma.comprobante.deleteMany();
    await prisma.viaje.deleteMany();
    await prisma.chofer.deleteMany();
    await prisma.vehiculo.deleteMany();
    await prisma.material.deleteMany();
    await prisma.cliente.deleteMany();
    await prisma.usuario.deleteMany();
    console.log('✅ Base de datos limpiada\n');

    // Solo crear usuarios
    console.log('👤 Creando usuarios...');
    const passwordHash = await bcrypt.hash('admin123', 10);

    await prisma.usuario.create({
        data: {
            nombreUsuario: 'admin',
            nombreCompleto: 'Administrador Sistema',
            email: 'admin@transporte.ec',
            passwordHash: passwordHash,
            rol: 'ADMIN',
            activo: true
        }
    });

    await prisma.usuario.create({
        data: {
            nombreUsuario: 'auditor',
            nombreCompleto: 'Usuario Auditor',
            email: 'auditor@transporte.ec',
            passwordHash: passwordHash,
            rol: 'AUDITOR',
            activo: true
        }
    });

    console.log('✅ 2 usuarios creados\n');
    console.log('='.repeat(40));
    console.log('🔐 CREDENCIALES:');
    console.log('   admin / admin123');
    console.log('   auditor / admin123');
    console.log('='.repeat(40));
}

main()
    .catch((e) => {
        console.error('❌ Error:', e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
