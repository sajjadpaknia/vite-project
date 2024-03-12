import { NavLink } from "react-router-dom";

export const Header = () => {
  const menuData = [
    { title: "Houses", href: "/houses" },
    { title: "about", href: "/about" },
  ];
  return (
    <div className="w-full shadow-md bg-white">
      <div className="container flex items-center mx-auto p-4 gap-12">
        <div>Logo</div>
        <div>
          <ul className="flex gap-4 capitalize">
            {menuData.map((item, idx) => {
              return (
                <li key={idx}>
                  <NavLink
                    to={item.href}
                    style={({ isActive }) =>
                      isActive ? { fontWeight: "bold" } : {}
                    }
                  >
                    {item.title}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};
