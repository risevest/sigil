import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M12.998 2v1h7v2h-7v14h4v2h-10v-2h4V5h-7V3h7V2zm-8 4.343 2.828 2.829a4 4 0 1 1-5.657 0zm14 0 2.828 2.829a4 4 0 1 1-5.657 0zm0 2.829-1.414 1.414A1.99 1.99 0 0 0 16.998 12l4 .001c0-.54-.212-1.041-.586-1.415zm-14 0-1.414 1.414A1.99 1.99 0 0 0 2.998 12l4 .001c0-.54-.212-1.041-.586-1.415z" />
    </svg>
  )
})
Icon.displayName = 'ScalesFill'
/**
 * Remix Icon: Scales Fill
 * @see {@link https://remixicon.com/icon/scales-fill Remix Icon Docs}
 */
export const ScalesFill = Icon
