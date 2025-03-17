import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M7.69498 3.84531C7.70498 3.84531 7.70498 3.83531 7.71498 3.83531V1.69531H10.715V3.69531H14.715V1.69531H17.715V3.83531C19.435 4.28531 20.715 5.83531 20.715 7.69531V16.8653L18.715 14.8653V7.69531C18.715 6.59531 17.815 5.69531 16.715 5.69531H9.54498L7.69498 3.84531ZM15.545 11.6953L17.215 13.3653V11.6953H15.545ZM20.495 22.3053L19.645 21.4553C19.365 21.6053 19.055 21.6953 18.715 21.6953H6.71498C5.61498 21.6953 4.71498 20.7953 4.71498 19.6953V7.69531C4.71498 7.33531 4.77498 7.00531 4.86498 6.67531L2.10498 3.91531L3.51498 2.50531L21.895 20.8853L20.495 22.3053ZM17.885 19.6953L11.885 13.6953H8.21498V11.6953H9.88498L6.71498 8.52531V19.6953H17.885Z" />
    </Svg>
  )
}

Icon.displayName = 'NoBackpack'

/**
 * Material Icon: No Backpack
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:no_backpack Material Icon Docs}
 */
export const NoBackpack = memo(Icon)
