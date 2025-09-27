import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M5.554 22H3.4L11 3h2l7.6 19h-2.154l-2.4-6H7.954zm3.2-8h6.492L12 5.885z" />
    </svg>
  )
})
Icon.displayName = 'FontFamily'
/**
 * Remix Icon: Font Family
 * @see {@link https://remixicon.com/icon/font-family Remix Icon Docs}
 */
export const FontFamily = Icon
