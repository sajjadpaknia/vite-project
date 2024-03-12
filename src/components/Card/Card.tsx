import { Link } from "react-router-dom";

export const Card = (props: any) => {
  const { image, title, price, area, city, rooms, bathroom, slug } = props;
  return (
    <Link
      to={`/houses/${slug}`}
      className="w-full bg-white rounded p-4 flex gap-4 border-solid border-2 border-slate-200 justify-between"
    >
      <figure className="w-40 h-40 rounded overflow-hidden">
        <img
          loading="lazy"
          src={image}
          alt="house"
          className="object-cover block h-full"
        />
      </figure>
      <div className="grow">
        <h1 className="font-bold mb-2">{title}</h1>
        <p className="mb-4">€ {price}</p>
        <p className="mb-4">{city}</p>
        <div className="flex gap-5">
          <figure className="flex items-center gap-2">
            <img
              src="/public/icons/bed.svg"
              className="w-5 h-5 overflow-hidden"
            />
            <span>{rooms}</span>
          </figure>
          <figure className="flex items-center gap-2">
            <img
              src="/public/icons/bath.svg"
              className="w-5 h-5 overflow-hidden"
            />
            <span>{bathroom}</span>
          </figure>
          <figure className="flex items-center gap-2">
            <img
              src="/public/icons/area.svg"
              className="w-5 h-5 overflow-hidden"
            />
            <span>{area} m2</span>
          </figure>
        </div>
      </div>
      <div className="flex gap-4 items-start">
        <figure className="flex items-center gap-2 cursor-pointer">
          <img
            src="/public/icons/edit.svg"
            className="w-5 h-5 overflow-hidden"
          />
        </figure>
        <figure className="flex items-center gap-2 cursor-pointer">
          <img
            src="/public/icons/trash.svg"
            className="w-5 h-5 overflow-hidden"
          />
        </figure>
      </div>
    </Link>
  );
};
