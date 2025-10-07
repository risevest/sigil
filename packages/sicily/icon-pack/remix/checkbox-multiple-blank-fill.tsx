import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M7 7V3a1 1 0 0 1 1-1h13a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-4v3.992C17 21.55 16.551 22 15.992 22H3.008A1.006 1.006 0 0 1 2 20.992l.003-12.985C2.003 7.451 2.452 7 3.01 7zm2 0h6.993C16.549 7 17 7.449 17 8.007V15h3V4H9z" />
    </svg>
  )
})
Icon.displayName = 'CheckboxMultipleBlankFill'
/**
 * Remix Icon: Checkbox Multiple Blank Fill
 * @see {@link https://remixicon.com/icon/checkbox-multiple-blank-fill Remix Icon Docs}
 */
export const CheckboxMultipleBlankFill = Icon
