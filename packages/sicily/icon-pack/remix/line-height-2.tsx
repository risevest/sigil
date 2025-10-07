import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M2 3v2h2v14H2v2h6v-2H6V5h2V3zm8.2 15h2.154l1.2-3h4.892l1.2 3H21.8L17 6h-2zM16 8.885 17.646 13h-3.292z" />
    </svg>
  )
})
Icon.displayName = 'LineHeight2'
/**
 * Remix Icon: Line Height 2
 * @see {@link https://remixicon.com/icon/line-height-2 Remix Icon Docs}
 */
export const LineHeight2 = Icon
