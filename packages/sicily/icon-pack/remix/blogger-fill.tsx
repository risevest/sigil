import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M19.822 9.729H18.73a1.113 1.113 0 0 1-1.093-1.094A5.636 5.636 0 0 0 12 3H8.636A5.636 5.636 0 0 0 3 8.635v6.73A5.636 5.636 0 0 0 8.636 21h6.729A5.636 5.636 0 0 0 21 15.364v-4.458a1.15 1.15 0 0 0-1.178-1.177M8.552 7.542h4.037c.589 0 1.093.504 1.093 1.093S13.178 9.73 12.59 9.73H8.55a1.113 1.113 0 0 1-1.093-1.094c0-.589.505-1.093 1.093-1.093m6.897 8.916H8.636a1.113 1.113 0 0 1-1.094-1.094c0-.589.505-1.093 1.094-1.093h6.813c.588 0 1.093.504 1.093 1.093s-.505 1.094-1.093 1.094" />
    </svg>
  )
})
Icon.displayName = 'BloggerFill'
/**
 * Remix Icon: Blogger Fill
 * @see {@link https://remixicon.com/icon/blogger-fill Remix Icon Docs}
 */
export const BloggerFill = Icon
