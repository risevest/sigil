import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M12 2c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2m0 5c-2.76 0-5 2.24-5 5s2.24 5 5 5a5 5 0 0 0 4.288-2.428l-1.715-1.028A3 3 0 1 1 12 9c1.093 0 2.05.584 2.573 1.457l1.715-1.03A5 5 0 0 0 12 7" />
    </svg>
  )
})
Icon.displayName = 'CopyrightFill'
/**
 * Remix Icon: Copyright Fill
 * @see {@link https://remixicon.com/icon/copyright-fill Remix Icon Docs}
 */
export const CopyrightFill = Icon
