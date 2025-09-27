import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M5.33 3.272a3.5 3.5 0 0 1 4.472 4.473L20.647 18.59l-2.122 2.122L7.68 9.867a3.5 3.5 0 0 1-4.472-4.474L5.444 7.63a1.5 1.5 0 0 0 2.121-2.121zm10.367 1.883 3.182-1.768 1.414 1.415-1.768 3.182-1.768.353-2.12 2.121-1.415-1.414 2.121-2.121zm-7.071 7.778 2.121 2.122-4.95 4.95A1.5 1.5 0 0 1 3.58 17.99l.097-.107z" />
    </svg>
  )
})
Icon.displayName = 'ToolsFill'
/**
 * Remix Icon: Tools Fill
 * @see {@link https://remixicon.com/icon/tools-fill Remix Icon Docs}
 */
export const ToolsFill = Icon
