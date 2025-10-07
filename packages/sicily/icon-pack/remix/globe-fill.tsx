import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M13 21h5v2H6v-2h5v-1.05a10 10 0 0 1-7.684-4.988l1.737-.992A8 8 0 1 0 15.97 3.053l.993-1.737A10 10 0 0 1 22 10c0 5.185-3.946 9.449-9 9.95zm-1-4a7 7 0 1 1 0-14 7 7 0 0 1 0 14" />
    </svg>
  )
})
Icon.displayName = 'GlobeFill'
/**
 * Remix Icon: Globe Fill
 * @see {@link https://remixicon.com/icon/globe-fill Remix Icon Docs}
 */
export const GlobeFill = Icon
