import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M2 22a8 8 0 1 1 16 0zm8-9c-3.315 0-6-2.685-6-6s2.685-6 6-6 6 2.685 6 6-2.685 6-6 6m10 4h4v2h-4zm-3-5h7v2h-7zm2-5h5v2h-5z" />
    </svg>
  )
})
Icon.displayName = 'ContactsFill'
/**
 * Remix Icon: Contacts Fill
 * @see {@link https://remixicon.com/icon/contacts-fill Remix Icon Docs}
 */
export const ContactsFill = Icon
