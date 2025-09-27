import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M17.5 2.5 23 12l-5.5 9.5h-11L1 12l5.5-9.5z" />
    </svg>
  )
})
Icon.displayName = 'HexagonFill'
/**
 * Remix Icon: Hexagon Fill
 * @see {@link https://remixicon.com/icon/hexagon-fill Remix Icon Docs}
 */
export const HexagonFill = Icon
