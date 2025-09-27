import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M19.005 2C20.107 2 21 2.898 21 3.99v16.02c0 1.099-.893 1.99-1.995 1.99H3V2zM7 4H5v16h2zm12 0H9v16h10zm-5 4 4 4h-3v4h-2v-4h-3zm10 4v4h-2v-4zm0-6v4h-2V6z" />
    </svg>
  )
})
Icon.displayName = 'ContactsBookUploadLine'
/**
 * Remix Icon: Contacts Book Upload Line
 * @see {@link https://remixicon.com/icon/contacts-book-upload-line Remix Icon Docs}
 */
export const ContactsBookUploadLine = Icon
