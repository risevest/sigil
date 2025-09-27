import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M7 8.83a3.001 3.001 0 1 0-2 0v6.34a3.001 3.001 0 1 0 2 0zM21 18a3 3 0 1 1-6 0 3 3 0 0 1 6 0M18 7.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3m1.5 4a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0" />
    </svg>
  )
})
Icon.displayName = 'GitPrDraftFill'
/**
 * Remix Icon: Git Pr Draft Fill
 * @see {@link https://remixicon.com/icon/git-pr-draft-fill Remix Icon Docs}
 */
export const GitPrDraftFill = Icon
