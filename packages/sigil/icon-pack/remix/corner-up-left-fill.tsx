import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M19 10v9h-2v-7H9.414v5.414L3 11l6.414-6.414V10z" />
    </Svg>
  )
})
Icon.displayName = 'CornerUpLeftFill'
/**
 * Remix Icon: Corner Up Left Fill
 * @see {@link https://remixicon.com/icon/corner-up-left-fill Remix Icon Docs}
 */
export const CornerUpLeftFill = Icon
