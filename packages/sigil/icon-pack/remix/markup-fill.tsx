import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const MarkupFill = /* @__PURE__ */ memo(function MarkupFill(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M12 21.997c-5.523 0-10-4.477-10-10s4.477-10 10-10 10 4.477 10 10-4.477 10-10 10m5.051-3.796-.862-3.447a1 1 0 0 0-.97-.757H8.781a1 1 0 0 0-.97.757l-.862 3.447A7.97 7.97 0 0 0 12 19.997a7.97 7.97 0 0 0 5.051-1.796M10 11.997h4v-1.5l-1.039-3.635a1 1 0 0 0-1.922 0L10 10.497z" />
    </Svg>
  )
})
/**
 * Remix Icon: Markup Fill
 * @see {@link https://remixicon.com/icon/markup-fill Remix Icon Docs}
 */
export { MarkupFill }
