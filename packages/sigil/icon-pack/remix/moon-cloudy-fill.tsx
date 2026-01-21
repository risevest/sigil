import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const MoonCloudyFill = /* @__PURE__ */ memo(function MoonCloudyFill(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M8.67 5.007a7 7 0 0 1 7.55-3.901 4.5 4.5 0 0 0 5.674 5.674 7.04 7.04 0 0 1-.759 4.593A5.5 5.5 0 0 1 17.5 21H9a8 8 0 0 1-.33-15.993m2.177.207a8.02 8.02 0 0 1 5.61 4.885 5.53 5.53 0 0 1 2.96.245 5 5 0 0 0 .488-1.37 6.5 6.5 0 0 1-5.878-5.88 5 5 0 0 0-3.18 2.12" />
    </Svg>
  )
})
/**
 * Remix Icon: Moon Cloudy Fill
 * @see {@link https://remixicon.com/icon/moon-cloudy-fill Remix Icon Docs}
 */
export { MoonCloudyFill }
