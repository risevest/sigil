import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M17 2.5H2V4.5H17V2.5Z" />
      <Path d="M15 15.5H17V12.5H18V10.5L17 5.5H2L1 10.5V12.5H2V18.5H11V12.5H15V15.5ZM9 16.5H4V12.5H9V16.5ZM3.04 10.5L3.64 7.5H15.36L15.96 10.5H3.04Z" />
      <Path d="M23 16.5H20V13.5H18V16.5H15V18.5H18V21.5H20V18.5H23V16.5Z" />
    </Svg>
  )
}

Icon.displayName = 'AddBusiness'

/**
 * Material Icon: Add Business
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:add_business Material Icon Docs}
 */
export const AddBusiness = memo(Icon)
