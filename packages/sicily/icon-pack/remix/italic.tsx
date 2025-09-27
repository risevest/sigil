import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M15 20H7v-2h2.927l2.116-12H9V4h8v2h-2.927l-2.116 12H15z" />
    </svg>
  )
})
Icon.displayName = 'Italic'
/**
 * Remix Icon: Italic
 * @see {@link https://remixicon.com/icon/italic Remix Icon Docs}
 */
export const Italic = Icon
