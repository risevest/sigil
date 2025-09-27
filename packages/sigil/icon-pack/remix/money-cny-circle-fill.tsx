import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M12.005 22.003c-5.523 0-10-4.477-10-10s4.477-10 10-10 10 4.477 10 10-4.477 10-10 10m1-9v-1h3v-2h-2.586L15.54 7.88l-1.414-1.414-2.121 2.122-2.121-2.122-1.415 1.414 2.122 2.122H8.005v2h3v1h-3v2h3v2h2v-2h3v-2z" />
    </Svg>
  )
})
Icon.displayName = 'MoneyCnyCircleFill'
/**
 * Remix Icon: Money Cny Circle Fill
 * @see {@link https://remixicon.com/icon/money-cny-circle-fill Remix Icon Docs}
 */
export const MoneyCnyCircleFill = Icon
