import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M2.5 7a4.5 4.5 0 1 0 9 0 4.5 4.5 0 0 0-9 0m0 10a4.5 4.5 0 1 0 9 0 4.5 4.5 0 0 0-9 0m10 0a4.5 4.5 0 1 0 9 0 4.5 4.5 0 0 0-9 0m5.025-5.845.278-.636a4.9 4.9 0 0 1 2.496-2.533l.854-.38c.463-.205.463-.878 0-1.083l-.806-.359a4.9 4.9 0 0 1-2.533-2.617l-.285-.688a.57.57 0 0 0-1.058 0l-.285.688a4.9 4.9 0 0 1-2.533 2.617l-.806.359c-.463.205-.463.878 0 1.083l.854.38a4.9 4.9 0 0 1 2.496 2.533l.278.636a.57.57 0 0 0 1.05 0" />
    </svg>
  )
})
Icon.displayName = 'Apps2AiFill'
/**
 * Remix Icon: Apps 2 Ai Fill
 * @see {@link https://remixicon.com/icon/apps-2-ai-fill Remix Icon Docs}
 */
export const Apps2AiFill = Icon
