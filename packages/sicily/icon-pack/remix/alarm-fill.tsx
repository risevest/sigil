import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M12 22a9 9 0 1 1 0-18 9 9 0 0 1 0 18m1-9V8h-2v7h5v-2zM1.747 6.283l3.536-3.536 1.414 1.414L3.16 7.697zm16.97-3.536 3.536 3.536-1.414 1.414-3.536-3.536z" />
    </svg>
  )
})
Icon.displayName = 'AlarmFill'
/**
 * Remix Icon: Alarm Fill
 * @see {@link https://remixicon.com/icon/alarm-fill Remix Icon Docs}
 */
export const AlarmFill = Icon
