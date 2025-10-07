import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="m17.586 5 2.556-2.556 1.414 1.414L19 6.414V17h3v2h-3v3h-2V7H9V5zM15 17v2H6a1 1 0 0 1-1-1V7H2V5h3V2h2v15zM9 9h6v6H9z" />
    </svg>
  )
})
Icon.displayName = 'Crop2Fill'
/**
 * Remix Icon: Crop 2 Fill
 * @see {@link https://remixicon.com/icon/crop-2-fill Remix Icon Docs}
 */
export const Crop2Fill = Icon
