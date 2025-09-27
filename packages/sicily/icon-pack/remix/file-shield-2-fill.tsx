import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M21 10H11v7.382c0 1.563.777 3.023 2.074 3.892l1.083.726H3.993A.993.993 0 0 1 3 21.008V2.992C3 2.455 3.447 2 3.998 2h11.999L21 7zm-8 2h8v5.382c0 .897-.446 1.734-1.187 2.23L17 21.499l-2.812-1.885A2.68 2.68 0 0 1 13 17.383z" />
    </svg>
  )
})
Icon.displayName = 'FileShield2Fill'
/**
 * Remix Icon: File Shield 2 Fill
 * @see {@link https://remixicon.com/icon/file-shield-2-fill Remix Icon Docs}
 */
export const FileShield2Fill = Icon
