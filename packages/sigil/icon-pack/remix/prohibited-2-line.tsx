import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Prohibited2Line = /* @__PURE__ */ memo(function Prohibited2Line(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M16.906 5.68 5.68 16.906A8 8 0 0 1 16.906 5.68M7.094 18.32 18.32 7.094A8 8 0 0 1 7.094 18.32M12 2C6.477 2 2 6.477 2 12s4.478 10 10 10 10-4.477 10-10S17.522 2 12 2" />
    </Svg>
  )
})
/**
 * Remix Icon: Prohibited 2 Line
 * @see {@link https://remixicon.com/icon/prohibited-2-line Remix Icon Docs}
 */
export { Prohibited2Line }
