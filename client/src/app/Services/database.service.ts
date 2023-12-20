import { Injectable } from '@angular/core';
import { User } from '../Models/user';
import { Printer } from '../Models/printer';
import { Product } from '../Models/product';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  private _users: User[] = [
    {email: 'roei910@gmail.com', password: '123456789'},
    {email: 'litalalta@gmail.com', password:'123456789'}
  ];

  private _products: Product[] = [
    {
      name: 'Deburring Tool Case Print In Place',
      link: 'https://www.printables.com/model/635816-deburring-tool-case-print-in-place',
      images: [{
        src:'https://media.printables.com/media/prints/635816/images/5035377_d0c3f4a9-e416-4f77-b1ca-ef6761434728_766b8688-ee0d-4faf-bb11-1ece4db74960/tempimagevlbddd.gif', 
        alt:'deburring tool case picture'
        },
      ]
    },
    {
      name: 'tablet / laptop stand',
      link: 'https://www.crealitycloud.com/model-detail/64567cd1a49310c87671d1b6',
      images: [{
        src:'../../assets/products/tablet-laptop-stand.png', 
        alt:'screenshot of cad 3d design'
        },
      ]
    },
    {
      name: 'Caliper Case Print In Place',
      link: 'https://www.printables.com/model/635819-caliper-case-print-in-place',
      images: [{
        src:'https://media.printables.com/media/prints/635819/images/5035533_d8f741be-d6dc-4efa-9469-0638f14eeca6_8b7bfef6-743d-42b5-a281-37c5a07eeea6/tempimagezjfyt2.gif', 
        alt:'ali express caliper case picture'
        },
        {
          src: 'https://media.printables.com/media/prints/635819/images/5035532_cff66759-3899-415a-a18c-9c6da94c0069_e24880b5-0eed-42cf-9c01-593f41c9ef29/tempimageutixfz.gif',
          alt: 'image of the case closed'
        }
      ]
    },
    {
      name: 'Mac mini - wall mount and desk stand',
      link: 'https://www.printables.com/model/629195-mac-mini-wall-mount-and-desk-stand',
      images: [{
        src:'https://media.printables.com/media/prints/629195/images/5035481_ffe5690e-4708-4d23-b42d-9ecb9a63510c_280adb14-3465-4040-9d74-8e9915129b0d/tempimageztkesj.gif', 
        alt:'picture of mac mini mounted on wall'
        },
      ]
    },
    {
      name: 'Creality k1 door handle replacement',
      link: 'https://www.printables.com/model/635823-creality-k1-door-handle-replacement',
      images: [{
        src:'https://media.printables.com/media/prints/635823/images/5035456_dfb4a2ae-e071-4102-82f0-0aefbe16d5d3_89c27678-8a19-425c-b37d-d6544d53ea16/tempimagesrjgmw.gif', 
        alt:'creality k1 door handle picture mounted on the closing top of the machine'
        },
        {
          src: 'https://media.printables.com/media/prints/635823/images/5035455_a542f559-c3ee-4c97-98b8-0f5ba49b3c14_3b01220a-f572-4212-a454-304a764440d7/tempimagejm9djd.gif',
          alt: 'close image of the door handle'
        }
      ]
    },
    {
      name: 'Creality K1 Door Hanger 90 degree',
      link: 'https://www.printables.com/model/635822-creality-k1-door-hanger-90-degree',
      images: [{
        src:'https://media.printables.com/media/prints/635822/images/5035409_2de5db53-ae26-4598-82e8-dc6f95b4189a_9af3f73b-d914-46c6-97d8-07687836888c/tempimagebx8omu.gif', 
        alt:'printer door open with the printed door hanger'
        },
        {
          src: 'https://media.printables.com/media/prints/635822/images/5035410_a59782f2-7dee-4e43-80fd-ff4546eb7a3e_db5811be-7501-4ace-85c5-b84f57ea18fd/tempimage50wima.gif',
          alt: 'part on the printer heated bed'
        }
      ]
    },
    {
      name: 'Glock Mag Side Pouch',
      link: 'https://www.printables.com/model/637555-glock-mag-side-pouch',
      images: [{
        src:'https://media.printables.com/media/prints/637555/images/5093383_71171e74-b887-4d89-828a-1c8f7edad69c_445571da-0bf4-4bad-90f6-c2f0b7c9f271/tempimagefl80qt.gif', 
        alt:'image of glock 19 magazine inside the pouch'
        }
      ]
    },
    {
      name: 'Ender-3 V2, creality camera mount for x axis',
      link: 'https://www.crealitycloud.com/model-detail/63b46a644c9377069867d897',
      images: [{
        src:'https://pic2-cdn.creality.com/crealityCloud/common/b302e2f703bf4cceba04d52f7b9054ac.jpeg', 
        alt:'picture of the cad model for the camera mount'
        }
      ]
    },
    {
      name: 'tablet laptop stand',
      link: 'https://www.crealitycloud.com/model-detail/64567cd1a49310c87671d1b6',
      images: [{
        src:'https://pic2-cdn.creality.com/model/85c37346710ebc2dba53150175f3b32d.jpg', 
        alt:'image of the stand with laptop and tablet mounted'
        },
        {
          src: 'https://pic2-cdn.creality.com/crealityCloud/common/a559829ed75bff7ee58545bdba42095a.png',
          alt: 'image of the cad model of the design'
        }
      ]
    },
    {
      name: 'under table mouse rack',
      link: 'https://www.crealitycloud.com/model-detail/6445869c39d4f1098f796549',
      images: [{
        src:'https://pic2-cdn.creality.com/crealityCloud/common/bfb7906f459d48b392399e521a0e9844.jpeg', 
        alt:'image of the mouse rack mounted under a table'
        },
        {
          src: 'https://pic2-cdn.creality.com/crealityCloud/common/9be04a1864b733455f9d32164fb98924.png',
          alt: 'picture of the 3d model of the mouse rack'
        }
      ]
    },
    {
      name: 'under table keyboard rack - 2 parts',
      link: 'https://www.crealitycloud.com/model-detail/64458709314b259e1479f397',
      images: [{
        src:'https://pic2-cdn.creality.com/crealityCloud/common/457af752e8eccf67dbfb6d872b156d3d.jpeg', 
        alt:'image of the keyboard rack under a table'
        }
      ]
    },
    {
      name: 'ender 3 spool holder over top for direct drive ',
      link: 'https://www.crealitycloud.com/model-detail/64567ffca49310c87671db46',
      images: [{
        src:'https://pic2-cdn.creality.com/model/74430dc7e141092139b99a68061f479b.jpg', 
        alt:'image of the spool mounted on top'
        }
      ]
    },
  ];

  private _printers: Printer[] = [
    { 
      name: 'Creality K1',
      shortDescription: 'Enclosed Core X-Y Printer, built for high speed printing.',
      image: {src: "../../assets/printers/creality_k1.jpeg", alt: "creality k1 printer image"},
      upgrades: [
        {
          name: 'Hinged Lid Risers', 
          image: {
            src: '', 
            alt:''}, 
          link: ''
        },           
        {
          name: 'Tool Holder', 
          image: {
          src: '', 
          alt:''}, 
          link: ''
        },
        {
          name: 'Lid Handle', 
          image: {
          src: '', 
          alt:''}, 
          link: ''
        }],
      slides: [
        {src: '../../assets/k1/1.png', alt: '', caption: 'One'},
        {src: '../../assets/k1/2.png', alt: '', caption: 'Two'},
        {src: '../../assets/k1/3.jpg', alt: '', caption: 'Three'}
      ]
    },
    { 
      name: 'Creality Ender-3 V2',
      shortDescription: 'Bed Slinger predecessor of the ender-3, better print quality.',
      image: {src: "../../assets/printers/creality_ender-3_v2.jpeg", alt: "creality ender-3 v2 printer image"},
      upgrades: [
        {
          name: 'Sprite Direct Drive Extruder',
          image: {
            src: '',
            alt: ''
          },
          link: ''
        }, 
        {
          name: 'Magnetic Bed Plate',
          image: {
            src: '',
            alt: ''
          },
          link: ''
        },
        {
          name: 'JyersUI software',
          image: {
            src: '',
            alt: ''
          },
          link: ''
        },
        {
          name: 'CR Touch',
          image: {
            src: '',
            alt: ''
          },
          link: ''
        },
        {
          name: 'Bed Handle',
          image: {
            src: '',
            alt: ''
          },
          link: ''
        },
        {
          name: '5015 Extruder Fan for Sprite Extruder',
          image: {
            src: '',
            alt: ''
          },
          link: ''
        },
        {
          name: '5015 Heat Block Fan with CR / BL Touch for Sprite Extruder',
          image: {
            src: '',
            alt: ''
          },
          link: ''
        },
        {
          name: 'Creality Box V2.0',
          image: {
            src: '',
            alt: ''
          },
          link: ''
        },
        {
          name: 'Creality Box Side Mount',
          image: {
            src: '',
            alt: ''
          },
          link: ''
        },
        {
          name: 'Double Drawers',
          image: {
            src: '',
            alt: ''
          },
          link: ''
        },
        {
          name: 'Nozzle Drawer',
          image: {
            src: '',
            alt: ''
          },
          link: ''
        },
        {
          name: 'Top Filament Guide',
          image: {
            src: '',
            alt: ''
          },
          link: ''
        },
        {
          name: 'LED Lights',
          image: {
            src: '',
            alt: ''
          },
          link: ''
        },
        {
          name: 'Top LED Mount',
          image: {
            src: '',
            alt: ''
          },
          link: ''
        }
      ]
    }
  ];
  
  private _suggestions: string[] = [];

  private _videos: string[] = [
    '../assets/videos/1701968618.mp4',
    '../assets/videos/1701977437.mp4',
    '../assets/videos/1701981889.mp4'
  ];

  private generalForumMessages: string[] = [];

  private reviewsForumMessages: string[] = [];

  private issuesForumMessages: string[] = [];

  constructor() { }

  // user methods
  findUser(userDetail: User){
    return this._users.find((user: User) => userDetail.email === user.email);
  }

  findUserByEmail(email: string){
    return this._users.find((user: User) => email === user.email);
  }

  addUser(userDetail: User){
    return this._users.push(userDetail);
  }

  removeUser(userDetail: User){
    return this._users.splice(this._users.indexOf(userDetail), 1);
  }

  // project methods
  getAllProducts(){
    return this._products;
  }

  // printer methods
  getAllPrinters(){
    return this._printers;
  }

  // suggestion methods
  getAllSuggestions(){
    return this._suggestions;
  }
  
  enterSuggestion(suggestion: any){
    this._suggestions.push(suggestion);
  }
  
  // videos methods
  getAllVideos(){
    return this._videos;
  }
}
