import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const RewindFill = /* @__PURE__ */ memo(function RewindFill(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="m12 10.667 9.223-6.149a.5.5 0 0 1 .777.416v14.132a.5.5 0 0 1-.777.416L12 13.333v5.733a.5.5 0 0 1-.777.416L.624 12.416a.5.5 0 0 1 0-.832l10.599-7.066a.5.5 0 0 1 .777.416z" />
    </Svg>
  )
})
/**
 * Remix Icon: Rewind Fill
 * @see {@link https://remixicon.com/icon/rewind-fill Remix Icon Docs}
 */
export { RewindFill }
