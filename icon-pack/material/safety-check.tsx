import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M12 2L4 5V11.09C4 16.14 7.41 20.85 12 22C16.59 20.85 20 16.14 20 11.09V5L12 2ZM18 11.09C18 15.09 15.45 18.79 12 19.92C8.55 18.79 6 15.1 6 11.09V6.39L12 4.14L18 6.39V11.09ZM12 7C9.24 7 7 9.24 7 12C7 14.76 9.24 17 12 17C14.76 17 17 14.76 17 12C17 9.24 14.76 7 12 7ZM13.65 14.35L11.5 12.2V9H12.5V11.79L14.35 13.64L13.65 14.35Z" />
    </Svg>
  )
}

Icon.displayName = 'SafetyCheck'

/**
 * Material Icon: Safety Check
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:safety_check Material Icon Docs}
 */
export const SafetyCheck = memo(Icon)
