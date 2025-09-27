import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M11 7.066V1h2v6.066A7.501 7.501 0 0 1 12 22a7.5 7.5 0 0 1-1-14.934" />
    </svg>
  )
})
Icon.displayName = 'GenderlessFill'
/**
 * Remix Icon: Genderless Fill
 * @see {@link https://remixicon.com/icon/genderless-fill Remix Icon Docs}
 */
export const GenderlessFill = Icon
