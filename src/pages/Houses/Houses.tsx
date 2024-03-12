import { useEffect, useState } from "react";
import { Card } from "../../components/Card/Card";
import { Header } from "../../components/Header/Header";
import SearchInput from "../../components/SearchInput/SearchInput";
import { useHouseData } from "../../context/HouseData";

export const Houses = () => {
  const data: any = useHouseData();
  const [searchValue, setSearchValue] = useState("");
  const [filteredData, setFilteredData] = useState(data);

  useEffect(() => {
    const result = data.filter((item: any) =>
      item.title.toLowerCase().includes(searchValue.toLowerCase())
    );
    setFilteredData(result);
  }, [searchValue]);

  return (
    <div>
      <Header />
      <div className="container pt-8 px-4 mx-auto">
        <header className="flex justify-between mb-8">
          <h1 className="text-xl font-bold">Houses</h1>
          <button className="bg-red-600 text-white py-2 px-4 rounded">
            + Create New
          </button>
        </header>
        <div className="w-full mb-8">
          <SearchInput setSearchValue={setSearchValue} />
        </div>
        <div className=" flex gap-4 flex-col">
          {filteredData.map((card: any) => {
            return (
              <Card
                key={card._id}
                image={card.image}
                title={card.title}
                price={card.price}
                area={card.area}
                city={card.city}
                slug={card.slug}
                rooms={card.rooms}
                bathroom={card.bathroom}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};
