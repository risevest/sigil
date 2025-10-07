import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M13 21v2.5l-3-2-3 2V21h-.5A3.5 3.5 0 0 1 3 17.5V5a3 3 0 0 1 3-3h14a1 1 0 0 1 1 1v17a1 1 0 0 1-1 1zm-6-2v-2h6v2h6v-3H6.5a1.5 1.5 0 0 0 0 3zM7 5v2h2V5zm0 3v2h2V8zm0 3v2h2v-2z" />
    </svg>
  )
})
Icon.displayName = 'GitRepositoryFill'
/**
 * Remix Icon: Git Repository Fill
 * @see {@link https://remixicon.com/icon/git-repository-fill Remix Icon Docs}
 */
export const GitRepositoryFill = Icon
