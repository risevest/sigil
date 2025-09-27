import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M12 1 6 11h12zm0 3.887L14.468 9H9.532zM6.75 20a2.75 2.75 0 1 1 0-5.5 2.75 2.75 0 0 1 0 5.5m0 2a4.75 4.75 0 1 0 0-9.5 4.75 4.75 0 0 0 0 9.5M15 15.5v4h4v-4zm-2 6v-8h8v8z" />
    </svg>
  )
})
Icon.displayName = 'ShapesLine'
/**
 * Remix Icon: Shapes Line
 * @see {@link https://remixicon.com/icon/shapes-line Remix Icon Docs}
 */
export const ShapesLine = Icon
