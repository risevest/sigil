import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M5 10v9h2v-7h7.586v5.414L21 11l-6.414-6.414V10z" />
    </svg>
  )
})
Icon.displayName = 'CornerUpRightFill'
/**
 * Remix Icon: Corner Up Right Fill
 * @see {@link https://remixicon.com/icon/corner-up-right-fill Remix Icon Docs}
 */
export const CornerUpRightFill = Icon
