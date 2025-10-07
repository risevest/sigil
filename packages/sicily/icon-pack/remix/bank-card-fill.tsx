import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M22.005 10v10a1 1 0 0 1-1 1h-18a1 1 0 0 1-1-1V10zm0-2h-20V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1zm-7 8v2h4v-2z" />
    </svg>
  )
})
Icon.displayName = 'BankCardFill'
/**
 * Remix Icon: Bank Card Fill
 * @see {@link https://remixicon.com/icon/bank-card-fill Remix Icon Docs}
 */
export const BankCardFill = Icon
