import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M10 6v15H8V6H2V4h14v2zm8 8v7h-2v-7h-3v-2h8v2z" />
    </svg>
  )
})
Icon.displayName = 'FontSize2'
/**
 * Remix Icon: Font Size 2
 * @see {@link https://remixicon.com/icon/font-size-2 Remix Icon Docs}
 */
export const FontSize2 = Icon
