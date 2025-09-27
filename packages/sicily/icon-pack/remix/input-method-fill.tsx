import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M4 3h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1m5.869 12h4.262l.82 2h2.216L13 7h-2L6.833 17H9.05zm.82-2L12 9.8l1.312 3.2z" />
    </svg>
  )
})
Icon.displayName = 'InputMethodFill'
/**
 * Remix Icon: Input Method Fill
 * @see {@link https://remixicon.com/icon/input-method-fill Remix Icon Docs}
 */
export const InputMethodFill = Icon
