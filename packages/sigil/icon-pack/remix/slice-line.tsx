import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="m15.69 12.915 1.769 1.767c-6.01 6.01-10.96 6.01-15.203 4.597L17.812 3.722l3.536 3.536zm-2.827 0 5.656-5.657-.707-.707L6.314 18.048c2.732.108 5.358-.906 8.267-3.415z" />
    </Svg>
  )
})
Icon.displayName = 'SliceLine'
/**
 * Remix Icon: Slice Line
 * @see {@link https://remixicon.com/icon/slice-line Remix Icon Docs}
 */
export const SliceLine = Icon
