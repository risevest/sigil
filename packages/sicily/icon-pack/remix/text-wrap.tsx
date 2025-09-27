import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M15 18h1.5a2.5 2.5 0 0 0 0-5H3v-2h13.5a4.5 4.5 0 1 1 0 9H15v2l-4-3 4-3zM3 4h18v2H3zm6 14v2H3v-2z" />
    </svg>
  )
})
Icon.displayName = 'TextWrap'
/**
 * Remix Icon: Text Wrap
 * @see {@link https://remixicon.com/icon/text-wrap Remix Icon Docs}
 */
export const TextWrap = Icon
