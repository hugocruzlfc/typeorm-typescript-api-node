import { MigrationInterface, QueryRunner } from "typeorm";

export class AddRoleColumn1707326680085 implements MigrationInterface {
    name = 'AddRoleColumn1707326680085'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`users\` ADD \`role\` enum ('ADMIN', 'CUSTOMER', 'USER') NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`users\` DROP COLUMN \`role\``);
    }

}
