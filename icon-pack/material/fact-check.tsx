import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path
        d="M20 3H4C2.9 3 2 3.9 2 5V19C2 20.1 2.9 21 4 21H20C21.1 21 22 20.1 22 19V5C22 3.9 21.1 3 20 3ZM20 19H4V5H20V19Z"
        fillRule="evenodd"
        clipRule="evenodd"
      />
      <Path
        d="M19.41 10.42L17.99 9L14.82 12.17L13.41 10.75L12 12.16L14.82 15L19.41 10.42Z"
        fillRule="evenodd"
        clipRule="evenodd"
      />
      <Path d="M10 7H5V9H10V7Z" />
      <Path d="M10 11H5V13H10V11Z" />
      <Path d="M10 15H5V17H10V15Z" />
    </Svg>
  )
}

Icon.displayName = 'FactCheck'

/**
 * Material Icon: Fact Check
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:fact_check Material Icon Docs}
 */
export const FactCheck = memo(Icon)
