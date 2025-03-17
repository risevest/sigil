import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M18 12.72V9.5L13 7V5.5H15V3.5H13V1.5H11V3.5H9V5.5H11V7L6 9.5V12.72L2 14.5V22.5H11V18.5C11 17.95 11.45 17.5 12 17.5C12.55 17.5 13 17.95 13 18.5V22.5H22V14.5L18 12.72ZM20 20.5H15V18.46C15 16.77 13.65 15.4 12 15.4C10.35 15.4 9 16.77 9 18.46V20.5H4V15.71L8 13.9V10.55L12 8.5L16 10.54V13.89L20 15.7V20.5Z" />
      <Path d="M12 14C12.8284 14 13.5 13.3284 13.5 12.5C13.5 11.6716 12.8284 11 12 11C11.1716 11 10.5 11.6716 10.5 12.5C10.5 13.3284 11.1716 14 12 14Z" />
    </Svg>
  )
}

Icon.displayName = 'Church'

/**
 * Material Icon: Church
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:church Material Icon Docs}
 */
export const Church = memo(Icon)
