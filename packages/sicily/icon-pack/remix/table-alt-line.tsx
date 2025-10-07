import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M21 3a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm-1 13H4v3h16zM8 5H4v9h4zm6 0h-4v9h4zm6 0h-4v9h4z" />
    </svg>
  )
})
Icon.displayName = 'TableAltLine'
/**
 * Remix Icon: Table Alt Line
 * @see {@link https://remixicon.com/icon/table-alt-line Remix Icon Docs}
 */
export const TableAltLine = Icon
