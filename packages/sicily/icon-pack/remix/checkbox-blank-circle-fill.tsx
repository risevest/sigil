import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10" />
    </svg>
  )
})
Icon.displayName = 'CheckboxBlankCircleFill'
/**
 * Remix Icon: Checkbox Blank Circle Fill
 * @see {@link https://remixicon.com/icon/checkbox-blank-circle-fill Remix Icon Docs}
 */
export const CheckboxBlankCircleFill = Icon
