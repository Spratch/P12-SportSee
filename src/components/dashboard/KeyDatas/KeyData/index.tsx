type Props = {
  label: string;
  value: number;
  unit: string;
  color: string;
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
};

export default function KeyData({ label, value, unit, color, Icon }: Props) {
  return (
    <div className="keydata">
      <div
        className="keydata__icon"
        style={{ "--icon-color": color } as React.CSSProperties}
      >
        <Icon />
      </div>
      <div className="keydata__infos">
        <p className="keydata__value">
          {value.toLocaleString("en-US")}
          {unit}
        </p>
        <p className="keydata__label">{label}</p>
      </div>
    </div>
  );
}
