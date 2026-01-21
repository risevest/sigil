import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Book3Fill = /* @__PURE__ */ memo(function Book3Fill(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M21 4H7a2 2 0 1 0 0 4h14v13a1 1 0 0 1-1 1H7a4 4 0 0 1-4-4V6a4 4 0 0 1 4-4h13a1 1 0 0 1 1 1zm-1 3H7a1 1 0 0 1 0-2h13z" />
    </Svg>
  )
})
/**
 * Remix Icon: Book 3 Fill
 * @see {@link https://remixicon.com/icon/book-3-fill Remix Icon Docs}
 */
export { Book3Fill }
