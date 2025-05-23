import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 28 28" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M22.66 4.96C22.36 4.37 21.76 4 21.09 4H6.37C5.7 4 5.1 4.37 4.78 5.03L3 9.55V23.46H24.46V9.55L22.66 4.96ZM15.87 18.57C15.87 18.9 15.6 19.17 15.27 19.17H14.55V20.14H13.05V19.17H11.6V17.97H14.67V17.02H12.18C11.85 17.02 11.58 16.75 11.58 16.42V14.31C11.58 13.98 11.85 13.71 12.18 13.71H13.05V12.74H14.55V13.71H15.83V14.92H12.78V15.81H15.27C15.6 15.81 15.87 16.08 15.87 16.42V18.57ZM20.48 10.45H6.98V8.95H20.48V10.45Z" />
    </Svg>
  )
}

Icon.displayName = 'InvestActive'

export const InvestActive = memo(Icon)
