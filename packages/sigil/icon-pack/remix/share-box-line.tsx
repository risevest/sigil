import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const ShareBoxLine = /* @__PURE__ */ memo(function ShareBoxLine(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M10 3v2H5v14h14v-5h2v6a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm7.586 2H13V3h8v8h-2V6.414l-7 7L10.586 12z" />
    </Svg>
  )
})
/**
 * Remix Icon: Share Box Line
 * @see {@link https://remixicon.com/icon/share-box-line Remix Icon Docs}
 */
export { ShareBoxLine }
