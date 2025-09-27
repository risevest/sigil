import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M12 19h2V6l6.394 2.74a1 1 0 0 1 .606.92V19h2v2H1v-2h2V5.65a1 1 0 0 1 .594-.914l7.703-3.423a.5.5 0 0 1 .703.456z" />
    </svg>
  )
})
Icon.displayName = 'Building2Fill'
/**
 * Remix Icon: Building 2 Fill
 * @see {@link https://remixicon.com/icon/building-2-fill Remix Icon Docs}
 */
export const Building2Fill = Icon
