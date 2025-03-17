import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M15.5 14.5C15.5 16.5 13 18 13 19.5H11C11 18 8.5 16.5 8.5 14.5C8.5 12.57 10.07 11 12 11C13.93 11 15.5 12.57 15.5 14.5ZM13 20.5H11V22H13V20.5ZM19 14C19 15.68 18.41 17.21 17.42 18.42L18.84 19.84C20.18 18.27 21 16.23 21 14C21 11.26 19.77 8.81 17.84 7.16L16.42 8.58C17.99 9.86 19 11.82 19 14ZM16 6L12 2V5C7.03 5 3 9.03 3 14C3 16.23 3.82 18.27 5.16 19.84L6.58 18.42C5.59 17.21 5 15.68 5 14C5 10.14 8.14 7 12 7V10L16 6Z" />
    </Svg>
  )
}

Icon.displayName = 'ModelTraining'

/**
 * Material Icon: Model Training
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:model_training Material Icon Docs}
 */
export const ModelTraining = memo(Icon)
