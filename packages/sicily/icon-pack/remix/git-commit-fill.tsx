import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M15.874 13a4.002 4.002 0 0 1-7.748 0H3v-2h5.126a4.002 4.002 0 0 1 7.748 0H21v2z" />
    </svg>
  )
})
Icon.displayName = 'GitCommitFill'
/**
 * Remix Icon: Git Commit Fill
 * @see {@link https://remixicon.com/icon/git-commit-fill Remix Icon Docs}
 */
export const GitCommitFill = Icon
