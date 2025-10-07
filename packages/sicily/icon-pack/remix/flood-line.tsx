import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M16 17.472A5.98 5.98 0 0 0 20 19h2v2h-2a7.96 7.96 0 0 1-4-1.07A7.96 7.96 0 0 1 12 21a7.96 7.96 0 0 1-4-1.07A7.96 7.96 0 0 1 4 21H2v-2h2c1.537 0 2.94-.578 4-1.528A5.98 5.98 0 0 0 12 19c1.537 0 2.94-.578 4-1.528m-3.427-15.94.1.08L23 11h-3v6c-.701 0-1.374-.12-2-.341V9.157l-6-5.455-6 5.454.001 7.502a6 6 0 0 1-1.702.335L4 17v-6H1l10.327-9.388a1 1 0 0 1 1.246-.08" />
    </svg>
  )
})
Icon.displayName = 'FloodLine'
/**
 * Remix Icon: Flood Line
 * @see {@link https://remixicon.com/icon/flood-line Remix Icon Docs}
 */
export const FloodLine = Icon
