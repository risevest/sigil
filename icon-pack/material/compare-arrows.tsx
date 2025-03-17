import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M9.01 14H2V16H9.01V19L13 15L9.01 11V14ZM14.99 13V10H22V8H14.99V5L11 9L14.99 13Z" />
    </Svg>
  )
}

Icon.displayName = 'CompareArrows'

/**
 * Material Icon: Compare Arrows
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:compare_arrows Material Icon Docs}
 */
export const CompareArrows = memo(Icon)
