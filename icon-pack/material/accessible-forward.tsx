import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M17.5 6.26953C18.6046 6.26953 19.5 5.3741 19.5 4.26953C19.5 3.16496 18.6046 2.26953 17.5 2.26953C16.3954 2.26953 15.5 3.16496 15.5 4.26953C15.5 5.3741 16.3954 6.26953 17.5 6.26953Z" />
      <Path d="M14.5 16.7295H12.5C12.5 18.3795 11.15 19.7295 9.5 19.7295C7.85 19.7295 6.5 18.3795 6.5 16.7295C6.5 15.0795 7.85 13.7295 9.5 13.7295V11.7295C6.74 11.7295 4.5 13.9695 4.5 16.7295C4.5 19.4895 6.74 21.7295 9.5 21.7295C12.26 21.7295 14.5 19.4895 14.5 16.7295ZM17.5 13.2295H15.64L17.31 9.55953C17.92 8.22953 16.94 6.72953 15.46 6.72953H10.26C9.45 6.72953 8.72 7.19953 8.39 7.92953L7.72 9.72953L9.64 10.2595L10.29 8.72953H12.5L10.67 12.8295C10.07 14.1595 11.06 15.7295 12.52 15.7295H17.5V20.7295H19.5V15.2295C19.5 14.1295 18.6 13.2295 17.5 13.2295Z" />
    </Svg>
  )
}

Icon.displayName = 'AccessibleForward'

/**
 * Material Icon: Accessible Forward
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:accessible_forward Material Icon Docs}
 */
export const AccessibleForward = memo(Icon)
