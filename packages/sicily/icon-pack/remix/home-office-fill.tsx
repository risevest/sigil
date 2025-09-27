import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M20.8 9H12v8h-1v4H5a1 1 0 0 1-1-1v-9H1l10.327-9.388a1 1 0 0 1 1.346 0zM14 11h9v7h-9zm-1 10h11v-2H13z" />
    </svg>
  )
})
Icon.displayName = 'HomeOfficeFill'
/**
 * Remix Icon: Home Office Fill
 * @see {@link https://remixicon.com/icon/home-office-fill Remix Icon Docs}
 */
export const HomeOfficeFill = Icon
