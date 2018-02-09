import { Component, OnInit } from '@angular/core';
import { RoomService } from './room.service';
import { ActivatedRoute, Router } from '@angular/router'

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
	styleUrls: ['./rooms.component.css'],
	providers:[RoomService]
})
export class RoomsComponent implements OnInit {

	showGallery;
	rooms;
	photosRoom;
	photos;
  selectedPhoto: string;
  enableView:boolean;
	reserverRoom:String;
	showRooms:boolean;

  constructor(private router:Router,private route:ActivatedRoute, private roomService:RoomService) { }
// 
  ngOnInit() {
	this.showRooms = true;
	this.showGallery = false;
	this.rooms = this.roomService.getRooms()
  }

	reserveRoom(room){
		this.reserverRoom = room.toElement.parentNode.parentNode.children[1].children[0].innerText
		this.router.navigate(['/reserve'],{queryParams:{room: this.reserverRoom}})
	}


  showSelected(index){
	this.showGallery = true;
	this.photosRoom = this.roomService.getCategory(index)
	this.photos = this.photosRoom.photos
	}

	back(){
		this.showGallery = false;	
	}

	openSlide(photo){
    this.enableView = true;
    this.selectedPhoto = photo.srcElement.attributes.src.value
    return this.selectedPhoto;
  }

  moveToLeft(){
      for(let i = 0; i < this.photos.length;i++){
        if (this.photos[i] === this.selectedPhoto){
          if (this.selectedPhoto != this.photos[0]){
          this.selectedPhoto = this.photos[i - 1];
          return this.selectedPhoto;
					}
				}
			}
		}

  moveToRight(){
      for (let i = 0; i < this.photos.length; i++) {
        if (this.photos[i] === this.selectedPhoto) {
          let limit = this.photos.length;
          if (this.selectedPhoto != this.photos[limit - 1]) {
          this.selectedPhoto = this.photos[i + 1];
          return this.selectedPhoto;
					}
				}
			}
		}
	}
