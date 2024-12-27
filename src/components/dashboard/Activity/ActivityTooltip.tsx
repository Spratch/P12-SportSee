import { TooltipProps } from "recharts";
import {
  NameType,
  ValueType
} from "recharts/types/component/DefaultTooltipContent";

export default function ActivtyTooltip({
  active,
  payload
}: TooltipProps<ValueType, NameType>) {
  if (active && payload && payload.length) {
    return (
      <div className="activity__tooltip">
        <p>{payload[0].value + "kg"}</p>
        <p>{payload[1].value + "Kcal"}</p>
      </div>
    );
  }

  return null;
}
