import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="m13 1 .001 3.062A8.004 8.004 0 0 1 19.938 11H23v2l-3.062.001a8.004 8.004 0 0 1-6.937 6.937L13 23h-2v-3.062a8.004 8.004 0 0 1-6.938-6.937L1 13v-2h3.062A8.004 8.004 0 0 1 11 4.062V1zm-1 9a2 2 0 1 0 0 4 2 2 0 0 0 0-4" />
    </svg>
  )
})
Icon.displayName = 'Focus3Fill'
/**
 * Remix Icon: Focus 3 Fill
 * @see {@link https://remixicon.com/icon/focus-3-fill Remix Icon Docs}
 */
export const Focus3Fill = Icon
