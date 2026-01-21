import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Forward5Line = /* @__PURE__ */ memo(function Forward5Line(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10h-2a8 8 0 1 1-1.384-4.5H16v2h6v-6h-2V6a9.99 9.99 0 0 0-8-4M9.5 8.5h5V10H11v1.25h1.625a2.125 2.125 0 0 1 0 4.25H9.5V14h3.125a.625.625 0 1 0 0-1.25H9.5z" />
    </Svg>
  )
})
/**
 * Remix Icon: Forward 5 Line
 * @see {@link https://remixicon.com/icon/forward-5-line Remix Icon Docs}
 */
export { Forward5Line }
