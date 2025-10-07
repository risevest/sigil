import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M23 19h-1V9h-4V6.586l-6-6-6 6V9H2v10H1v2h22zM6 19H4v-8h2zm12-8h2v8h-2zm-7 1h2v7h-2z" />
    </svg>
  )
})
Icon.displayName = 'SchoolFill'
/**
 * Remix Icon: School Fill
 * @see {@link https://remixicon.com/icon/school-fill Remix Icon Docs}
 */
export const SchoolFill = Icon
