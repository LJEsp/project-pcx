import {
  faLaptop,
  faMicrochip,
  faKeyboard,
  faGamepad,
  faCompactDisc
} from "@fortawesome/free-solid-svg-icons";

const categoriesMenu = [
  {
    label: "Laptops",
    icon: faLaptop,
    subMenu: [
      {
        label: "Entry"
      },
      {
        label: "Mainstream"
      },
      {
        label: "Premium"
      }
    ]
  },
  {
    label: "Components",
    icon: faMicrochip,
    subMenu: [
      { label: "Processor" },
      { label: "Graphics Card" },
      { label: "CPU Fan" },
      { label: "Motherboard" },
      { label: "Casing" },
      { label: "Optical Drive" },
      { label: "RAM" },
      { label: "Power Supply" },
      { label: "Internal Storage" },
      { label: "NIC Cards" }
    ]
  },
  {
    label: "Peripherals",
    icon: faKeyboard,
    subMenu: [
      { label: "Mouse" },
      { label: "Monitor" },
      { label: "Storage Devices" },
      { label: "Graphic Tablet" },
      { label: "Keyboard" },
      { label: "AVR and UPS" },
      { label: "Speaker" },
      { label: "Powerbank" },
      { label: "Keyboard + Mouse Combo" },
      { label: "Networking" },
      { label: "Printer and Scanner" },
      { label: "Laptop Charger" },
      { label: "Headset" },
      { label: "Camera" },
      { label: "Projector" },
      { label: "Sound Card" },
      { label: "Monopod" }
    ]
  },
  {
    label: "For Gamers",
    icon: faGamepad,
    subMenu: [
      { label: "Gaming Desktop" },
      { label: "Gaming Monitor" },
      { label: "Gaming Headset" },
      { label: "Gaming Speaker" },
      { label: "Gaming Keyboard" },
      { label: "Gaming Laptop" },
      { label: "Gaming Mouse" },
      { label: "Gaming Consoles and Accessories" }
    ]
  },
  {
    label: "Software",
    icon: faCompactDisc,
    subMenu: [
      { label: "Security Applications" },
      { label: "Microsoft Office" },
      { label: "Windows" }
    ]
  }
];

export default categoriesMenu;
