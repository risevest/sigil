import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M18 17H6v-2h12zm-6-4 6-6H6z" />
    </svg>
  )
})
Icon.displayName = 'SkipDownFill'
/**
 * Remix Icon: Skip Down Fill
 * @see {@link https://remixicon.com/icon/skip-down-fill Remix Icon Docs}
 */
export const SkipDownFill = Icon
