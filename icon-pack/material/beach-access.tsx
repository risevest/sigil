import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M20.9963 19.571L19.5693 20.999L13.1273 14.557L14.5573 13.129L20.9963 19.571ZM13.1163 3.00098C10.5363 3.00098 7.95628 3.98098 5.97628 5.95098L5.96628 5.96098C2.01628 9.91098 2.01628 16.321 5.96628 20.271L20.2663 5.96098C18.2963 3.99098 15.7063 3.00098 13.1163 3.00098ZM6.13628 17.271C5.39628 16.031 4.99628 14.611 4.99628 13.121C4.99628 12.191 5.15628 11.301 5.45628 10.451C5.64628 12.361 6.34628 14.241 7.52628 15.891L6.13628 17.271ZM8.97628 14.431C7.62628 12.381 7.11628 9.93098 7.59628 7.60098C8.17628 7.48098 8.75628 7.42098 9.34628 7.42098C11.1463 7.42098 12.8963 7.97098 14.4263 8.98098L8.97628 14.431ZM10.4463 5.46098C11.2963 5.16098 12.1863 5.00098 13.1163 5.00098C14.6063 5.00098 16.0263 5.40098 17.2663 6.14098L15.8763 7.53098C14.2263 6.35098 12.3563 5.65098 10.4463 5.46098Z" />
    </Svg>
  )
}

Icon.displayName = 'BeachAccess'

/**
 * Material Icon: Beach Access
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:beach_access Material Icon Docs}
 */
export const BeachAccess = memo(Icon)
