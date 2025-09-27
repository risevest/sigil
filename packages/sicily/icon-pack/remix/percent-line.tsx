import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M17.505 21.003a3.5 3.5 0 1 1 0-7 3.5 3.5 0 0 1 0 7m0-2a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3m-11-9a3.5 3.5 0 1 1 0-7 3.5 3.5 0 0 1 0 7m0-2a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3m12.571-4.486 1.414 1.415L4.934 20.488 3.52 19.074z" />
    </svg>
  )
})
Icon.displayName = 'PercentLine'
/**
 * Remix Icon: Percent Line
 * @see {@link https://remixicon.com/icon/percent-line Remix Icon Docs}
 */
export const PercentLine = Icon
