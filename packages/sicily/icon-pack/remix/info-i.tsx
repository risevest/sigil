import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M12 6a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3m-3 4h2v8H9v2h6v-2h-2V8H9z" />
    </svg>
  )
})
Icon.displayName = 'InfoI'
/**
 * Remix Icon: Info I
 * @see {@link https://remixicon.com/icon/info-i Remix Icon Docs}
 */
export const InfoI = Icon
