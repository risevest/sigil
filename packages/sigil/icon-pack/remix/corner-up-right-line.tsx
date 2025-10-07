import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M5 10v9h2v-7h10.172l-3.95 3.95 1.414 1.414L21 11l-6.364-6.364-1.414 1.414 3.95 3.95z" />
    </Svg>
  )
})
Icon.displayName = 'CornerUpRightLine'
/**
 * Remix Icon: Corner Up Right Line
 * @see {@link https://remixicon.com/icon/corner-up-right-line Remix Icon Docs}
 */
export const CornerUpRightLine = Icon
