import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10m3.446-12.032a4 4 0 0 0-1.414-1.414l-5.478 5.478a4 4 0 0 0 1.414 1.414z" />
    </svg>
  )
})
Icon.displayName = 'Compass4Fill'
/**
 * Remix Icon: Compass 4 Fill
 * @see {@link https://remixicon.com/icon/compass-4-fill Remix Icon Docs}
 */
export const Compass4Fill = Icon
