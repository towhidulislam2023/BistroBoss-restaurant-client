import React from 'react';
import MenuCover from '../../../sheared/MenuCover/MenuCover';
import MenuCard from '../../../sheared/MenuCard/MenuCard';
import shopBannar from '../../../assets/shop/banner2.jpg';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useState } from 'react';
import useMenu from '../../../hooks/useMenu';
import { useParams } from 'react-router-dom';
const OurShop = () => {
    const [menu] = useMenu()
    const catagories = ['salad', 'pizza', 'soup', 'dessert', 'drinks']
    const { catagory } = useParams()
    const initialIndex = catagories.indexOf(catagory)
    const salad = menu && menu.filter(data => data.category === "salad")
    const pizza = menu && menu.filter(data => data.category === "pizza")
    const soup = menu && menu.filter(data => data.category === "soup")
    const dessert = menu && menu.filter(data => data.category === "dessert")
    const drinks = menu && menu.filter(data => data.category === "drinks")
    const [tabIndex, setTabIndex] = useState(initialIndex);
    return (
        <div>
            <MenuCover bannarimg={shopBannar} title={"OUR SHOP"} titledesc={"Would you like to try a dish?"}></MenuCover>

            <section className='my-10'>
                <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                    <div className='text-center text-xl font-bold capitalize'>
                        <TabList>
                            <Tab>salad</Tab>
                            <Tab>pizza</Tab>
                            <Tab>soup</Tab>
                            <Tab>dessert</Tab>
                            <Tab>drinks</Tab>
                        </TabList>
                    </div>

                    <TabPanel>
                        <div className='grid md:grid-cols-4 gap-10 my-10'>
                            {

                                salad && salad.map(menuItems => <MenuCard menu={menuItems} key={menuItems._id}></MenuCard>)
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>  <div className='grid md:grid-cols-4 gap-10 my-10'>
                        {

                            pizza && pizza.map(menuItems => <MenuCard menu={menuItems} key={menuItems._id}></MenuCard>)
                        }
                    </div>  </TabPanel>
                    <TabPanel>    <div className='grid md:grid-cols-4 gap-10 my-10'>
                        {

                            soup && soup.map(menuItems => <MenuCard menu={menuItems} key={menuItems._id}></MenuCard>)
                        }
                    </div></TabPanel>
                    <TabPanel>    <div className='grid md:grid-cols-4 gap-10 my-10'>
                        {

                            dessert && dessert.map(menuItems => <MenuCard menu={menuItems} key={menuItems._id}></MenuCard>)
                        }
                    </div></TabPanel>
                    <TabPanel>   <div className='grid md:grid-cols-4 gap-10 my-10'>
                        {

                            drinks && drinks.map(menuItems => <MenuCard menu={menuItems} key={menuItems._id}></MenuCard>)
                        }
                    </div> </TabPanel>
                </Tabs>
            </section>
        </div>
    );
};

export default OurShop;