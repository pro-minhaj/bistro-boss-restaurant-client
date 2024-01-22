import React from "react";
import HeroSection from "../../../Components/HeroSection/HeroSection";
import shopBg from "../../../assets/shop/banner2.jpg";
import {
  Tab,
  TabIndicator,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";
import ShopCategory from "../ShopCategory/ShopCategory";

// Category Data
const category = ["Salad", "pizza", "soups", "desserts", "popular"];

const Shop = () => {

  return (
    <>
      <HeroSection
        img={shopBg}
        title="OUR SHOP"
        subTitle="Would you like to try a dish?"
      />
      <section className="container mx-auto px-5 py-[30px] sm:py-[50px] md:py-[100px]">
        <Tabs position="relative" variant="unstyled">
          <div className="flex justify-center items-center">
            <TabList className="flex justify-center items-center flex-wrap">
              {category.map((item) => (
                <Tab
                  key={item}
                  className="text-center text-neutral-900 text-2xl font-bold font-['Inter'] uppercase"
                  _selected={{ color: "#BB8506" }}
                >
                  {item}
                </Tab>
              ))}
            </TabList>
          </div>
          <TabIndicator
            mt="-1px"
            height="2px"
            bg="yellow.600"
            borderRadius="2px"
          />
          <TabPanels className="py-5">
            <TabPanel>
              <ShopCategory category="salad"/>
            </TabPanel>
            <TabPanel>
              <ShopCategory category="pizza"/>
            </TabPanel>
            <TabPanel>
              <ShopCategory category="soup"/>
            </TabPanel>
            <TabPanel>
              <ShopCategory category="dessert"/>
            </TabPanel>
            <TabPanel>
              <ShopCategory category="popular"/>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </section>
    </>
  );
};

export default Shop;
