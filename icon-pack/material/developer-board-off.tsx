import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M8.48497 4.29453H18.655V14.4645L20.485 16.2945H22.655V14.2945H20.655V12.2945H22.655V10.2945H20.655V8.29453H22.655V6.29453H20.655V4.29453C20.655 3.19453 19.755 2.29453 18.655 2.29453H6.48497L8.48497 4.29453ZM12.655 8.46453V6.29453H16.655V9.29453H13.485L12.655 8.46453ZM10.485 6.29453H11.655V7.46453L10.485 6.29453ZM14.485 10.2945H16.655V12.4645L14.485 10.2945ZM18.655 20.2945C18.715 20.2945 18.765 20.2945 18.815 20.2845L21.135 22.6045L22.545 21.1945L2.75497 1.39453L1.34497 2.80453L2.66497 4.12453C2.65497 4.18453 2.65497 4.23453 2.65497 4.29453V18.2945C2.65497 19.3945 3.55497 20.2945 4.65497 20.2945H18.655ZM4.65497 18.2945V6.12453L6.65497 8.12453V11.2945H9.82497L10.825 12.2945H6.65497V16.2945H11.655V13.1245L12.655 14.1245V16.2945H14.825L16.825 18.2945H4.65497Z" />
    </Svg>
  )
}

Icon.displayName = 'DeveloperBoardOff'

/**
 * Material Icon: Developer Board Off
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:developer_board_off Material Icon Docs}
 */
export const DeveloperBoardOff = memo(Icon)
