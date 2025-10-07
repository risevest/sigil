import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M15 5v6h6v2h-6v6l-7-7zM4 19V5h2v14z" />
    </svg>
  )
})
Icon.displayName = 'ContractLeftFill'
/**
 * Remix Icon: Contract Left Fill
 * @see {@link https://remixicon.com/icon/contract-left-fill Remix Icon Docs}
 */
export const ContractLeftFill = Icon
