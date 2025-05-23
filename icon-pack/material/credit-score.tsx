import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M20 3H4C2.89 3 2.01 3.89 2.01 5L2 17C2 18.11 2.89 19 4 19H9V17H4V11H22V5C22 3.89 21.11 3 20 3ZM20 7H4V5H20V7ZM14.93 18.17L12.1 15.34L10.69 16.75L14.93 21L22 13.93L20.59 12.52L14.93 18.17Z" />
    </Svg>
  )
}

Icon.displayName = 'CreditScore'

/**
 * Material Icon: Credit Score
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:credit_score Material Icon Docs}
 */
export const CreditScore = memo(Icon)
