import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10m-4-9a4 4 0 0 0 8 0z" />
    </svg>
  )
})
Icon.displayName = 'Emotion2Fill'
/**
 * Remix Icon: Emotion 2 Fill
 * @see {@link https://remixicon.com/icon/emotion-2-fill Remix Icon Docs}
 */
export const Emotion2Fill = Icon
