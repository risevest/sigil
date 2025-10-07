import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="m24 12-5.657 5.657-1.414-1.414L21.172 12l-4.243-4.243 1.414-1.414zM2.828 12l4.243 4.243-1.414 1.414L0 12l5.657-5.657L7.07 7.757z" />
    </svg>
  )
})
Icon.displayName = 'CodeSLine'
/**
 * Remix Icon: Code S Line
 * @see {@link https://remixicon.com/icon/code-s-line Remix Icon Docs}
 */
export const CodeSLine = Icon
