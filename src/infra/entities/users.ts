import { Entity, Column, PrimaryColumn } from 'typeorm'

@Entity('users', { schema: 'public' })
export class Users {
    @PrimaryColumn()
    id!: number;

    @Column()
    name!: string;
}
