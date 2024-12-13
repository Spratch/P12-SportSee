import "./keyDatas.scss";
import { UserType } from "../../../types/user";
import FireIcon from "../../icons/keyDatas/fire";
import ChickenIcon from "../../icons/keyDatas/chicken";
import AppleIcon from "../../icons/keyDatas/apple";
import BurgerIcon from "../../icons/keyDatas/burger";
import KeyData from "./KeyData";

type Props = {
  keyDatas: UserType["keyData"];
};

export default function KeyDatas({ keyDatas }: Props) {
  const datasArray = [
    {
      label: "Calories",
      value: keyDatas.calorieCount,
      unit: "kCal",
      color: "255, 0, 0",
      icon: FireIcon
    },
    {
      label: "Protéines",
      value: keyDatas.proteinCount,
      color: "74, 184, 255",
      icon: ChickenIcon
    },
    {
      label: "Glucides",
      value: keyDatas.carbohydrateCount,
      color: "253, 204, 12",
      icon: AppleIcon
    },
    {
      label: "Lipides",
      value: keyDatas.lipidCount,
      color: "253, 81, 129",
      icon: BurgerIcon
    }
  ];

  return (
    <section className="profile__datas">
      {datasArray.map((keyData, index) => (
        <KeyData
          key={index}
          label={keyData.label}
          value={keyData.value}
          unit={keyData.unit || "g"}
          color={keyData.color}
          Icon={keyData.icon}
        />
      ))}
    </section>
  );
}
