import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10m5.457-12.543L11 15.914l-4.207-4.207 1.414-1.414L11 13.086l5.043-5.043z" />
    </svg>
  )
})
Icon.displayName = 'CheckboxCircleFill'
/**
 * Remix Icon: Checkbox Circle Fill
 * @see {@link https://remixicon.com/icon/checkbox-circle-fill Remix Icon Docs}
 */
export const CheckboxCircleFill = Icon
