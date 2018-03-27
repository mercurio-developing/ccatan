import { EventEmitter, Injectable } from '@angular/core';

@Injectable()

export class RoomService {

    rooms = [
            {
                "name":"bungalow",
                "type":"Bungalow Familiar",
                "url":"assets/img/rooms-card/rooms-card-1.jpg",
                "description":"Es una casa de campo construida con materiales de la zona piedra, madera y barro. Combinando la elegancia con lo rustico.",
                "extend":"Cuenta con cocina, sala comedor, dormitorio principal y de huespedes. Equipado con cama matrimonial y tres simples, un baño amplio con ducha caliente(terma a gas)",
                "photos":[
                    '../assets/img/rooms/bungalow-1.jpg',
                    '../assets/img/rooms/bungalow-2.jpg',
                    '../assets/img/rooms/bungalow-3.jpg',
                    '../assets/img/rooms/bungalow-4.jpg',
                    '../assets/img/rooms/bungalow-5.jpg',
                    '../assets/img/rooms/bungalow-6.jpg'
                ],
            },
            // {
            //     "name": "cabaña",
            //     "type": "Cabaña de Lux",
            //     "url": "assets/img/rooms-card/rooms-card-2.jpg",
            //     "description": "Cabaña con diseño exclusivo, construida con materiales de la zona. Ofreciendo un ambiente muy calido y placentero.",
            // },
                {
                "name":"matrimonial",
                "type":"Matrimonial c/ balcon",
                "url":"assets/img/rooms-card/rooms-card-3.jpg",
                "description":"Hermosa habitacion amplia con balcon desde la cual puedes disfrutar de los paisajes y las majestuosas montañas que nos rodean.",
                "extend":"Cuenta con baño privado, amplio y terma a gas.",
                "photos":[
                    '../assets/img/rooms/matri-1.jpg',
                    '../assets/img/rooms/matri-2.jpg',
                    '../assets/img/rooms/matri-3.jpg',
                    '../assets/img/rooms/matri-4.jpg'
                ], 
            },
            {
                "name":"familiar",
                "type":"Familiar",
                "url":"assets/img/rooms-card/rooms-card-4.jpg",
                "description":"Linda habitacion con ventanas amplias y vistas de los esplendidos jardines de Ccatan, iluminacion natural y agua caliente.",
                "photos":[
                    '../assets/img/rooms/double-1.jpg',
                    '../assets/img/rooms/double-2.jpg',
                    '../assets/img/rooms/double-3.jpg'
                ], 
            },
        ]
            
    allRooms = []
    getRooms(){
        this.allRooms = this.allRooms.concat(this.rooms)
        return this.allRooms;
    }
    getCategory(index) {
        return this.rooms[index];
    }
}