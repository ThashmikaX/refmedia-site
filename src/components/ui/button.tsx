type ButtonProps = {
  children: string;
  onClick?: () => void;
  Icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
};

export default function Button({ children, onClick, Icon }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className="flex flex-row shadow-buttonShadowDefault items-center bg-button px-[24px] py-[12px] rounded-[4px] gap-[10px] hover:shadow-buttonShadowHoverd focus:shadow-buttonShadowPressed transition-all ease-in duration-300"
    >
      <p>{children}</p>
      {Icon && <Icon />}
    </button>
  );
}
