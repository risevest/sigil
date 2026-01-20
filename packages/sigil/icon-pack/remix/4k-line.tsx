import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Ri4kLine = /* @__PURE__ */ memo(function Ri4kLine(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M4 5v14h16V5zM3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1m8.5 10.5h-1V15H9v-1.5H6V9h1.5v3H9V9h1.5v3h1zM18 15h-1.75l-1.75-2.25V15H13V9h1.5v2.25L16.25 9H18l-2.25 3z" />
    </Svg>
  )
})
/**
 * Remix Icon: 4k Line
 * @see {@link https://remixicon.com/icon/4k-line Remix Icon Docs}
 */
export { Ri4kLine }
