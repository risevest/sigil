import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="m12.598 16-3.2-8h-2l-2 5v.002L4.199 16h2.154l.4-1h3.29l.4 1zm-5.046-3 .847-2.115L9.244 13zM17 8h2v8h-3a3 3 0 1 1 0-6h1zm-1 4a1 1 0 0 0 0 2h1v-2zm5-9H3a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1M4 19V5h16v14z" />
    </svg>
  )
})
Icon.displayName = 'AdvertisementLine'
/**
 * Remix Icon: Advertisement Line
 * @see {@link https://remixicon.com/icon/advertisement-line Remix Icon Docs}
 */
export const AdvertisementLine = Icon
