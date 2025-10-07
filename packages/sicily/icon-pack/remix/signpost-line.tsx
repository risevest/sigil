import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M12 5h5.414l4.293 4.293a1 1 0 0 1 0 1.414L17.414 15H12v7h-2v-7H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h6V2h2zm4.586 8 3-3-3-3H5v6z" />
    </svg>
  )
})
Icon.displayName = 'SignpostLine'
/**
 * Remix Icon: Signpost Line
 * @see {@link https://remixicon.com/icon/signpost-line Remix Icon Docs}
 */
export const SignpostLine = Icon
