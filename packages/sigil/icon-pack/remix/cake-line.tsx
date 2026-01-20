import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const CakeLine = /* @__PURE__ */ memo(function CakeLine(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M13 7v4h7a1 1 0 0 1 1 1v8h2v2H1v-2h2v-8a1 1 0 0 1 1-1h7V7zm6 6H5v7h14zM13.83.402A3 3 0 0 1 12.732 4.5L11 5.5a3 3 0 0 1 1.098-4.098z" />
    </Svg>
  )
})
/**
 * Remix Icon: Cake Line
 * @see {@link https://remixicon.com/icon/cake-line Remix Icon Docs}
 */
export { CakeLine }
