import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const SchoolFill = /* @__PURE__ */ memo(function SchoolFill(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M23 19h-1V9h-4V6.586l-6-6-6 6V9H2v10H1v2h22zM6 19H4v-8h2zm12-8h2v8h-2zm-7 1h2v7h-2z" />
    </Svg>
  )
})
/**
 * Remix Icon: School Fill
 * @see {@link https://remixicon.com/icon/school-fill Remix Icon Docs}
 */
export { SchoolFill }
