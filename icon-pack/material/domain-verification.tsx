import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path
        d="M16.6 10.88L15.18 9.46L10.94 13.71L8.82 11.58L7.4 13L10.94 16.54L16.6 10.88Z"
        fill={color}
      />
      <Path
        d="M19 4H5C3.89 4 3 4.9 3 6V18C3 19.1 3.89 20 5 20H19C20.1 20 21 19.1 21 18V6C21 4.9 20.11 4 19 4ZM19 18H5V8H19V18Z"
        fill={color}
      />
    </Svg>
  )
}

Icon.displayName = 'DomainVerification'

/**
 * Material Icon: Domain Verification
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:domain_verification Material Icon Docs}
 */
export const DomainVerification = memo(Icon)
