import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 28 28" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M24.5 23.5H3V5.75C3 4.79 3.79 4 4.75 4H20.5V8.98H22.75C23.71 8.98 24.5 9.77 24.5 10.73V23.5ZM4.5 22H23V10.73C23 10.59 22.89 10.48 22.75 10.48H7.81V8.98H19V5.5H4.75C4.61 5.5 4.5 5.61 4.5 5.75V22ZM17.75 18.58C17.01 18.58 16.32 18.29 15.8 17.76C15.29 17.26 15 16.57 15 15.83C15 15.09 15.29 14.4 15.82 13.88C16.32 13.37 17.01 13.08 17.75 13.08C19.27 13.08 20.5 14.31 20.5 15.83C20.5 16.57 20.21 17.26 19.69 17.77C19.18 18.29 18.49 18.58 17.75 18.58ZM17.75 14.58C17.42 14.58 17.11 14.71 16.88 14.94C16.63 15.18 16.5 15.49 16.5 15.83C16.5 16.17 16.63 16.47 16.86 16.7C17.34 17.2 18.16 17.18 18.62 16.71H18.63C18.86 16.47 18.99 16.16 18.99 15.82C18.99 15.13 18.43 14.57 17.74 14.57L17.75 14.58Z" />
    </Svg>
  )
}

Icon.displayName = 'WalletInactive'

export const WalletInactive = memo(Icon)
