import { Column, Entity, PrimaryColumn } from  'typeorm' ;

@Entity()
export class Connections {

    @Column()
    SenderInterface :string;

    @Column()
    StartDate :Date;

    @Column()
    ConnectionSubtype :string;

    @PrimaryColumn()
    UniqueId :string;

    @Column()
    ConnectionType :string;

    @Column()
    Receiver :string;

    @Column()
    Filtered : number;

    @Column()
    ReceiverInterface : string;

    @Column()
    EndDate : Date;

    @Column()
    Sender : string;

    @Column()
    RfcDestFlag : boolean;

    @Column()
    id : string;

    @Column()
    _version_ : string;

}