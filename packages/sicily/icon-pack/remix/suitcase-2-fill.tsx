import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M18 23h-2v-1H8v1H6v-1H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h3V3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2h3a2 2 0 0 1 2 2v13a2 2 0 0 1-2 2h-1zM10 9H8v9h2zm6 0h-2v9h2zm-2-5h-4v1h4z" />
    </svg>
  )
})
Icon.displayName = 'Suitcase2Fill'
/**
 * Remix Icon: Suitcase 2 Fill
 * @see {@link https://remixicon.com/icon/suitcase-2-fill Remix Icon Docs}
 */
export const Suitcase2Fill = Icon
