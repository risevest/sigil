import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M10 3v2H5v14h14v-5h2v6a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm7.586 2H13V3h8v8h-2V6.414l-7 7L10.586 12z" />
    </svg>
  )
})
Icon.displayName = 'ShareBoxLine'
/**
 * Remix Icon: Share Box Line
 * @see {@link https://remixicon.com/icon/share-box-line Remix Icon Docs}
 */
export const ShareBoxLine = Icon
