import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="m12 13.914 4.793 4.793 1.414-1.414L12 11.086l-6.207 6.207 1.414 1.414zM6 7h12v2H6z" />
    </svg>
  )
})
Icon.displayName = 'SkipUpLine'
/**
 * Remix Icon: Skip Up Line
 * @see {@link https://remixicon.com/icon/skip-up-line Remix Icon Docs}
 */
export const SkipUpLine = Icon
