import type { AlshamIconProps } from './types'
import { ICON_REGISTRY } from './iconRegistry'

const VIEWBOX = 48

export function AlshamIcon({
  id,
  size = 24,
  strokeWidth = 1.5,
  className = '',
  title,
  stroke,
}: AlshamIconProps) {
  const icon = ICON_REGISTRY[id]
  if (!icon) return null

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox={`0 0 ${VIEWBOX} ${VIEWBOX}`}
      width={size}
      height={size}
      fill="none"
      stroke={stroke ?? 'currentColor'}
      strokeWidth={strokeWidth}
      strokeLinecap="square"
      strokeLinejoin="miter"
      className={`alsham-icon shrink-0 ${className}`}
      role={title ? 'img' : 'presentation'}
      aria-hidden={title ? undefined : true}
    >
      {title ? <title>{title}</title> : null}
      {icon.paths.map((d, i) => (
        <path key={`${id}-${i}`} d={d} vectorEffect="non-scaling-stroke" />
      ))}
    </svg>
  )
}
