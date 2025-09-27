import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M9 18H4v-8h5zm-2-2v-4H6v4zm6 0V8h-1v8zm2 2h-5V6h5zm4-2V4h-1v12zm2 2h-5V2h5zm1 4H3v-2h19z" />
    </svg>
  )
})
Icon.displayName = 'NumbersLine'
/**
 * Remix Icon: Numbers Line
 * @see {@link https://remixicon.com/icon/numbers-line Remix Icon Docs}
 */
export const NumbersLine = Icon
