import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 25 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M12.8946 22.0019C7.37169 22.0019 2.89453 17.5248 2.89453 12.0019C2.89453 6.4791 7.37169 2.00195 12.8946 2.00195C18.4174 2.00195 22.8946 6.4791 22.8946 12.0019C22.8946 17.5248 18.4174 22.0019 12.8946 22.0019ZM10.3945 9.00195L7.89453 11.5019L12.8938 16.5019L17.8946 11.5019L15.3946 9.00195H10.3945Z" />
    </Svg>
  )
}

Icon.displayName = 'CopperDiamondFill'

export const CopperDiamondFill = memo(Icon)
