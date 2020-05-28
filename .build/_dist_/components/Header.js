import React from '/web_modules/react.js';
import Role from './Role.js';

const Header = ({
  roleList,
  filterRole,
  toggleFilterRole
}) => /*#__PURE__*/React.createElement("div", {
  id: "home",
  className: "p-4 pt-0 md:p-8 md:ml-8"
}, /*#__PURE__*/React.createElement("div", {
  className: "container mx-auto flex md:py-6 grid sm:grid-cols-1 md:grid-cols-2 gap-4 items-center"
}, /*#__PURE__*/React.createElement("div", {
  className: "md:border-r-2 justify-center",
  style: {
    borderColor: '#5A78FF'
  }
}, /*#__PURE__*/React.createElement("div", {
  className: "pl-4 pr-8"
}, /*#__PURE__*/React.createElement("h1", {
  className: "inline text-3xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold tracking-wide leading-snug"
}, "Glitch alumni"), /*#__PURE__*/React.createElement("h2", {
  className: "text-xl font-bold"
}, "Each of these people would be the best hire your team can make."), /*#__PURE__*/React.createElement("div", {
  className: "my-2 mb-6"
}, /*#__PURE__*/React.createElement("div", {
  className: "flex md:block lg:flex lg:items-center flex-row md:flex-col lg:flex-row"
}, /*#__PURE__*/React.createElement("span", {
  className: "hidden text-sm font-bold lg:block"
}, "Jump to"), roleList.map(role => /*#__PURE__*/React.createElement(Role, {
  data: role,
  toggleFilterRole: toggleFilterRole,
  filterRole: filterRole
})))))), /*#__PURE__*/React.createElement("div", {
  className: "pl-4 pb-8"
}, /*#__PURE__*/React.createElement("strong", null, "Glitch alums have skills and talents that lead the entire industry."), " Every one of them has enabled teams to succeed while working remotely, with extensive experience from well before social distancing started. If you\u2019re looking to hire smart, caring, thoughtful new members for your team, please reach out to them directly using their contact information below. If you have any questions or require a reference, we are eager to help, just email", ' ', /*#__PURE__*/React.createElement("a", {
  href: "mailto:talent@glitch.com"
}, "talent@glitch.com"), ".")));

export default Header;