import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M4 3h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1" />
    </svg>
  )
})
Icon.displayName = 'CheckboxBlankFill'
/**
 * Remix Icon: Checkbox Blank Fill
 * @see {@link https://remixicon.com/icon/checkbox-blank-fill Remix Icon Docs}
 */
export const CheckboxBlankFill = Icon
