import type { CSSProperties, FC, MemoExoticComponent } from "react";

export interface DotFieldProps {
  dotRadius?: number;
  dotSpacing?: number;
  cursorRadius?: number;
  cursorForce?: number;
  bulgeOnly?: boolean;
  bulgeStrength?: number;
  glowRadius?: number;
  sparkle?: boolean;
  waveAmplitude?: number;
  gradientFrom?: string;
  gradientTo?: string;
  glowColor?: string;
  style?: CSSProperties;
  className?: string;
}

declare const DotField: MemoExoticComponent<FC<DotFieldProps>>;

export default DotField;
