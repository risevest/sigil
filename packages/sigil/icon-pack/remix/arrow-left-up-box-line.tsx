import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const ArrowLeftUpBoxLine = /* @__PURE__ */ memo(function ArrowLeftUpBoxLine(
  _props: IconProps
) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M20 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1M5 19V5h14v14zM8 8v8h2v-4.586l5.293 5.293 1.414-1.414L11.414 10H16V8z" />
    </Svg>
  )
})
/**
 * Remix Icon: Arrow Left Up Box Line
 * @see {@link https://remixicon.com/icon/arrow-left-up-box-line Remix Icon Docs}
 */
export { ArrowLeftUpBoxLine }
