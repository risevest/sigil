import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M19 14V5h-2v7H9.414V6.586L3 13l6.414 6.414V14z" />
    </Svg>
  )
})
Icon.displayName = 'CornerDownLeftFill'
/**
 * Remix Icon: Corner Down Left Fill
 * @see {@link https://remixicon.com/icon/corner-down-left-fill Remix Icon Docs}
 */
export const CornerDownLeftFill = Icon
