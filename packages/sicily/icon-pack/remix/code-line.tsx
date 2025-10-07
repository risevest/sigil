import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="m23 12-7.071 7.071-1.414-1.414L20.172 12l-5.657-5.657 1.414-1.414zM3.828 12l5.657 5.657-1.414 1.414L1 12l7.071-7.071 1.414 1.414z" />
    </svg>
  )
})
Icon.displayName = 'CodeLine'
/**
 * Remix Icon: Code Line
 * @see {@link https://remixicon.com/icon/code-line Remix Icon Docs}
 */
export const CodeLine = Icon
