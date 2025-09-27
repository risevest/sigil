import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M7 6a1 1 0 0 1 1 1v10a1 1 0 1 1-2 0V7a1 1 0 0 1 1-1m2.079 6.409a.5.5 0 0 1 0-.818l7.133-5.035a.5.5 0 0 1 .788.409v10.07a.5.5 0 0 1-.788.409z" />
    </svg>
  )
})
Icon.displayName = 'SkipBackMiniFill'
/**
 * Remix Icon: Skip Back Mini Fill
 * @see {@link https://remixicon.com/icon/skip-back-mini-fill Remix Icon Docs}
 */
export const SkipBackMiniFill = Icon
