import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M10 19h9v-2h-7V9.414h5.414L11 3 4.586 9.414H10z" />
    </svg>
  )
})
Icon.displayName = 'CornerLeftUpFill'
/**
 * Remix Icon: Corner Left Up Fill
 * @see {@link https://remixicon.com/icon/corner-left-up-fill Remix Icon Docs}
 */
export const CornerLeftUpFill = Icon
