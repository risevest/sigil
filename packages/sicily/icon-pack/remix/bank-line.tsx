import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M2 20h20v2H2zm2-8h2v7H4zm5 0h2v7H9zm4 0h2v7h-2zm5 0h2v7h-2zM2 7l10-5 10 5v4H2zm2 1.236V9h16v-.764l-8-4zM12 8a1 1 0 1 1 0-2 1 1 0 0 1 0 2" />
    </svg>
  )
})
Icon.displayName = 'BankLine'
/**
 * Remix Icon: Bank Line
 * @see {@link https://remixicon.com/icon/bank-line Remix Icon Docs}
 */
export const BankLine = Icon
