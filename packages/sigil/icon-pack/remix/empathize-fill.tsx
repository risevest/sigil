import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M18.364 10.98a4 4 0 0 1 0 5.656l-5.657 5.657a1 1 0 0 1-1.414 0l-5.657-5.657a4 4 0 1 1 5.657-5.657l.707.707.707-.707a4 4 0 0 1 5.657 0M12 1a4 4 0 1 1 0 8 4 4 0 0 1 0-8" />
    </Svg>
  )
})
Icon.displayName = 'EmpathizeFill'
/**
 * Remix Icon: Empathize Fill
 * @see {@link https://remixicon.com/icon/empathize-fill Remix Icon Docs}
 */
export const EmpathizeFill = Icon
