import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M18 7q0 .393-.05.774A6 6 0 0 1 13 18.658V22h-2v-3.6a5.5 5.5 0 0 1-6.517-8.657A8 8 0 0 0 6.286 12.6l1.428-1.4A6 6 0 0 1 6 7a6 6 0 1 1 12 0" />
    </svg>
  )
})
Icon.displayName = 'TreeFill'
/**
 * Remix Icon: Tree Fill
 * @see {@link https://remixicon.com/icon/tree-fill Remix Icon Docs}
 */
export const TreeFill = Icon
