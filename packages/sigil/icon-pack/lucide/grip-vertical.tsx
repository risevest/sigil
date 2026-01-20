import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const GripVertical = /* @__PURE__ */ memo(function GripVertical(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill="none" viewBox="0 0 16 17" width={size} height={size} {...props}>
      <Path
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.333}
        d="M6.003 9.088a.667.667 0 1 0 0-1.333.667.667 0 0 0 0 1.333M6.003 4.422a.667.667 0 1 0 0-1.334.667.667 0 0 0 0 1.334M6.003 13.755a.667.667 0 1 0 0-1.333.667.667 0 0 0 0 1.333M10.003 9.088a.667.667 0 1 0 0-1.333.667.667 0 0 0 0 1.333M10.003 4.422a.667.667 0 1 0 0-1.334.667.667 0 0 0 0 1.334M10.003 13.755a.667.667 0 1 0 0-1.333.667.667 0 0 0 0 1.333"
      />
    </Svg>
  )
})
/**
 * Lucide Icon: Grip Vertical
 * @see {@link https://lucide.dev/icons/grip-vertical Lucide Icon Docs}
 */
export { GripVertical }
