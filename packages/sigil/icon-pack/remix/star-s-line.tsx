import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const StarSLine = /* @__PURE__ */ memo(function StarSLine(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="m12 17-5.878 3.59 1.598-6.7-5.23-4.48 6.865-.55L12 2.5l2.645 6.36 6.865.55-5.23 4.48 1.598 6.7zm0-2.344 2.816 1.72-.765-3.21 2.506-2.147-3.29-.264L12 7.708l-1.268 3.047-3.29.264 2.507 2.147-.766 3.21z" />
    </Svg>
  )
})
/**
 * Remix Icon: Star S Line
 * @see {@link https://remixicon.com/icon/star-s-line Remix Icon Docs}
 */
export { StarSLine }
