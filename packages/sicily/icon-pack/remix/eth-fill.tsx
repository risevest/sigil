import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M12 0 4.63 12.22 12 16.574l7.37-4.354zm0 24L4.63 13.617 12 18l7.37-4.383z" />
    </svg>
  )
})
Icon.displayName = 'EthFill'
/**
 * Remix Icon: Eth Fill
 * @see {@link https://remixicon.com/icon/eth-fill Remix Icon Docs}
 */
export const EthFill = Icon
