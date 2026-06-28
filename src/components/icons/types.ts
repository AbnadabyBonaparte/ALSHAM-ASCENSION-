export type IconId =
  | 'ICO-001' | 'ICO-002' | 'ICO-003' | 'ICO-004' | 'ICO-005'
  | 'ICO-006' | 'ICO-007' | 'ICO-008' | 'ICO-009' | 'ICO-010'
  | 'ICO-011' | 'ICO-012' | 'ICO-013' | 'ICO-014' | 'ICO-015'
  | 'ICO-016' | 'ICO-017' | 'ICO-018' | 'ICO-019' | 'ICO-020'
  | 'ICO-021' | 'ICO-022' | 'ICO-023' | 'ICO-024' | 'ICO-025'
  | 'ICO-026' | 'ICO-027' | 'ICO-028' | 'ICO-029' | 'ICO-030'
  | 'ICO-031' | 'ICO-032' | 'ICO-033' | 'ICO-034' | 'ICO-035'
  | 'ICO-036' | 'ICO-037' | 'ICO-038' | 'ICO-039' | 'ICO-040'

export type IconStrokeWidth = 1.5 | 2

export interface IconDefinition {
  id: IconId
  name: string
  category: string
  paths: string[]
}

export interface AlshamIconProps {
  id: IconId
  size?: number
  strokeWidth?: IconStrokeWidth
  className?: string
  title?: string
  /** Override stroke — default gold palette via CSS */
  stroke?: string
}
