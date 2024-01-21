import React from "react";

const Navbar = ({
  title,
  icon1,
  icon2,
  icon3,
  icon4,
  icon5,
  iconStyle,
  showForm,
}) => {
  const {name, profile} = title;
  return (
    <nav className="bg-[#dee0e3] flex items-center justify-between p-2 pl-8">
      <div className="w-1/3 flex items-center justify-start">
        <button title="profile">
          <img
            // src="./assets/images/profile.png"
            src={profile}
            alt="Profile"
            className="w-10 h-10 bg-slate-200 rounded-full"
          />
        </button>
        <h4 className="text-black text-lg ml-2">{name}</h4>
      </div>
      <div className={iconStyle}>
        <button
          type="button"
          title="Comunity"
          className="text-xl font-semibold text-green-400"
        >
          {icon1}
        </button>
        <button
          type="button"
          title="status"
          className="text-xl font-semibold text-green-400"
        >
          {icon2}
        </button>
        <button
          type="button"
          title="add user"
          className={`text-xl font-semibold text-green-400`}
          onClick={showForm}
        >
          {icon3}
        </button>
        <button
          type="button"
          title="add user"
          className={`text-xl font-semibold text-green-400`}
          onClick={showForm}
        >
          {icon4}
        </button>
        <button
          type="button"
          title="add user"
          className={`text-xl font-semibold text-green-400`}
          onClick={showForm}
        >
          {icon5}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
