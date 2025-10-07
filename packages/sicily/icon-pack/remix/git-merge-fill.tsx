import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M7.105 8.79A3 3 0 0 0 10 11h4a5 5 0 0 1 4.927 4.146A3.001 3.001 0 0 1 18 21a3 3 0 0 1-1.105-5.79A3 3 0 0 0 14 13h-4a4.98 4.98 0 0 1-3-1v3.17a3.001 3.001 0 1 1-2 0V8.83a3.001 3.001 0 1 1 2.105-.04" />
    </svg>
  )
})
Icon.displayName = 'GitMergeFill'
/**
 * Remix Icon: Git Merge Fill
 * @see {@link https://remixicon.com/icon/git-merge-fill Remix Icon Docs}
 */
export const GitMergeFill = Icon
