import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M2 5.5V3.993A1 1 0 0 1 2.992 3h18.016c.548 0 .992.445.992.993v16.014a1 1 0 0 1-.992.993H2.992A.993.993 0 0 1 2 20.007V19h18V7.3l-8 7.2zM0 10h5v2H0zm0 5h8v2H0z" />
    </svg>
  )
})
Icon.displayName = 'MailSendFill'
/**
 * Remix Icon: Mail Send Fill
 * @see {@link https://remixicon.com/icon/mail-send-fill Remix Icon Docs}
 */
export const MailSendFill = Icon
