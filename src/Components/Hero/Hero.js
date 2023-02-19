import RestaurantFood from '../../Assets/restauranfood.jpg'
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section style={{width:"100%", backgroundColor:"var(--primary-color-green)"}}>
      <div className='container' style={{padding: "24px 0", display: "grid", gridTemplateColumns:"1fr 1fr", gap:"24px"}}>
        <div><h1 className='displayTitle' style={{color:"var(--primary-color-yellow)"}}>Little Lemon</h1>
          <h2 className='subTitle' style={{color:'white'}}>Chicago</h2>
          <p className='leadText' style={{color:'white', padding:"16px 0"}}>We are a family owned Mediteranian restaurant, focused on traditional recipies served with a modern twist.</p>
          <div>
          <Link to="/BookingPage" className='link button cardTitle' style={{display:"inline-block"}}>Reserve a Table</Link>
        </div>
        </div>
        <img src={RestaurantFood} alt="Restaurant Food" style={{ aspectRatio:"1", objectFit:"cover", borderRadius:"16px", justifySelf:"end", alignSelf: "stretch"}}/>
      </div>
    </section>
  )
}