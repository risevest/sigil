import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M2 4c0-.552.455-1 .992-1h18.016c.548 0 .992.445.992 1v14c0 .552-.455 1-.992 1H2.992A.994.994 0 0 1 2 18zm2 1v12h16V5zm1 15h14v2H5z" />
    </svg>
  )
})
Icon.displayName = 'Tv2Line'
/**
 * Remix Icon: Tv 2 Line
 * @see {@link https://remixicon.com/icon/tv-2-line Remix Icon Docs}
 */
export const Tv2Line = Icon
