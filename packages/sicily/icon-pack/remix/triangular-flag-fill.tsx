import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M5.66 2.181C5.016 1.613 4 2.071 4 2.932V22h2v-4h14.99c.922 0 1.352-1.142.66-1.75z" />
    </svg>
  )
})
Icon.displayName = 'TriangularFlagFill'
/**
 * Remix Icon: Triangular Flag Fill
 * @see {@link https://remixicon.com/icon/triangular-flag-fill Remix Icon Docs}
 */
export const TriangularFlagFill = Icon
