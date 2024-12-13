import { UserType } from "../../../types/user";

type Props = {
  keyDatas: UserType["keyData"];
};

export default function KeyDatas({ keyDatas }: Props) {
  return (
    <section className="profile__datas">
      <div className="">
        <p>{keyDatas.calorieCount}kCal</p>
        <p>Calories</p>
      </div>
      <div className="">
        <p>{keyDatas.proteinCount}g</p>
        <p>Protéines</p>
      </div>
      <div className="">
        <p>{keyDatas.carbohydrateCount}g</p>
        <p>Glucides</p>
      </div>
      <div className="">
        <p>{keyDatas.lipidCount}g</p>
        <p>Lipides</p>
      </div>
    </section>
  );
}
