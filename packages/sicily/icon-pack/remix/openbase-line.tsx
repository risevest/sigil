import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M12 3 2 5.996l1 9.464 9 7.04 9-7.04 1-9.464zm7.837 4.436L12 19.96 4.163 7.436 12 5.088z" />
    </svg>
  )
})
Icon.displayName = 'OpenbaseLine'
/**
 * Remix Icon: Openbase Line
 * @see {@link https://remixicon.com/icon/openbase-line Remix Icon Docs}
 */
export const OpenbaseLine = Icon
