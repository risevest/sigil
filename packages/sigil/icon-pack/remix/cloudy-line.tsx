import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const CloudyLine = /* @__PURE__ */ memo(function CloudyLine(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M9.5 6a6.5 6.5 0 0 0 0 13h7a4.5 4.5 0 1 0-.957-8.898A6.5 6.5 0 0 0 9.5 6m7 15h-7a8.5 8.5 0 1 1 7.215-12.997A6.5 6.5 0 0 1 16.5 21" />
    </Svg>
  )
})
/**
 * Remix Icon: Cloudy Line
 * @see {@link https://remixicon.com/icon/cloudy-line Remix Icon Docs}
 */
export { CloudyLine }
