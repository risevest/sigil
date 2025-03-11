import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 28 28" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M22.93 9H7.82V7.5H20.5V4H4.75C3.79 4 3 4.78 3 5.75V23.5H24.5V10.73C24.5 9.82 23.82 9.08 22.93 9ZM19.69 17.77C19.18 18.29 18.49 18.58 17.75 18.58C17.01 18.58 16.32 18.29 15.8 17.76C15.29 17.26 15 16.57 15 15.83C15 15.09 15.29 14.39 15.82 13.88C16.32 13.37 17.01 13.08 17.75 13.08C19.27 13.08 20.5 14.31 20.5 15.83C20.5 16.57 20.21 17.26 19.69 17.77Z" />
    </Svg>
  )
}

Icon.displayName = 'WalletActive'

export const WalletActive = memo(Icon)
