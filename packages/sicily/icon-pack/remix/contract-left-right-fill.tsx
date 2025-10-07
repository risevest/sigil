import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="m5 18 6-6-6-6zM19 6l-6 6 6 6z" />
    </svg>
  )
})
Icon.displayName = 'ContractLeftRightFill'
/**
 * Remix Icon: Contract Left Right Fill
 * @see {@link https://remixicon.com/icon/contract-left-right-fill Remix Icon Docs}
 */
export const ContractLeftRightFill = Icon
