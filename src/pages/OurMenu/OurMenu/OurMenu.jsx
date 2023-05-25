import React from 'react';
import MenuCover from '../../../sheared/MenuCover/MenuCover';
import ourmenu from '../../../assets/menu/banner3.jpg';
import dessertimg from '../../../assets/menu/dessert-bg.jpeg';
import pizzaimg from '../../../assets/menu/pizza-bg.jpg';
import saladimg from '../../../assets/menu/salad-bg.jpg';
import soupimg from '../../../assets/menu/soup-bg.jpg';
import useMenu from '../../../hooks/useMenu';
import Sectiontitle from '../../../sheared/SectionTitle/Sectiontitle';
import MenuCatagoryDesign from "../../../sheared/MenuCatagorydesign/MenuCatagoryDesign"
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';


const OurMenu = () => {
    const [menu] = useMenu()
    const offered = menu && menu.filter(data => data.category === "offered")
    const dessert = menu && menu.filter(data => data.category === "dessert")
    const pizza = menu && menu.filter(data => data.category === "pizza")
    const salad = menu && menu.filter(data => data.category === "salad")
    const soup = menu && menu.filter(data => data.category === "soup")
    return (
        <div>
            <Helmet>
                <title>{"Menu | BistroBoss"}</title>
            </Helmet>
            <section>
                <MenuCover bannarimg={ourmenu} title={"OUR MENU"} titledesc={"Would you like to try a dish?"}></MenuCover>
                <Sectiontitle heading={"TODAY'S OFFER"} subHeading={"Don't miss"}></Sectiontitle>
                <MenuCatagoryDesign items={offered}></MenuCatagoryDesign>
                <div className='text-center my-12'>
                  
                </div>
            </section>
            <section>
                <MenuCover bannarimg={dessertimg} title={"DESSERTS"} titledesc={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}></MenuCover>
                <MenuCatagoryDesign items={dessert}></MenuCatagoryDesign>
                <div className='text-center my-12'>
                    <Link to={`/shop/dessert`}><button className="btn btn-outline border-0 border-b-4">View Full  Menu</button></Link>
                </div>
            </section>
            <section>
                <MenuCover bannarimg={pizzaimg} title={"PIZZA"} titledesc={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}></MenuCover>
                <MenuCatagoryDesign items={pizza}></MenuCatagoryDesign>
                <div className='text-center my-12'>
                    <Link to={`/shop/pizza`}><button className="btn btn-outline border-0 border-b-4">View Full  Menu</button></Link>
                </div>
            </section>
            <section>
                <MenuCover bannarimg={saladimg} title={"SALAD"} titledesc={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}></MenuCover>
                <MenuCatagoryDesign items={salad}></MenuCatagoryDesign>
                <div className='text-center my-12'>
                    <Link to={`/shop/salad`}><button className="btn btn-outline border-0 border-b-4">View Full  Menu</button></Link>
                </div>
            </section>
            <section>
                <MenuCover bannarimg={soupimg} title={"SOUP"} titledesc={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}></MenuCover>
                <MenuCatagoryDesign items={soup}></MenuCatagoryDesign>
                <div className='text-center my-12'>
                    <Link to={`/shop/soup`}><button className="btn btn-outline border-0 border-b-4">View Full  Menu</button></Link>
                </div>
            </section>

        </div>
    );
};

export default OurMenu;