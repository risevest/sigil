import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M12 2 0 9l12 7 10-5.833V17.5h2V9zM3.999 13.49V18a9.99 9.99 0 0 0 8 4A9.99 9.99 0 0 0 20 18v-4.509l-8 4.667z" />
    </svg>
  )
})
Icon.displayName = 'GraduationCapFill'
/**
 * Remix Icon: Graduation Cap Fill
 * @see {@link https://remixicon.com/icon/graduation-cap-fill Remix Icon Docs}
 */
export const GraduationCapFill = Icon
