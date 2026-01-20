import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const ArrowLeftUpLongLine = /* @__PURE__ */ memo(function ArrowLeftUpLongLine(
  _props: IconProps
) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="m19.778 18.364-1.414 1.414L6.93 8.343v5.586h-2v-9h9v2H8.343z" />
    </Svg>
  )
})
/**
 * Remix Icon: Arrow Left Up Long Line
 * @see {@link https://remixicon.com/icon/arrow-left-up-long-line Remix Icon Docs}
 */
export { ArrowLeftUpLongLine }
