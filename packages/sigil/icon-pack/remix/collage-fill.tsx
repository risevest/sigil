import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const CollageFill = /* @__PURE__ */ memo(function CollageFill(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="m11.189 13.264 1.383 7.842H4a1 1 0 0 1-1-1V14.71zM20 3.107a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1l-5.398-.001-3.174-18zM9.398 3.106l1.444 8.188L3 12.679V4.107a1 1 0 0 1 1-1z" />
    </Svg>
  )
})
/**
 * Remix Icon: Collage Fill
 * @see {@link https://remixicon.com/icon/collage-fill Remix Icon Docs}
 */
export { CollageFill }
