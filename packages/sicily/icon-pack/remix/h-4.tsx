import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M13 20h-2v-7H4v7H2V4h2v7h7V4h2zm9-12v8h1.5v2H22v2h-2v-2h-5.5v-1.34l5-8.66zm-2 3.133L17.19 16H20z" />
    </svg>
  )
})
Icon.displayName = 'H4'
/**
 * Remix Icon: H 4
 * @see {@link https://remixicon.com/icon/h-4 Remix Icon Docs}
 */
export const H4 = Icon
