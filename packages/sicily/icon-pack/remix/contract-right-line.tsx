import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M12.172 11 7.515 6.343 8.929 4.93l7.07 7.07-7.07 7.072-1.414-1.414L12.17 13H3v-2zM18 19V5h2v14z" />
    </svg>
  )
})
Icon.displayName = 'ContractRightLine'
/**
 * Remix Icon: Contract Right Line
 * @see {@link https://remixicon.com/icon/contract-right-line Remix Icon Docs}
 */
export const ContractRightLine = Icon
