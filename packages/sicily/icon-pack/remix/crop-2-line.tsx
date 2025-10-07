import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M8.414 17H15v2H6a1 1 0 0 1-1-1V7H2V5h3V2h2v13.586L15.586 7H9V5h8.586l2.556-2.556 1.414 1.414L19 6.414V17h3v2h-3v3h-2V8.414z" />
    </svg>
  )
})
Icon.displayName = 'Crop2Line'
/**
 * Remix Icon: Crop 2 Line
 * @see {@link https://remixicon.com/icon/crop-2-line Remix Icon Docs}
 */
export const Crop2Line = Icon
