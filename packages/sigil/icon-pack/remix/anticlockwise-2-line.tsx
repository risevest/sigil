import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Anticlockwise2Line = /* @__PURE__ */ memo(function Anticlockwise2Line(
  _props: IconProps
) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="m13.414 6 1.829 1.828-1.415 1.415L9.586 5 13.828.757l1.415 1.415L13.414 4H16a5 5 0 0 1 5 5v4h-2V9a3 3 0 0 0-3-3zM15 11v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V11a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1m-2 1H5v8h8z" />
    </Svg>
  )
})
/**
 * Remix Icon: Anticlockwise 2 Line
 * @see {@link https://remixicon.com/icon/anticlockwise-2-line Remix Icon Docs}
 */
export { Anticlockwise2Line }
