import { DocumentReference } from "@angular/fire/firestore"

export interface UserData {
    uid: string
    username:string
    image:string
    weapon:DocumentReference
    armor:DocumentReference
    accessory_one:DocumentReference
    accessory_two:DocumentReference
    level:number
    max_hp:number
    strength:number
    dexterity:number
    intelligence :number
    fait:number
}
