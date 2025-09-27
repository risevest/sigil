import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M19 10v9h-2v-7H9.414v5.414L3 11l6.414-6.414V10z" />
    </svg>
  )
})
Icon.displayName = 'CornerUpLeftFill'
/**
 * Remix Icon: Corner Up Left Fill
 * @see {@link https://remixicon.com/icon/corner-up-left-fill Remix Icon Docs}
 */
export const CornerUpLeftFill = Icon
