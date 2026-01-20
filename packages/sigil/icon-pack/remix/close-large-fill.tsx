import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const CloseLargeFill = /* @__PURE__ */ memo(function CloseLargeFill(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M10.586 12 2.793 4.207l1.414-1.414L12 10.586l7.793-7.793 1.414 1.414L13.414 12l7.793 7.793-1.414 1.414L12 13.414l-7.793 7.793-1.414-1.414z" />
    </Svg>
  )
})
/**
 * Remix Icon: Close Large Fill
 * @see {@link https://remixicon.com/icon/close-large-fill Remix Icon Docs}
 */
export { CloseLargeFill }
