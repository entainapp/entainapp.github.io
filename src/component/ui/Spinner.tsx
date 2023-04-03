import { FC } from "react";

type Props = {
  loading?: boolean;
  text?: string;
  color?: string;
  size?: string | number;
  left?: string | number;
  top?: string | number;
  fullscreen?: boolean;
  className?: string;
};

export const Spinner: FC<Props> = ({
  text = "",
  color = "bg-brown-800",
  size = 40,
  loading = true,
  fullscreen = true,
  className = "",
  left = 0,
  top = 0
}) =>
  loading ? (
    <div
      className={`mtrade-loading ${fullscreen ? "fullscreen" : ""} ${className}`}
      style={{
        width: size,
        height: size,
        left: left,
        top: top 
      }}
    >
      <span className="spinner"></span>
    </div>
  ) : null;
  