import { TooltipProps } from "recharts";
import {
  NameType,
  ValueType
} from "recharts/types/component/DefaultTooltipContent";

export default function SessionsTooltip({
  active,
  payload
}: TooltipProps<ValueType, NameType>) {
  if (active && payload && payload.length) {
    return (
      <div className="sessions__tooltip">
        <p>{payload[0].value + " min"}</p>
      </div>
    );
  }

  return null;
}
