import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const MedalLine = /* @__PURE__ */ memo(function MedalLine(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M12 7a8 8 0 1 1 0 16 8 8 0 0 1 0-16m0 2a6 6 0 1 0 0 12 6 6 0 0 0 0-12m0 1.5 1.322 2.68 2.958.43-2.14 2.085.505 2.946L12 17.25l-2.645 1.39.505-2.945-2.14-2.086 2.958-.43zM18 2v3l-1.363 1.138A9.9 9.9 0 0 0 13 5.049L13 2zm-7-.001v3.05a9.9 9.9 0 0 0-3.636 1.088L6 5V2z" />
    </Svg>
  )
})
/**
 * Remix Icon: Medal Line
 * @see {@link https://remixicon.com/icon/medal-line Remix Icon Docs}
 */
export { MedalLine }
