import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M10.4988 11.5015H12.6188L18.7788 5.34152L16.6588 3.22152L10.4988 9.38152V11.5015ZM20.2088 2.50152L19.4988 1.79152C19.1088 1.40152 18.4788 1.40152 18.0888 1.79152L17.3688 2.51152L19.4888 4.63152L20.2088 3.91152C20.5988 3.52152 20.5988 2.89152 20.2088 2.50152ZM17.3988 9.55152C17.4588 9.91152 17.4988 10.2915 17.4988 10.7015C17.4988 12.4115 16.4188 15.3415 11.4988 19.8415C6.57878 15.3515 5.49878 12.4115 5.49878 10.7015C5.49878 6.67152 8.58878 4.50152 11.4988 4.50152C11.8188 4.50152 12.1488 4.53152 12.4688 4.58152L14.1188 2.93152C13.2788 2.66152 12.3988 2.50152 11.4988 2.50152C7.29878 2.50152 3.49878 5.72152 3.49878 10.7015C3.49878 14.0215 6.16878 17.9515 11.4988 22.5015C16.8288 17.9515 19.4988 14.0215 19.4988 10.7015C19.4988 9.69152 19.3388 8.76152 19.0488 7.90152L17.3988 9.55152Z" />
    </Svg>
  )
}

Icon.displayName = 'EditLocationAlt'

/**
 * Material Icon: Edit Location Alt
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:edit_location_alt Material Icon Docs}
 */
export const EditLocationAlt = memo(Icon)
