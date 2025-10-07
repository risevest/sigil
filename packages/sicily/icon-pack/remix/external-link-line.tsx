import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M10 6v2H5v11h11v-5h2v6a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1zm11-3v8h-2V6.413l-7.793 7.794-1.414-1.414L17.585 5H13V3z" />
    </svg>
  )
})
Icon.displayName = 'ExternalLinkLine'
/**
 * Remix Icon: External Link Line
 * @see {@link https://remixicon.com/icon/external-link-line Remix Icon Docs}
 */
export const ExternalLinkLine = Icon
