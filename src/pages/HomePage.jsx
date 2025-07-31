
import {ImageSlider} from '../components/ImageSlider'
import {About} from '../components/About'
import {Events} from '../components/Events';
import  {TeamCarousel}  from '../components/TeamCarousel';
import {Join} from '../components/Join'

export function HomePage(){
return(
<>
<ImageSlider />
 <About />
 <Events />
 <TeamCarousel />
 <Join />

</>
);
}