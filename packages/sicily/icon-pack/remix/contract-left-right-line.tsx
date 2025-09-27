import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M18.793 5.793 12.586 12l6.207 6.207 1.414-1.414L15.414 12l4.793-4.793zM5.207 18.207 11.414 12 5.207 5.793 3.793 7.207 8.586 12l-4.793 4.793z" />
    </svg>
  )
})
Icon.displayName = 'ContractLeftRightLine'
/**
 * Remix Icon: Contract Left Right Line
 * @see {@link https://remixicon.com/icon/contract-left-right-line Remix Icon Docs}
 */
export const ContractLeftRightLine = Icon
