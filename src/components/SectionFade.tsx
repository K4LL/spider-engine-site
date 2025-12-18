import { createPortal } from "react-dom";

export const SectionFade = ({
  color,
  offset,
}: {
  color: string;
  offset: number;
}) => {
  return createPortal(
    <div
      className="section-fade"
      style={{
        '--fade-color': color,
        '--fade-height': `150px`,
        '--fade-offset': `${offset-100}px`
      } as React.CSSProperties}
    />,
    document.body
  );
};