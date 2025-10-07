import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M5 6a1 1 0 1 1 2 0 1 1 0 0 1-2 0m1-3a3 3 0 0 0-1 5.83v6.34a3.001 3.001 0 1 0 2 0V8.83A3.001 3.001 0 0 0 6 3M5 18a1 1 0 1 1 2 0 1 1 0 0 1-2 0m13-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-3 1a3 3 0 1 1 6 0 3 3 0 0 1-6 0m3-10.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3m1.5 4a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0" />
    </svg>
  )
})
Icon.displayName = 'GitPrDraftLine'
/**
 * Remix Icon: Git Pr Draft Line
 * @see {@link https://remixicon.com/icon/git-pr-draft-line Remix Icon Docs}
 */
export const GitPrDraftLine = Icon
