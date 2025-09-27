import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M11.124 1.09h1.751l.052.855a9.743 9.743 0 0 0 9.128 9.128l.854.052v1.75l-.854.052a9.743 9.743 0 0 0-9.128 9.128l-.052.855h-1.75l-.052-.855a9.743 9.743 0 0 0-9.128-9.128l-.854-.051v-1.751l.854-.052a9.743 9.743 0 0 0 9.128-9.128zM12 5.85A11.6 11.6 0 0 1 5.85 12 11.6 11.6 0 0 1 12 18.15 11.6 11.6 0 0 1 18.15 12 11.6 11.6 0 0 1 12 5.85" />
    </svg>
  )
})
Icon.displayName = 'GeminiLine'
/**
 * Remix Icon: Gemini Line
 * @see {@link https://remixicon.com/icon/gemini-line Remix Icon Docs}
 */
export const GeminiLine = Icon
