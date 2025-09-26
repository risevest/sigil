import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 28 28" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M25 23.46H3V9.56L4.77 5.03C5.1 4.37 5.7 4 6.36 4H21.63C22.3 4 22.9 4.37 23.19 4.97L24.99 9.56V23.46H25ZM4.5 21.96H23.5V9.84L21.83 5.57C21.83 5.57 21.73 5.49 21.63 5.49H6.36C6.27 5.49 6.18 5.54 6.14 5.63L4.5 9.83V21.96Z" />
      <Path d="M21.02 8.94995H6.97998V10.45H21.02V8.94995Z" />
      <Path d="M14.4697 12.75H12.9697V14.32H14.4697V12.75Z" />
      <Path d="M14.4697 18.5701H12.9697V20.1401H14.4697V18.5701Z" />
      <Path d="M15.19 19.17H11.52V17.97H14.59V17.02H12.1C11.77 17.02 11.5 16.75 11.5 16.42V14.32C11.5 13.99 11.77 13.72 12.1 13.72H15.75V14.92H12.7V15.82H15.19C15.52 15.82 15.79 16.09 15.79 16.42V18.57C15.79 18.9 15.52 19.17 15.19 19.17Z" />
    </Svg>
  )
}

Icon.displayName = 'InvestInactive'

export const InvestInactive = memo(Icon)
