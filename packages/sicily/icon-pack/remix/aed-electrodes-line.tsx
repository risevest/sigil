import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M7 4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1h-3v3a1 1 0 0 1-1 1h-5v2H9v-2H4a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h3zm12 11V5H9v2h7a1 1 0 0 1 1 1v7zM5 9v10h10V9z" />
    </svg>
  )
})
Icon.displayName = 'AedElectrodesLine'
/**
 * Remix Icon: Aed Electrodes Line
 * @see {@link https://remixicon.com/icon/aed-electrodes-line Remix Icon Docs}
 */
export const AedElectrodesLine = Icon
