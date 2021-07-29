import { Column, Entity, PrimaryColumn } from  'typeorm' ;

@Entity()
export class ConnectionContextData {

    @Column()
    ReceiverUser: string;

    @Column()
    ConnectionId: string;

    @Column()
    Caller: string;

    @Column()
    SenderUser: string;

    @Column()
    Calls: number;

    @Column()
    Period: Date;

    @Column()
    KBsent: number;

    @Column()
    KBread: number;

    @PrimaryColumn()
    id: string;

    @Column()
    _version_: string;

}