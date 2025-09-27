import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="m9 5 7 7-7 7v-6H3v-2h6zm9 14V5h2v14z" />
    </svg>
  )
})
Icon.displayName = 'ContractRightFill'
/**
 * Remix Icon: Contract Right Fill
 * @see {@link https://remixicon.com/icon/contract-right-fill Remix Icon Docs}
 */
export const ContractRightFill = Icon
