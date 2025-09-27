import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M4.293 6.707 9 2h10a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7.414a1 1 0 0 1 .293-.707M15 5v4h2V5zm-3 0v4h2V5zM9 5v4h2V5z" />
    </svg>
  )
})
Icon.displayName = 'SdCardFill'
/**
 * Remix Icon: Sd Card Fill
 * @see {@link https://remixicon.com/icon/sd-card-fill Remix Icon Docs}
 */
export const SdCardFill = Icon
