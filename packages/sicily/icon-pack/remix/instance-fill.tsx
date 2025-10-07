import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="m12 1 9.5 5.5v11L12 23l-9.5-5.5v-11zM6.499 9.97 11 12.578v5.048h2v-5.048l4.501-2.606-1.002-1.731L12 10.845 7.501 8.24z" />
    </svg>
  )
})
Icon.displayName = 'InstanceFill'
/**
 * Remix Icon: Instance Fill
 * @see {@link https://remixicon.com/icon/instance-fill Remix Icon Docs}
 */
export const InstanceFill = Icon
