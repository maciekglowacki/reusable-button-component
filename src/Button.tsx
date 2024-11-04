type IconOnly = {
  //   Icon: RemixiconComponentType;
  Icon: React.ReactNode;
  ariaLabel: string;
  variant: "icon-only";
};

type TextOptionalIcon =
  | {
      text: string;
      variant: "text-only";
    }
  | {
      text: string;
      Icon: React.ReactNode;
      iconPosition: "left" | "right" | "both";
      variant: "text-with-icon";
    };

type Props = {
  disabled?: boolean;
  type:
    | "primary"
    | "secondary"
    | "tertiary"
    | "destructive"
    | "link-color"
    | "link-grey";
  size: "medium" | "large" | "xl" | "xxl";
} & (TextOptionalIcon | IconOnly);

import "./Button.css";

export function Button(props: Props) {
  const disabled = props?.disabled || false;

  if (props.variant === "text-only") {
    return (
      <button
        disabled={disabled}
        className={[props.type, props.size].join(" ")}
      >
        {props.text}
      </button>
    );
  }
  if (props.variant === "text-with-icon") {
    return (
      <button
        disabled={disabled}
        className={[props.type, props.size].join(" ")}
      >
        {(props.iconPosition === "left" || props.iconPosition === "both") &&
          props.Icon}
        {props.text}
        {(props.iconPosition === "right" || props.iconPosition === "both") &&
          props.Icon}
      </button>
    );
  }
  return (
    <button
      aria-label={props.ariaLabel}
      disabled={disabled}
      className={[props.type, props.size, "icon-only"].join(" ")}
    >
      {props.Icon}
    </button>
  );
}
