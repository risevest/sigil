import { memo } from 'react'
import Svg, { G, Path, Defs, ClipPath } from 'react-native-svg'
import type { IconProps } from '../../types'
const ArrowCircleDown = /* @__PURE__ */ memo(function ArrowCircleDown(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <G clipPath="url(#a)">
        <Path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10m0-2a8 8 0 1 0 0-16.001A8 8 0 0 0 12 20" />
        <Path d="m11.999 15.407-4.243-4.243L9.17 9.75l2.828 2.829 2.828-2.829 1.415 1.414z" />
      </G>
      <Defs>
        <ClipPath id="a">
          <Path fill="none" d="M0 0h24v24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
})
/**
 * Remix Icon: Arrow Circle Down
 * @see {@link https://remixicon.com/icon/arrow-circle-down Remix Icon Docs}
 */
export { ArrowCircleDown }
