import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const HomeHeartLine = /* @__PURE__ */ memo(function HomeHeartLine(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M20 20a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-9H1l10.327-9.388a1 1 0 0 1 1.346 0L23 11h-3zm-2-1V9.157l-6-5.454-6 5.454V19zm-6-2-3.359-3.359a2.25 2.25 0 0 1 3.182-3.182l.177.177.177-.177a2.25 2.25 0 0 1 3.182 3.182z" />
    </Svg>
  )
})
/**
 * Remix Icon: Home Heart Line
 * @see {@link https://remixicon.com/icon/home-heart-line Remix Icon Docs}
 */
export { HomeHeartLine }
