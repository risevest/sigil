import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const MeteorFill = /* @__PURE__ */ memo(function MeteorFill(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M21 1v12A9 9 0 1 1 7.375 5.278L14 1.453v2.77zm-9 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10" />
    </Svg>
  )
})
/**
 * Remix Icon: Meteor Fill
 * @see {@link https://remixicon.com/icon/meteor-fill Remix Icon Docs}
 */
export { MeteorFill }
