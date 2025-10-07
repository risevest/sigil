import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M16.626 3.129 9.29 10.462 9.3 14.71l4.238-.008 7.331-7.33A9.96 9.96 0 0 1 22 11.996c0 5.523-4.477 10-10 10s-10-4.477-10-10 4.477-10 10-10c1.669 0 3.242.409 4.626 1.131m3.86-1.032 1.413 1.414-9.192 9.193-1.412.002-.002-1.416z" />
    </Svg>
  )
})
Icon.displayName = 'EditCircleFill'
/**
 * Remix Icon: Edit Circle Fill
 * @see {@link https://remixicon.com/icon/edit-circle-fill Remix Icon Docs}
 */
export const EditCircleFill = Icon
