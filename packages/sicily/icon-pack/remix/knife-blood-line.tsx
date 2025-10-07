import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M4.343 1.408 22.374 19.44a1.5 1.5 0 1 1-2.121 2.122l-4.596-4.596L12.12 20.5l-4.12-4.12V19a1 1 0 1 1-2 0v-4a1 1 0 0 0-1.993-.117L4.001 15v1a1 1 0 1 1-2 0V7.214A7.98 7.98 0 0 1 4.17 1.587zm.241 3.07-.051.11a6 6 0 0 0-.522 2.103l-.01.31v.119a5.98 5.98 0 0 0 1.58 4.003l.176.185 6.364 6.364 2.828-2.829z" />
    </svg>
  )
})
Icon.displayName = 'KnifeBloodLine'
/**
 * Remix Icon: Knife Blood Line
 * @see {@link https://remixicon.com/icon/knife-blood-line Remix Icon Docs}
 */
export const KnifeBloodLine = Icon
