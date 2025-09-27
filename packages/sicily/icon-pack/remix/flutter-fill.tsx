import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="m13.504 2.001-10 10 3.083 3.083 13.08-13.083zm-.005 9.198-5.376 5.42L13.496 22h6.188l-5.387-5.4 5.389-5.4z" />
    </svg>
  )
})
Icon.displayName = 'FlutterFill'
/**
 * Remix Icon: Flutter Fill
 * @see {@link https://remixicon.com/icon/flutter-fill Remix Icon Docs}
 */
export const FlutterFill = Icon
