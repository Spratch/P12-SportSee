import { useState } from "react";
import BicycleIcon from "../icons/nav/bicycle";
import SwimIcon from "../icons/nav/swim";
import WorkoutIcon from "../icons/nav/workout";
import YogaIcon from "../icons/nav/yoga";
import NavButton from "./Button";
import "./sideNav.scss";

const navItems = [
  { icon: YogaIcon, label: "Yoga" },
  { icon: SwimIcon, label: "Natation" },
  { icon: BicycleIcon, label: "Cyclisme" },
  { icon: WorkoutIcon, label: "Entrainement" }
];

export default function SideNav() {
  const dynamicYear = new Date().getFullYear();
  const [activeIndex, setActiveIndex] = useState(null as number | null);

  return (
    <div className="sidenav">
      <div className="sidenav__buttons">
        {navItems.map((_, index) => (
          <NavButton
            key={index}
            Icon={_.icon}
            label={_.label}
            isActive={index === activeIndex}
            setIsActive={() =>
              setActiveIndex(index === activeIndex ? null : index)
            }
          />
        ))}
      </div>

      <p className="sidenav__copyright">Copyright, SportSee {dynamicYear}</p>
    </div>
  );
}
