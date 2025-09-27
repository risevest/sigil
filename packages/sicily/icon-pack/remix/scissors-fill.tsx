import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M9.683 7.559 12 9.875l6.374-6.374a2 2 0 0 1 2.829 0l.707.707L9.683 16.435a4 4 0 1 1-2.121-2.121l2.317-2.317L7.562 9.68A4 4 0 1 1 9.683 7.56M6 7.997a2 2 0 1 0 0-4 2 2 0 0 0 0 4m0 12a2 2 0 1 0 0-4 2 2 0 0 0 0 4m9.535-6.587 6.375 6.375-.707.707a2 2 0 0 1-2.829 0l-4.96-4.96z" />
    </svg>
  )
})
Icon.displayName = 'ScissorsFill'
/**
 * Remix Icon: Scissors Fill
 * @see {@link https://remixicon.com/icon/scissors-fill Remix Icon Docs}
 */
export const ScissorsFill = Icon
