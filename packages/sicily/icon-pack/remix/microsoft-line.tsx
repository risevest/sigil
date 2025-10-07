import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M11.001 5h-6v6h6zm2 0v6h6V5zm6 8h-6v6h6zm-8 6v-6h-6v6zm-8-16h18v18h-18z" />
    </svg>
  )
})
Icon.displayName = 'MicrosoftLine'
/**
 * Remix Icon: Microsoft Line
 * @see {@link https://remixicon.com/icon/microsoft-line Remix Icon Docs}
 */
export const MicrosoftLine = Icon
