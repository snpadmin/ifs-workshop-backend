import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class Systems {

    @Column()
    SystemPurpose: string;

    @Column()
    CentralBox: boolean;

    @Column()
    SystemUsage: string;

    @Column()
    CreateSheet: boolean;

    @Column()
    EndDate: Date;

    @Column()
    IsBusinessSystem: boolean;

    @Column()
    Name: string;

    @Column()
    SystemLocation: string;

    @Column()
    IsThirdParty: boolean;

    @Column()
    StartDate: Date;

    @PrimaryColumn()
    id: string;

    @Column()
    _version_: string;

}