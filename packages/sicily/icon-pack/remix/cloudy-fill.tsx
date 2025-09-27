import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M9 20.986a8.5 8.5 0 1 1 7.715-12.983A6.5 6.5 0 0 1 17 20.981V21H9z" />
    </svg>
  )
})
Icon.displayName = 'CloudyFill'
/**
 * Remix Icon: Cloudy Fill
 * @see {@link https://remixicon.com/icon/cloudy-fill Remix Icon Docs}
 */
export const CloudyFill = Icon
