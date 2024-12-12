type Props = {
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  label: string;
  isActive: boolean;
  setIsActive: (value: boolean) => void;
};

export default function NavButton({
  Icon,
  label,
  isActive = false,
  setIsActive
}: Props) {
  return (
    <button
      className={`sidenav__button ${isActive ? "sidenav__button--active" : ""}`}
      aria-label={label || ""}
      onClick={() => setIsActive(!isActive)}
    >
      <Icon />
    </button>
  );
}
