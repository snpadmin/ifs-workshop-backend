import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class StatisticData {

    @PrimaryColumn()
    UniqueId: string;

    @Column()
    CType: string;

    @Column()
    Calls: number;

    @Column()
    Period: Date;

    @Column()
    KBsent: number;

    @Column()
    KBread: number;

    @Column()
    id: string;

    @Column()
    _version_: string;

}