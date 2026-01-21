import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const ArrowUpSLine = /* @__PURE__ */ memo(function ArrowUpSLine(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="m12 10.828-4.95 4.95-1.414-1.414L12 8l6.364 6.364-1.414 1.414z" />
    </Svg>
  )
})
/**
 * Remix Icon: Arrow Up S Line
 * @see {@link https://remixicon.com/icon/arrow-up-s-line Remix Icon Docs}
 */
export { ArrowUpSLine }
