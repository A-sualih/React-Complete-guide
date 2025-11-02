import React from 'react'
import './ExploreMenu.css'
import { menu_list } from '../../assets/assets'
const ExploreMenu = ({category,setCategory}) => {
    // const storeMenu=()=>{
    //  setCategory(prev=>prev===menu_list.menu_name?"All":menu_list.menu_name)
    // }
  return (
    <div className='explore-menu' id='explore-menu'>
        <h1>Explore Our Menu</h1>
       <p className='explore-menu-text'>Enjoy a wide variety of delicious dishes made with the freshest ingredients. Our menu has something for everyone — from tasty starters to mouthwatering main courses and sweet desserts. Each meal is carefully prepared to bring out rich flavors and give you a satisfying and enjoyable dining experience.</p>
       <div className="explore-menu-list">
        {menu_list.map((item,index)=>{
            return (
                <div onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)} key={index} className='explore-menu-list-item'>
                    <img className={category===item.menu_name?"active":""} src={item.menu_image} alt="" />
                    <p>{item.menu_name}</p>
                </div>
            )
        })}
       </div>
       <hr />
    </div>
  )
}

export default ExploreMenu
