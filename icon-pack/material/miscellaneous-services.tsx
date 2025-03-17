import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M14.1684 13.7295L15.5684 11.3095C15.6584 11.1595 15.6184 10.9695 15.4884 10.8595L14.0084 9.69953C14.0384 9.47953 14.0584 9.24953 14.0584 9.01953C14.0584 8.78953 14.0384 8.55953 14.0084 8.32953L15.4884 7.16953C15.6184 7.05953 15.6584 6.86953 15.5684 6.71953L14.1684 4.29953C14.0784 4.14953 13.8984 4.08953 13.7384 4.14953L11.9984 4.84953C11.6384 4.56953 11.2484 4.33953 10.8184 4.15953L10.5584 2.30953C10.5284 2.14953 10.3784 2.01953 10.2084 2.01953H7.40842C7.23842 2.01953 7.08842 2.14953 7.05842 2.31953L6.79842 4.16953C6.37842 4.34953 5.97842 4.57953 5.61842 4.85953L3.87842 4.15953C3.71842 4.09953 3.53842 4.15953 3.44842 4.30953L2.04842 6.72953C1.95842 6.87953 1.99842 7.06953 2.12842 7.17953L3.60842 8.33953C3.57842 8.55953 3.55842 8.78953 3.55842 9.01953C3.55842 9.24953 3.57842 9.47953 3.60842 9.70953L2.12842 10.8695C1.99842 10.9795 1.95842 11.1695 2.04842 11.3195L3.44842 13.7395C3.53842 13.8895 3.71842 13.9495 3.87842 13.8895L5.61842 13.1895C5.97842 13.4695 6.36842 13.6995 6.79842 13.8795L7.05842 15.7295C7.08842 15.8895 7.23842 16.0195 7.40842 16.0195H10.2084C10.3784 16.0195 10.5284 15.8895 10.5584 15.7195L10.8184 13.8695C11.2384 13.6895 11.6384 13.4595 11.9984 13.1795L13.7384 13.8795C13.8984 13.9395 14.0784 13.8795 14.1684 13.7295ZM8.80842 11.0195C7.70842 11.0195 6.80842 10.1195 6.80842 9.01953C6.80842 7.91953 7.70842 7.01953 8.80842 7.01953C9.90842 7.01953 10.8084 7.91953 10.8084 9.01953C10.8084 10.1195 9.90842 11.0195 8.80842 11.0195Z" />
      <Path d="M21.9184 18.6895L20.9584 17.9495C20.9784 17.8095 20.9984 17.6595 20.9984 17.5095C20.9984 17.3595 20.9884 17.2095 20.9584 17.0695L21.9084 16.3295C21.9884 16.2595 22.0184 16.1395 21.9584 16.0395L21.0584 14.4895C21.0084 14.3895 20.8884 14.3595 20.7784 14.3895L19.6684 14.8395C19.4384 14.6595 19.1884 14.5095 18.9084 14.3995L18.7384 13.2195C18.7284 13.0995 18.6284 13.0195 18.5284 13.0195H16.7384C16.6284 13.0195 16.5284 13.0995 16.5184 13.2095L16.3484 14.3895C16.0784 14.5095 15.8184 14.6495 15.5884 14.8295L14.4784 14.3795C14.3784 14.3395 14.2584 14.3795 14.1984 14.4795L13.2984 16.0295C13.2484 16.1295 13.2584 16.2495 13.3484 16.3195L14.2984 17.0595C14.2784 17.1995 14.2684 17.3495 14.2684 17.4995C14.2684 17.6495 14.2784 17.7995 14.2984 17.9395L13.3484 18.6795C13.2684 18.7495 13.2384 18.8695 13.2984 18.9695L14.1984 20.5195C14.2484 20.6195 14.3684 20.6495 14.4784 20.6195L15.5884 20.1695C15.8184 20.3495 16.0684 20.4995 16.3484 20.6095L16.5184 21.7895C16.5384 21.8995 16.6284 21.9795 16.7384 21.9795H18.5284C18.6384 21.9795 18.7384 21.8995 18.7484 21.7895L18.9184 20.6095C19.1884 20.4895 19.4484 20.3495 19.6684 20.1695L20.7884 20.6195C20.8884 20.6595 21.0084 20.6195 21.0684 20.5195L21.9684 18.9695C22.0284 18.8795 21.9984 18.7595 21.9184 18.6895ZM17.6284 18.8495C16.8884 18.8495 16.2784 18.2495 16.2784 17.4995C16.2784 16.7495 16.8784 16.1495 17.6284 16.1495C18.3784 16.1495 18.9784 16.7495 18.9784 17.4995C18.9784 18.2495 18.3684 18.8495 17.6284 18.8495Z" />
    </Svg>
  )
}

Icon.displayName = 'MiscellaneousServices'

/**
 * Material Icon: Miscellaneous Services
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:miscellaneous_services Material Icon Docs}
 */
export const MiscellaneousServices = memo(Icon)
