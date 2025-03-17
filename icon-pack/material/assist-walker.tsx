import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M13.175 7C14.2795 7 15.175 6.10457 15.175 5C15.175 3.89543 14.2795 3 13.175 3C12.0704 3 11.175 3.89543 11.175 5C11.175 6.10457 12.0704 7 13.175 7Z" />
      <Path d="M20.445 18.22L19.805 11.85C19.735 11.08 19.085 10.5 18.315 10.5H16.675C15.175 10.48 13.815 9.96 12.915 9.06L10.915 7.08C10.755 6.92 10.295 6.5 9.50495 6.5C8.99495 6.5 8.48495 6.7 8.09495 7.09L4.75495 10.41C4.22495 11.09 4.24495 11.98 4.54495 12.54L5.97495 15.34L2.82495 19.39L4.39495 20.63L8.07495 15.9L7.90495 14.54L8.67495 15.25V20.5H10.675V14.38L8.55495 12.26L10.915 9.9C11.855 10.84 12.635 11.72 14.505 12.22L13.675 20.5H15.175L15.585 17H18.765L18.905 18.22C18.465 18.48 18.175 18.96 18.175 19.5C18.175 20.33 18.845 21 19.675 21C20.505 21 21.175 20.33 21.175 19.5C21.175 18.96 20.885 18.48 20.445 18.22ZM15.765 15.5L16.175 12H18.175L18.585 15.5H15.765Z" />
    </Svg>
  )
}

Icon.displayName = 'AssistWalker'

/**
 * Material Icon: Assist Walker
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:assist_walker Material Icon Docs}
 */
export const AssistWalker = memo(Icon)
