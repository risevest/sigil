import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M14.2737 5.53969C13.7237 6.48969 14.0537 7.71969 15.0037 8.26969C15.9537 8.81969 17.1837 8.48969 17.7337 7.53969C18.2837 6.58969 17.9537 5.35969 17.0037 4.80969C16.0537 4.25969 14.8237 4.58969 14.2737 5.53969Z" />
      <Path d="M15.8437 9.94969C15.8437 9.94969 14.2137 9.00969 13.2437 8.44969C10.8637 7.06969 10.0437 4.00969 11.4237 1.62969L9.69367 0.629694C8.10367 3.36969 8.60367 6.74969 10.6637 8.93969L5.51367 17.8597L7.24367 18.8597L8.74367 16.2597L10.4737 17.2597L7.47367 22.4597L9.20367 23.4597L15.4937 12.5697C16.6337 14.1197 16.8237 16.2597 15.8037 18.0297L17.5337 19.0297C19.1337 16.2797 18.8137 12.4497 15.8437 9.94969Z" />
      <Path d="M12.7537 3.33969C13.4737 3.74969 14.3837 3.50969 14.8037 2.78969C15.2137 2.06969 14.9737 1.15969 14.2537 0.739694C13.5337 0.329694 12.6237 0.569694 12.2037 1.28969C11.7937 2.00969 12.0337 2.92969 12.7537 3.33969Z" />
    </Svg>
  )
}

Icon.displayName = 'SportsHandball'

/**
 * Material Icon: Sports Handball
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:sports_handball Material Icon Docs}
 */
export const SportsHandball = memo(Icon)
