import "./ButtonsFile.scss";
export const TabButton = ({
  title,
  isActive,
  onClick,
}: {
  title: string;
  isActive: boolean;
  onClick?: () => void;
}): JSX.Element => {
  return (
    <div
      className={`tab_button ${isActive ? "active_button" : ""}`}
      onClick={onClick}
    >
      {title}
    </div>
  );
};
