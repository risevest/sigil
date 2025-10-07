import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M12 3a9 9 0 0 1 9 9h-2a7 7 0 0 0-7-7z" />
    </svg>
  )
})
Icon.displayName = 'Loader5Line'
/**
 * Remix Icon: Loader 5 Line
 * @see {@link https://remixicon.com/icon/loader-5-line Remix Icon Docs}
 */
export const Loader5Line = Icon
