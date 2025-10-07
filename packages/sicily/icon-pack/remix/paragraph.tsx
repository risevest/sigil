import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M12 6v15h-2v-5a6 6 0 0 1 0-12h10v2h-3v15h-2V6zm-2 0a4 4 0 1 0 0 8z" />
    </svg>
  )
})
Icon.displayName = 'Paragraph'
/**
 * Remix Icon: Paragraph
 * @see {@link https://remixicon.com/icon/paragraph Remix Icon Docs}
 */
export const Paragraph = Icon
