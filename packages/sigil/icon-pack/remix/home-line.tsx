import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const HomeLine = /* @__PURE__ */ memo(function HomeLine(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M21 20a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9.49a1 1 0 0 1 .386-.79l8-6.223a1 1 0 0 1 1.228 0l8 6.223a1 1 0 0 1 .386.79zm-2-1V9.978l-7-5.444-7 5.444V19z" />
    </Svg>
  )
})
/**
 * Remix Icon: Home Line
 * @see {@link https://remixicon.com/icon/home-line Remix Icon Docs}
 */
export { HomeLine }
