import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const FlaskFill = /* @__PURE__ */ memo(function FlaskFill(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M16 2v2h-1v3.243a8 8 0 0 0 .736 3.352l4.281 9.276A1.5 1.5 0 0 1 18.655 22H5.344a1.5 1.5 0 0 1-1.362-2.129l4.281-9.276A8 8 0 0 0 9 7.243V4H8V2zm-3 2h-2v4h2z" />
    </Svg>
  )
})
/**
 * Remix Icon: Flask Fill
 * @see {@link https://remixicon.com/icon/flask-fill Remix Icon Docs}
 */
export { FlaskFill }
