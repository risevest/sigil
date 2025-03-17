import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M17 8H7C5.9 8 5 8.9 5 10V20C5 21.1 5.9 22 7 22H17C18.1 22 19 21.1 19 20V10C19 8.9 18.1 8 17 8ZM13 20.5H11V19H13V20.5ZM13 18H11C11 16.5 8.5 15 8.5 13C8.5 11.07 10.07 9.5 12 9.5C13.93 9.5 15.5 11.07 15.5 13C15.5 15 13 16.5 13 18ZM18 6.5H6C6 5.67 6.67 5 7.5 5H16.5C17.33 5 18 5.67 18 6.5ZM17 3.5H7C7 2.67 7.67 2 8.5 2H15.5C16.33 2 17 2.67 17 3.5Z" />
    </Svg>
  )
}

Icon.displayName = 'BatchPrediction'

/**
 * Material Icon: Batch Prediction
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:batch_prediction Material Icon Docs}
 */
export const BatchPrediction = memo(Icon)
