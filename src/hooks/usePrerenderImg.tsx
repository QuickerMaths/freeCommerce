import heroImgDesktop from "../assets/images/heroSection/heroImg-desktop.webp";
import heroImgTablet from "../assets/images/heroSection/heroImg-tablet.webp";
import heroImgMobile from "../assets/images/heroSection/heroImg-mobile.webp";
import headerShopManDesktop from "../assets/images/headerShopMan/headerShopMan-desktop.webp";
import headerShopManMobile from "../../assets/images/headerShopMan/headerShopMan-mobile.webp";
import headerShopManTablet from "../../assets/images/headerShopMan/headerShopMan-tablet.webp";
import headerShopWomanDesktop from "../assets/images/headerShopWoman/headerShopWoman-desktop.webp";
import headerShopWomanMobile from "../../assets/images/headerShopWoman/headerShopWoman-mobile.webp";
import headerShopWomanTablet from "../../assets/images/headerShopWoman/headerShopWoman-tablet.webp";
import homeGrid1Desktop from "../assets/images/homeGrid1/homeGrid1-desktop.webp";
import homeGrid1Tablet from "../assets/images/homeGrid1/homeGrid1-tablet.webp";
import homeGrid1Mobile from "../assets/images/homeGrid1/homeGrid1-mobile.webp";
import homeGrid2Desktop from "../assets/images/homeGrid2/homeGrid2-desktop.webp";
import homeGrid2Tablet from "../assets/images/homeGrid2/homeGrid2-tablet.webp";
import homeGrid2Mobile from "../assets/images/homeGrid2/homeGrid2-mobile.webp";
import homeGrid3Desktop from "../assets/images/homeGrid3/homeGrid3-desktop.webp";
import homeGrid3Tablet from "../assets/images/homeGrid3/homeGrid3-tablet.webp";
import homeGrid3Mobile from "../assets/images/homeGrid3/homeGrid3-mobile.webp";
import homeGrid4Desktop from "../assets/images/homeGrid4/homeGrid4-desktop.webp";
import homeGrid4Tablet from "../assets/images/homeGrid4/homeGrid4-tablet.webp";
import homeGrid4Mobile from "../assets/images/homeGrid4/homeGrid4-mobile.webp";
import homeGrid6Desktop from "../assets/images/homeGrid6/homeGrid6-desktop.webp";
import homeGrid6Tablet from "../assets/images/homeGrid6/homeGrid6-tablet.webp";
import homeGrid6Mobile from "../assets/images/homeGrid6/homeGrid6-mobile.webp";
import { useEffect } from "react";

type deviceImageUrlType = {
  name: string;
  formats: {
    deviceType: string;
    url: string;
  }[];
}[];

const usePrerenderImg = (prerender: boolean) => {
  const imagesUrl = [headerShopManDesktop, headerShopWomanDesktop];

  const deviceImageUrl: deviceImageUrlType = [
    {
      name: "homeGrid1",
      formats: [
        { deviceType: "desktop", url: homeGrid1Desktop },
        { deviceType: "tablet", url: homeGrid1Tablet },
        { deviceType: "mobile", url: homeGrid1Mobile },
      ],
    },
    {
      name: "homeGrid2",
      formats: [
        { deviceType: "desktop", url: homeGrid2Desktop },
        { deviceType: "tablet", url: homeGrid2Tablet },
        { deviceType: "mobile", url: homeGrid2Mobile },
      ],
    },
    {
      name: "homeGrid3",
      formats: [
        { deviceType: "desktop", url: homeGrid3Desktop },
        { deviceType: "tablet", url: homeGrid3Tablet },
        { deviceType: "mobile", url: homeGrid3Mobile },
      ],
    },
    {
      name: "homeGrid4",
      formats: [
        { deviceType: "desktop", url: homeGrid4Desktop },
        { deviceType: "tablet", url: homeGrid4Tablet },
        { deviceType: "mobile", url: homeGrid4Mobile },
      ],
    },
    {
      name: "homeGrid6",
      formats: [
        { deviceType: "desktop", url: homeGrid6Desktop },
        { deviceType: "tablet", url: homeGrid6Tablet },
        { deviceType: "mobile", url: homeGrid6Mobile },
      ],
    },
    {
      name: "heroImg",
      formats: [
        { deviceType: "desktop", url: heroImgDesktop },
        { deviceType: "tablet", url: heroImgTablet },
        { deviceType: "mobile", url: heroImgMobile },
      ],
    },
  ];

  useEffect(() => {
    deviceImageUrl.forEach((img) => {
      const imgUrl = img.formats.find(
        ({ deviceType }) =>
          window.matchMedia(
            `(max-width: ${
              deviceType === "mobile"
                ? "768px"
                : deviceType === "tablet"
                ? "1024px"
                : "5000px"
            })`
          ).matches
      );

      const renderImg = new Image();
      renderImg.src = (
        imgUrl as deviceImageUrlType[number]["formats"][number]
      ).url;
    });
  }, [prerender]);

  useEffect(() => {
    imagesUrl.forEach((url: string) => {
      const img = new Image();
      img.src = url;
    });
  }, [prerender]);
};

export default usePrerenderImg;
