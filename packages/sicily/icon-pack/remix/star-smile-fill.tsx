import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="m12 .5 4.226 6.183 7.186 2.109-4.575 5.93.216 7.486L12 19.69l-7.054 2.518.216-7.486-4.575-5.93 7.187-2.109zM10 12H8a4 4 0 0 0 7.995.2L16 12h-2a2 2 0 0 1-3.995.15z" />
    </svg>
  )
})
Icon.displayName = 'StarSmileFill'
/**
 * Remix Icon: Star Smile Fill
 * @see {@link https://remixicon.com/icon/star-smile-fill Remix Icon Docs}
 */
export const StarSmileFill = Icon
