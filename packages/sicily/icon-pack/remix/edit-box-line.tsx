import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="m16.757 2.997-2 2H5v14h14V9.239l2-2v12.758a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-16a1 1 0 0 1 1-1zm3.728-.9L21.9 3.511l-9.193 9.193-1.412.002-.002-1.416z" />
    </svg>
  )
})
Icon.displayName = 'EditBoxLine'
/**
 * Remix Icon: Edit Box Line
 * @see {@link https://remixicon.com/icon/edit-box-line Remix Icon Docs}
 */
export const EditBoxLine = Icon
