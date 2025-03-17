import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M19 12.5H22L12 3.5L2 12.5H5V20.5H7V18.5H17V20.5H19V12.5ZM7.21 10.5H16.79L17 10.69V12.5H7V10.69L7.21 10.5ZM14.57 8.5H9.43L12 6.19L14.57 8.5ZM7 16.5V14.5H17V16.5H7Z" />
    </Svg>
  )
}

Icon.displayName = 'HouseSiding'

/**
 * Material Icon: House Siding
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:house_siding Material Icon Docs}
 */
export const HouseSiding = memo(Icon)
