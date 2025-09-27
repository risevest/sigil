import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10m4-14h-1.35v4H16zM9.346 9.71l6.059 7.828 1.054-.809L9.683 8H8v7.997h1.346z" />
    </svg>
  )
})
Icon.displayName = 'NextjsFill'
/**
 * Remix Icon: Nextjs Fill
 * @see {@link https://remixicon.com/icon/nextjs-fill Remix Icon Docs}
 */
export const NextjsFill = Icon
