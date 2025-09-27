import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M11 2.05v2.012A8.001 8.001 0 0 0 12 20a8 8 0 0 0 7.938-7h2.013c-.502 5.053-4.766 9-9.951 9-5.523 0-10-4.477-10-10 0-5.185 3.947-9.449 9-9.95m7.707 4.657L12 13.414 10.586 12l6.707-6.707L14 2h8v8z" />
    </svg>
  )
})
Icon.displayName = 'ShareCircleFill'
/**
 * Remix Icon: Share Circle Fill
 * @see {@link https://remixicon.com/icon/share-circle-fill Remix Icon Docs}
 */
export const ShareCircleFill = Icon
