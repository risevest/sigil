import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M13 11h9v2h-9v9h-2v-9H2v-2h9V2h2z" />
    </svg>
  )
})
Icon.displayName = 'AddLargeLine'
/**
 * Remix Icon: Add Large Line
 * @see {@link https://remixicon.com/icon/add-large-line Remix Icon Docs}
 */
export const AddLargeLine = Icon
