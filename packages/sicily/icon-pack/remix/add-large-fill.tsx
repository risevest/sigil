import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M11 11V2h2v9h9v2h-9v9h-2v-9H2v-2z" />
    </svg>
  )
})
Icon.displayName = 'AddLargeFill'
/**
 * Remix Icon: Add Large Fill
 * @see {@link https://remixicon.com/icon/add-large-fill Remix Icon Docs}
 */
export const AddLargeFill = Icon
