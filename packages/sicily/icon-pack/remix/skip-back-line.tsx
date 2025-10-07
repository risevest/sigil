import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M7 4a1 1 0 0 1 1 1v6.333l10.223-6.815a.5.5 0 0 1 .777.416v14.132a.5.5 0 0 1-.777.416L8 12.667V19a1 1 0 1 1-2 0V5a1 1 0 0 1 1-1m10 3.737L10.606 12 17 16.263z" />
    </svg>
  )
})
Icon.displayName = 'SkipBackLine'
/**
 * Remix Icon: Skip Back Line
 * @see {@link https://remixicon.com/icon/skip-back-line Remix Icon Docs}
 */
export const SkipBackLine = Icon
