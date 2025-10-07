import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="m12 2.76 10 3.236-.9 9.468-9.1 6.86-9.1-6.864L2.01 6zm0 .825L3.19 6.435 12 20.793l8.806-14.358z" />
    </svg>
  )
})
Icon.displayName = 'OpenbaseFill'
/**
 * Remix Icon: Openbase Fill
 * @see {@link https://remixicon.com/icon/openbase-fill Remix Icon Docs}
 */
export const OpenbaseFill = Icon
