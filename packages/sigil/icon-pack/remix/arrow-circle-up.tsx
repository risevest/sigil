import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const ArrowCircleUp = /* @__PURE__ */ memo(function ArrowCircleUp(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2m0 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16" />
      <Path d="m12.001 8.593 4.243 4.243-1.415 1.414-2.828-2.829-2.828 2.829-1.415-1.414z" />
    </Svg>
  )
})
/**
 * Remix Icon: Arrow Circle Up
 * @see {@link https://remixicon.com/icon/arrow-circle-up Remix Icon Docs}
 */
export { ArrowCircleUp }
