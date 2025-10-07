import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M4 2a1 1 0 0 0-1 1v2h2V4h14v16H5v-1H3v2a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1zm5 14a3 3 0 1 1 6 0zm3-4a2 2 0 1 1 0-4 2 2 0 0 1 0 4M6 9V7H2v2zm0 2v2H2v-2zm0 6v-2H2v2z" />
    </svg>
  )
})
Icon.displayName = 'ContactsBook3Line'
/**
 * Remix Icon: Contacts Book 3 Line
 * @see {@link https://remixicon.com/icon/contacts-book-3-line Remix Icon Docs}
 */
export const ContactsBook3Line = Icon
