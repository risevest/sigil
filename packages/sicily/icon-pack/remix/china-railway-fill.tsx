import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M11 19v-6l-2-1V9h6v3l-2 1v6l5 1v2H6v-2zM10 2.223V1h4v1.223a9.003 9.003 0 0 1 2.993 16.266l-1.11-1.664a7 7 0 1 0-7.767 0l-1.109 1.664A9.003 9.003 0 0 1 10 2.223" />
    </svg>
  )
})
Icon.displayName = 'ChinaRailwayFill'
/**
 * Remix Icon: China Railway Fill
 * @see {@link https://remixicon.com/icon/china-railway-fill Remix Icon Docs}
 */
export const ChinaRailwayFill = Icon
