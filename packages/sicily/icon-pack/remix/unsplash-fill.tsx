import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M8.501 11v5h7v-5h5.5v10h-18V11zm7-8v5h-7V3z" />
    </svg>
  )
})
Icon.displayName = 'UnsplashFill'
/**
 * Remix Icon: Unsplash Fill
 * @see {@link https://remixicon.com/icon/unsplash-fill Remix Icon Docs}
 */
export const UnsplashFill = Icon
