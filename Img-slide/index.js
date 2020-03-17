
import React, { Component } from 'react';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import './style.css';

const photos=[
  {name:'photo 1',
  url:"https://i.pinimg.com/originals/0c/05/13/0c051359563caf1f0d01ba6ddf346057.jpg"
}, 
{name:'photo 2',
url:"https://i.pinimg.com/originals/28/23/47/2823476cbf23e64c1874f4b269089695.jpg"
}, 
{name:'photo 3',
url:"https://wallpapershome.com/images/pages/pic_h/2070.jpg"
}, 
{name:'photo 4',
url:"https://wallpapershome.com/images/pages/pic_h/2095.jpg"}
]

class Corousil extends Component{
        render(){
          const settings={
            dots:true,
            fade:true,
            infinite:true,
            speed:500,
            slideToShow:1,
            arrows:true,
            slideToScroll:1,
            className:"slide"
          }
                
                return(
                        <div className="img-slide">
                          <Slider{...settings}>
                          {photos.map((photo)=>{
                            return(
                              <div>
                                <img width="100%" src={photo.url}/>
                              </div>
                            )
                          })}
                          </Slider>
                         
                        </div>
                      );
                    }

}
export default Corousil;