import { Navigate, useParams } from "react-router-dom";
import { useHouseData } from "../../context/HouseData";
import { useEffect, useState } from "react";
import { Header } from "../../components/Header/Header";

const Product = () => {
  const data: any = useHouseData();
  const { slug } = useParams();
  const [productData, setProductData] = useState<any>();
  useEffect(() => {
    data.map((item: any) => {
      if (item.slug === slug) {
        setProductData(item);
        return;
      }
    });
  }, [slug]);
  console.log(productData);

  return productData ? (
    <div>
      <Header />
      <h1 className="font-bold w-full grid place-items-center	pt-12">
        {`This is the ${productData.title} page.`}
      </h1>
    </div>
  ) : (
    <p>Loading...</p>
  );
};

export default Product;
