import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M9 6a3 3 0 0 1-2 2.83V9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-.17a3.001 3.001 0 1 1 2 0V9a4 4 0 0 1-4 4h-2v2.17a3.001 3.001 0 1 1-2 0V13H9a4 4 0 0 1-4-4v-.17A3.001 3.001 0 1 1 9 6" />
    </svg>
  )
})
Icon.displayName = 'GitForkFill'
/**
 * Remix Icon: Git Fork Fill
 * @see {@link https://remixicon.com/icon/git-fork-fill Remix Icon Docs}
 */
export const GitForkFill = Icon
