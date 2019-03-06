import React from "react";
import Styles from "./BodyContent.module.scss";
import Card from "../../../components/Layout/UI/Card/Card";

const BodyContent = () => {
  return (
    <div className={`${Styles.container} container`}>
      <div className={`${Styles.row} row`}>
        <Card
          priceTag="20JD's"
          cardImage="https://static.zara.net/photos///2018/I/1/1/p/6446/301/092/2/w/560/6446301092_2_1_1.jpg?ts=1535620631179"
          comment="1514"
          shopName="Zara"
        />
        <Card
          priceTag="50JD's"
          cardImage="https://static.zara.net/photos///2018/I/1/1/p/6714/201/040/2/w/560/6714201040_2_1_1.jpg?ts=1534811238565"
          comment="1514"
          shopName="Addidas"
        />
        <Card
          priceTag="30JD's"
          cardImage="https://ph-live-01.slatic.net/original/aca29dba26d71e7cb0b9be17c5a79d60.jpg"
          comment="1514"
          shopName="Rolex"
        />
        <Card
          priceTag="45JD's"
          cardImage="https://cdn.shopify.com/s/files/1/2555/4546/products/JKS117-3_1024x1024_2x_1d39c039-d093-4f25-9986-249c91f4a009_1200x1200.jpg?v=1516768432"
          comment="1514"
          shopName="ESCADA"
        />
        <Card
          priceTag="45JD's"
          cardImage="https://cdn.shopify.com/s/files/1/2555/4546/products/JKS117-3_1024x1024_2x_1d39c039-d093-4f25-9986-249c91f4a009_1200x1200.jpg?v=1516768432"
          comment="1514"
          shopName="ESCADA"
        />
      </div>
    </div>
  );
};

export default BodyContent;
