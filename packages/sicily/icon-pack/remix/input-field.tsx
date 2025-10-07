import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M8 5h3v14H8v2h8v-2h-3V5h3V3H8zM2 7a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h6v-2H3V9h5V7zm14 2h5v6h-5v2h6a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1h-6z" />
    </svg>
  )
})
Icon.displayName = 'InputField'
/**
 * Remix Icon: Input Field
 * @see {@link https://remixicon.com/icon/input-field Remix Icon Docs}
 */
export const InputField = Icon
