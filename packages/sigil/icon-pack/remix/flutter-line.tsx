import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const FlutterLine = /* @__PURE__ */ memo(function FlutterLine(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M14.598 10.684h2.828l-5.657 5.658 5.657 5.656h-2.828L8.94 16.341zm-.194-8.68h2.829L5.919 13.318l-1.414-1.414z" />
    </Svg>
  )
})
/**
 * Remix Icon: Flutter Line
 * @see {@link https://remixicon.com/icon/flutter-line Remix Icon Docs}
 */
export { FlutterLine }
