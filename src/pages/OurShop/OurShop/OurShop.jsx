import React from 'react';
import MenuCover from '../../../sheared/MenuCover/MenuCover';
import shopBannar from '../../../assets/shop/banner2.jpg';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useState } from 'react';
import useMenu from '../../../hooks/useMenu';
const OurShop = () => {
    const [menu] = useMenu()
    const salad = menu && menu.filter(data => data.category === "salad")
    const pizza = menu && menu.filter(data => data.category === "pizza")
    const soup = menu && menu.filter(data => data.category === "soup")
    const dessert = menu && menu.filter(data => data.category === "dessert")
    const drinks = menu && menu.filter(data => data.category === "drinks")
    const [tabIndex, setTabIndex] = useState(0);
    return (
        <div>
            <MenuCover bannarimg={shopBannar} title={"OUR SHOP"} titledesc={"Would you like to try a dish?"}></MenuCover>

            <section>
                <Tab selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                    <TabList>
                        <Tab>Title 1</Tab>
                        <Tab>Title 2</Tab>
                    </TabList>
                    <TabPanel></TabPanel>
                    <TabPanel></TabPanel>
                </Tab>
            </section>
        </div>
    );
};

export default OurShop;