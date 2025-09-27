import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="m13.414 6 1.829 1.828-1.415 1.415L9.586 5 13.828.757l1.415 1.415L13.414 4H16a5 5 0 0 1 5 5v4h-2V9a3 3 0 0 0-3-3zM15 11v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V11a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1m-2 1H5v8h8z" />
    </svg>
  )
})
Icon.displayName = 'Anticlockwise2Line'
/**
 * Remix Icon: Anticlockwise 2 Line
 * @see {@link https://remixicon.com/icon/anticlockwise-2-line Remix Icon Docs}
 */
export const Anticlockwise2Line = Icon
